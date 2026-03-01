'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FRAME_COUNT = 120

export default function ScrollyCanvas() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [images, setImages] = useState([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Canvas opacity - always visible
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1])

  // Overlay opacity - fades out after the first section
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [0.75, 0.75, 0])

  // Preload all images
  useEffect(() => {
    const loadedImages = []
    let loadedCount = 0
    
    // List of all frame filenames (handles different delay values)
    const frameFiles = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const indexStr = i.toString().padStart(3, '0')
      return `frame_${indexStr}.webp`
    })

    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = `/sequence/${frameFiles[index]}`
        
        img.onload = () => {
          loadedImages[index] = img
          loadedCount++
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages)
            setTimeout(() => setImagesLoaded(true), 800)
          }
          resolve()
        }
        
        img.onerror = () => {
          console.error(`Failed to load frame ${index}: ${frameFiles[index]}`)
          loadedCount++
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages)
            setTimeout(() => setImagesLoaded(true), 800)
          }
          resolve()
        }
      })
    }

    // Load all frames
    Promise.all(Array.from({ length: FRAME_COUNT }, (_, i) => loadImage(i)))
  }, [])

  // Render frame based on scroll progress
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    const updateCanvas = () => {
      const progress = scrollYProgress.get()
      const frameIndex = Math.min(
        Math.floor(progress * FRAME_COUNT),
        FRAME_COUNT - 1
      )

      const img = images[frameIndex]
      if (!img) return

      // Set canvas size - full screen (using document client width to exclude scrollbar width)
      const { innerHeight } = window
      const canvasHeight = innerHeight
      const canvasWidth = document.documentElement.clientWidth
      
      // Get physical screen pixel ratio
      const dpr = window.devicePixelRatio || 1
      
      // Set actual size in memory (scaled to account for pixel density)
      canvas.width = canvasWidth * dpr
      canvas.height = canvasHeight * dpr
      
      // Set display CSS size
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasHeight}px`

      // Normalize coordinate system to use CSS pixels
      context.scale(dpr, dpr)

      // Use standard cover logic to fit screen end-to-end (using logical css pixels)
      const scale = Math.max(
        canvasWidth / img.width,
        canvasHeight / img.height
      )

      const scaledWidth = img.width * scale
      const scaledHeight = img.height * scale

      const x = (canvasWidth / 2) - (scaledWidth / 2)
      const y = (canvasHeight / 2) - (scaledHeight / 2)

      context.clearRect(0, 0, canvasWidth, canvasHeight)
      context.drawImage(img, x, y, scaledWidth, scaledHeight)
    }

    // Initial render
    updateCanvas()

    // Update on scroll
    const unsubscribe = scrollYProgress.on('change', updateCanvas)

    // Update on resize
    window.addEventListener('resize', updateCanvas)

    return () => {
      unsubscribe()
      window.removeEventListener('resize', updateCanvas)
    }
  }, [images, imagesLoaded, scrollYProgress])

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="w-full h-full"
        />
        
        {/* Theme-aware overlay to blend 3D canvas with background in light/dark mode, fading out on scroll */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-background pointer-events-none transition-colors duration-500" 
        />
      </div>
    </div>
  )
}
