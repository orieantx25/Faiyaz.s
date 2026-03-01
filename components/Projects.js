'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, FileText, Eye, Users } from 'lucide-react'
import { useState } from 'react'
import { BarChart, PieChart } from './Charts'
import ContactForm from './ContactForm'

const projects = [
  {
    title: 'Assamese-English Translator',
    description: 'Transformer-based NLP model for real-time bilingual translation using attention mechanisms.',
    fullDescription: 'Built a sequence-to-sequence bilingual NLP model using Transformer architecture. Preprocessed large bilingual datasets, tokenized sequences, and optimized GPU training pipelines. Performed real-time model evaluation and validation using TensorFlow. Achieved high accuracy in translating between Assamese and English languages.',
    tech: ['TensorFlow', 'Transformers', 'Python', 'NLP', 'BERT'],
    category: 'AI/ML',
    color: 'text-violet-500',
    gradient: 'from-violet-600/20 to-purple-600/20',
    metrics: 'Trained on 50K+ sentence pairs'
  },
  {
    title: 'Real-Time Facial Recognition',
    description: 'End-to-end attendance automation system with Flask backend and SQL database integration.',
    fullDescription: 'Developed complete attendance automation system using OpenCV, Python, Flask, and SQL. Integrated TensorFlow, Haar Cascade classifiers, and MediaPipe for facial detection. Automated periodic data fetch and report generation in JSON and Excel formats. Achieved 95%+ recognition accuracy in real-world conditions.',
    tech: ['OpenCV', 'Flask', 'TensorFlow', 'SQL', 'MediaPipe'],
    category: 'Computer Vision',
    color: 'text-blue-500',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    metrics: '95%+ accuracy, 100ms response time'
  },
  {
    title: 'ANPR Authentication System',
    description: 'Automated vehicle authentication using YOLOv8 and EasyOCR with 90% efficiency improvement.',
    fullDescription: 'Developed ANPR system using YOLOv8 and EasyOCR for automated vehicle authentication at Indian Oil Corporation Limited. Improved authentication and process efficiency by 90%. Real-time license plate detection and recognition with high accuracy across various lighting and weather conditions.',
    tech: ['YOLOv8', 'EasyOCR', 'Python', 'CV', 'PyTorch'],
    category: 'Deep Learning',
    color: 'text-emerald-500',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    metrics: '90% efficiency improvement'
  },
  {
    title: 'Growth Analytics Dashboard',
    description: 'Strategic dashboards tracking acquisition, retention, and revenue metrics for GTM initiatives.',
    fullDescription: 'Built comprehensive dashboards tracking acquisition, retention, and revenue metrics to support strategic growth initiatives. Analyzed funnel conversion, campaign performance, and ROI. Performed cohort analysis and forecasting for GTM opportunities. Collaborated with marketing, product, and sales teams to improve lead lifecycle efficiency.',
    tech: ['Power BI', 'SQL', 'Python', 'Analytics', 'Looker Studio'],
    category: 'Business Intelligence',
    color: 'text-orange-500',
    gradient: 'from-orange-600/20 to-red-600/20',
    metrics: 'Tracking 100K+ user journeys'
  },
  {
    title: 'Student Management System (Mini-ERP)',
    description: 'Built a GUI app in Python using CustomTkinter for CRUD operations using SQL backend database with dynamic search.',
    fullDescription: 'Built a GUI app in Python using CustomTkinter for CRUD operations using SQL backend database with dynamic search, upload features and analytics reporting. Designed features for file upload/download and report generation with access management.',
    tech: ['Python', 'CustomTkinter', 'SQL', 'GUI', 'Analytics'],
    category: 'Software Development',
    color: 'text-pink-500',
    gradient: 'from-pink-600/20 to-rose-600/20',
    metrics: 'Comprehensive CRUD & Analytics'
  },
  {
    title: 'Matrix Multiplication Optimizer (C++)',
    description: 'Developed a high-performance matrix multiplication tool achieving up to 3x faster execution.',
    fullDescription: 'Developed a high-performance matrix multiplication tool using C++11, OpenMP (multi-threading), and SIMD intrinsics for parallel computation achieving up to 3x faster execution.',
    tech: ['C++', 'OpenMP', 'SIMD'],
    category: 'High-Performance Computing',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/30 to-teal-500/30',
    metrics: '3x faster execution'
  }
]

const experience = [
  {
    company: 'upGrad - School of Technology',
    role: 'Analyst - Growth and Strategy',
    period: 'Oct 2025 – Present',
    location: 'Bengaluru, KA',
    description: 'Analyzing acquisition, retention, and revenue metrics to support strategic growth initiatives. Building dashboards to track funnel conversion, campaign performance, and ROI. Performing cohort analysis and forecasting for GTM opportunities.',
    highlights: ['Built 10+ strategic dashboards', 'Improved conversion rate by 25%', 'Led cross-functional analytics initiatives'],
    hoverColorClass: 'hover:text-[#ef4444]' // Red
  },
  {
    company: 'Tek Wissen Software',
    role: 'Jr. Program Coordinator',
    period: 'Nov 2024 – Sep 2025',
    location: 'Visakhapatnam, AP',
    description: 'Managed Ceipal HRMS systems and optimized ATS sourcing pipelines. Created workforce analytics dashboards using Power BI. Maintained Azure SQL databases and validated structured/unstructured datasets.',
    highlights: ['Managed HRMS for 500+ employees', 'Created 15+ Power BI dashboards', 'Optimized data pipelines reducing processing time by 40%'],
    hoverColorClass: 'hover:text-[#38bdf8]' // Sky Blue
  },
  {
    company: 'Indian Oil Corporation Limited',
    role: 'Summer Intern',
    period: 'Aug 2023 – Sep 2023',
    location: 'Digboi, AS',
    description: 'Developed ANPR system using YOLOv8 and EasyOCR for automated vehicle authentication. Improved authentication and process efficiency by 90%.',
    highlights: ['Deployed AI-powered ANPR system', '90% efficiency improvement', 'Real-time vehicle authentication'],
    hoverColorClass: 'hover:text-[#f97316]' // Orange
  },
  {
    company: 'Cotton University',
    role: 'Research Intern',
    period: 'Aug 2022 – Sep 2022',
    location: 'Guwahati, AS',
    description: 'Conducted exploratory analysis of Depth-First Search (DFS) algorithm and backtracking algorithms. Explored Linux file search system using virtual machines enabled by Oracle VirtualBox.',
    highlights: ['Documented experiments, identifying optimization patterns for improved efficiency', 'Exploratory analysis of DFS and backtracking'],
    hoverColorClass: 'hover:text-[#22c55e]' // Green
  },
  {
    company: 'Maan Ki Umeed',
    role: 'Content Writer and Social Media Analyst',
    period: 'Jan 2021 – Oct 2022',
    location: 'Remote',
    description: 'Worked as Content Writer and Instagram Post Designer. Designed visual themes and layouts for the organization’s social media pages.',
    highlights: ['Achieved a 30% increase in post engagement on Instagram', 'Created short articles and performed web scraping of information'],
    hoverColorClass: 'hover:text-[#eab308]' // Yellow
  }
]

const education = [
  {
    institution: 'Assam Science and Technology University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    period: '2020 – 2024',
    description: 'Focus on Machine Learning, Data Structures, and Software Engineering',
    hoverColorClass: 'hover:text-[#1d4ed8]' // Dark Blue
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary',
    field: 'Science PCM',
    period: '2008 – 2020',
    description: 'Physics, Chemistry, Mathematics',
    hoverColorClass: 'hover:text-[#800000]' // Maroon
  }
]

const certifications = [
  {
    title: 'Data Analysis & Power BI',
    issuer: 'Tutedude',
    year: '2024'
  },
  {
    title: 'Business Analysis',
    issuer: 'Microsoft & LinkedIn',
    year: '2024'
  },
  {
    title: 'Prompt Engineering & Generative AI',
    issuer: 'LinkedIn',
    year: '2024'
  }
]

const skills = [
  // Programming & Web Development
  'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Python', 'SQL', 'C/C++',
  // Data Analytics & BI
  'Power BI', 'Tableau', 'Looker Studio', 'Excel', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis', 'DAX', 'ETL',
  // Machine Learning & AI
  'Vibe Coding', 'Prompt Engineering', 'Generative AI', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision', 'Deep Learning', 'Neural Networks', 'YOLO',
  // Big Data & Cloud
  'Spark', 'Hive', 'Athena', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  // Databases
  'MongoDB', 'PostgreSQL', 'MySQL', 'Azure SQL',
  // Tools & Others
  'Git', 'Jupyter', 'VS Code', 'Matplotlib', 'Seaborn', 'Flask', 'FastAPI'
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [hoveredExperience, setHoveredExperience] = useState(null)
  const [isBuildingOpen, setIsBuildingOpen] = useState(false)

  const hustleOptions = [
    { icon: Mail, label: 'Invite', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sababfaiyaz25@gmail.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Eye, label: 'Glimpse', href: 'https://gyanx.in/', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Collaborate', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=faiyaz@gyanx.in', color: 'from-orange-500 to-red-500' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-background min-h-screen relative">
      {/* Projects Grid */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32"
      >
        <motion.div variants={itemVariants} className="mb-12 md:mb-20">
          <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 md:mb-6 inline-block cursor-default transition-colors">Featured Work</motion.h2>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg sm:text-xl text-muted-foreground max-w-2xl cursor-default">
            A selection of projects that showcase my expertise in AI, data analytics, and full-stack development.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 } 
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative h-full flex flex-col sticky md:static"
              style={{ 
                top: `calc(5rem + ${index * 1.5}rem)`, 
                transformStyle: 'preserve-3d',
                zIndex: index 
              }}
            >
              <div className="glass bg-background/95 dark:bg-[#0a0a0a]/95 md:bg-background/80 md:dark:bg-transparent overflow-hidden relative rounded-2xl p-5 sm:p-8 h-full border dark:border-white/10 border-black/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] md:shadow-none">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${project.gradient}`}></div>
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${project.color || 'text-muted-foreground'}`}>
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <motion.h3 whileHover={{ scale: 1.05, originX: 0, color: 'var(--primary)' }} className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-foreground/90 transition-colors cursor-default">
                  {project.title}
                </motion.h3>
                
                <motion.p whileHover={{ scale: 1.02, originX: 0 }} className="text-muted-foreground mb-4 leading-relaxed cursor-default">
                  {hoveredProject === index ? project.fullDescription : project.description}
                </motion.p>
                
                <motion.div whileHover={{ scale: 1.05, originX: 0 }} className="text-xs text-primary/80 font-semibold mb-4 cursor-default">
                  {project.metrics}
                </motion.div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-foreground/80 bg-primary/5 rounded-full border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border"
      >
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-10 md:mb-16 inline-block cursor-default transition-colors">
          Experience
        </motion.h2>

        <div className="flex flex-col gap-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                rotateX: 1,
                transition: { duration: 0.3 } 
              }}
              onHoverStart={() => setHoveredExperience(index)}
              onHoverEnd={() => setHoveredExperience(null)}
              className="glass bg-background/95 dark:bg-[#0a0a0a]/95 md:bg-background/80 md:dark:bg-transparent overflow-hidden relative rounded-xl p-5 sm:p-8 border dark:border-white/10 border-black/10 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-blue-500/10 dark:shadow-none shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] md:shadow-none sticky md:static"
              style={{ 
                top: `calc(5rem + ${index * 1.5}rem)`, 
                transformStyle: 'preserve-3d',
                zIndex: index
              }}
            >
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-blue-500 to-cyan-400 pointer-events-none`}></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <motion.h3 whileHover={{ scale: 1.02, originX: 0 }} className={`text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 cursor-default transition-colors ${exp.hoverColorClass}`}>{exp.company}</motion.h3>
                  <motion.p whileHover={{ scale: 1.02, originX: 0, color: 'var(--primary)' }} className="text-base sm:text-lg text-foreground/80 cursor-default transition-colors">{exp.role}</motion.p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <motion.p whileHover={{ scale: 1.05, originX: 1 }} className="text-muted-foreground cursor-default">{exp.period}</motion.p>
                  <motion.p whileHover={{ scale: 1.05, originX: 1 }} className="text-muted-foreground/60 text-sm cursor-default">{exp.location}</motion.p>
                </div>
              </div>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredExperience === index ? 'auto' : 0,
                  opacity: hoveredExperience === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground mt-4 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border"
      >
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-10 md:mb-16 inline-block cursor-default transition-colors">
          Education
        </motion.h2>

        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-6 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, rotateY: 1 }}
              className="glass shrink-0 w-[85vw] md:w-auto snap-center overflow-hidden relative rounded-xl p-5 sm:p-8 border dark:border-white/10 border-black/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-purple-500/10 dark:shadow-none"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute top-1/2 left-0 w-32 h-32 -translate-y-1/2 -ml-16 rounded-full blur-3xl opacity-10 bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none`}></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <motion.h3 whileHover={{ scale: 1.02, originX: 0 }} className={`text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 cursor-default transition-colors ${edu.hoverColorClass}`}>{edu.institution}</motion.h3>
                  <motion.p whileHover={{ scale: 1.02, originX: 0, color: 'var(--primary)' }} className="text-base sm:text-lg text-foreground/80 mb-1 cursor-default transition-colors">{edu.degree} in {edu.field}</motion.p>
                  <motion.p whileHover={{ scale: 1.02, originX: 0 }} className="text-sm text-muted-foreground cursor-default">{edu.description}</motion.p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <motion.p whileHover={{ scale: 1.05, originX: 1 }} className="text-muted-foreground cursor-default">{edu.period}</motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border"
      >
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-10 md:mb-16 inline-block cursor-default transition-colors">
          Certifications
        </motion.h2>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className="glass shrink-0 w-[70vw] md:w-auto snap-center overflow-hidden relative rounded-xl p-5 sm:p-6 border dark:border-white/10 border-black/10 hover:border-primary/30 transition-all duration-300 text-center shadow-sm hover:shadow-xl dark:shadow-none"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 bg-gradient-to-bl from-blue-500 to-purple-500 pointer-events-none`}></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <ExternalLink className={`w-5 h-5 sm:w-6 sm:h-6 ${['text-blue-500', 'text-purple-500', 'text-pink-500'][index % 3]}`} />
              </div>
              <motion.h3 whileHover={{ scale: 1.05 }} className={`text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 cursor-default transition-colors ${['hover:text-blue-500', 'hover:text-purple-500', 'hover:text-pink-500'][index % 3]}`}>{cert.title}</motion.h3>
              <motion.p whileHover={{ scale: 1.05 }} className="text-sm text-muted-foreground mb-1 cursor-default">{cert.issuer}</motion.p>
              <motion.p whileHover={{ scale: 1.05 }} className="text-xs text-muted-foreground/60 cursor-default">{cert.year}</motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border"
      >
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-10 md:mb-16 inline-block cursor-default transition-colors">
          Skills & Technologies
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-foreground/90 glass rounded-full border hover:border-primary/30 transition-all cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Data Visualization Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border"
      >
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-10 md:mb-16 text-center inline-block cursor-default transition-colors w-full">
          Data Insights
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            variants={itemVariants}
            className="glass rounded-2xl p-5 sm:p-8 border hover:border-primary/20 transition-all"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Skills Proficiency</h3>
            <BarChart />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass rounded-2xl p-5 sm:p-8 border hover:border-primary/20 transition-all"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Domain Distribution</h3>
            <PieChart />
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32 border-t border-border relative"
      >
        {/* Floating button trigger */}
        <div id="floating-button-trigger" className="absolute top-0" />
        
        <motion.div variants={itemVariants} className="text-center w-full">
          <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3 sm:mb-4 inline-block cursor-default transition-colors">
            Let's Connect
          </motion.h2>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg sm:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto cursor-default">
            Based in Bengaluru, India. Open to opportunities and collaborations. Feel free to reach out!
          </motion.p>
          
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch justify-center w-full max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 flex">
              <ContactForm />
            </div>

            {/* Social Links Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-6 mt-4 sm:mt-8 lg:mt-0 self-stretch content-start">
              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sababfaiyaz25@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 lg:col-span-2 order-1 w-full px-3 sm:px-8 py-4 sm:py-6 rounded-2xl border border-red-500/20 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 transition-all pointer-events-auto shadow-sm dark:bg-red-500/10 dark:hover:bg-red-600/90 dark:text-red-400 dark:hover:text-white text-center"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span className="text-sm sm:text-lg whitespace-nowrap">Email Me</span>
              </motion.a>

              {/* Resume */}
              <motion.a
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                href="/Faiyaz_Sabab_Resume.pdf"
                download
                className="col-span-1 lg:col-span-2 order-2 lg:order-4 w-full px-3 sm:px-8 py-4 sm:py-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 transition-all pointer-events-auto shadow-sm text-center"
              >
                <FileText className="w-5 h-5 shrink-0" />
                <span className="text-sm sm:text-lg">Resume</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                href="https://linkedin.com/in/faiyaz-sabab-0925-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 order-3 lg:order-2 glass w-full px-2 sm:px-8 py-4 sm:py-6 rounded-2xl border dark:border-white/10 border-black/10 hover:border-primary/30 text-foreground font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 transition-all pointer-events-auto shadow-sm text-center"
              >
                <Linkedin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                href="https://github.com/orieantx25"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 order-4 lg:order-3 glass w-full px-2 sm:px-8 py-4 sm:py-6 rounded-2xl border dark:border-white/10 border-black/10 hover:border-primary/30 text-foreground font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 transition-all pointer-events-auto shadow-sm text-center"
              >
                <Github className="w-5 h-5 text-purple-500 shrink-0" />
                <span className="text-sm sm:text-base">GitHub</span>
              </motion.a>

              {/* Building Something (Mobile Only) */}
              <div className="col-span-2 order-5 lg:hidden flex flex-col mt-2 gap-3 items-center w-full">
                <button
                  onClick={() => setIsBuildingOpen(!isBuildingOpen)}
                  className="w-auto px-6 py-2.5 rounded-full bg-foreground text-background font-bold text-xs shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95 border relative z-10"
                >
                  Building something 👀
                </button>
                <AnimatePresence>
                  {isBuildingOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, scale: 0.95 }}
                      animate={{ opacity: 1, height: 'auto', scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-row items-stretch justify-center gap-2 flex-wrap sm:flex-nowrap w-full overflow-hidden"
                    >
                      {hustleOptions.map((opt, i) => {
                        const Icon = opt.icon
                        return (
                          <motion.a
                            key={i}
                            href={opt.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center gap-1.5 px-2 py-2.5 rounded-2xl sm:rounded-full bg-gradient-to-r ${opt.color} text-white font-medium shadow-md transition-transform hover:scale-[1.05] active:scale-95 flex-1 min-w-[30%] border border-white/10`}
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="text-[10px] sm:text-xs text-center leading-tight truncate px-1 w-full">{opt.label}</span>
                          </motion.a>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Faiyaz Sabab. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  )
}
