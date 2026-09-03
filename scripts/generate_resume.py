from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

INK = HexColor("#3A3228")
MUTED = HexColor("#6E645A")
LINE = HexColor("#D6CFC4")
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Faiyaz_Sabab_Resume.pdf"


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=18,
            leading=22,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "location": ParagraphStyle(
            "Location",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10.5,
            leading=13,
            textColor=MUTED,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=13,
            textColor=MUTED,
            spaceAfter=10,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=13,
            textColor=HexColor("#1a5f8a"),
            spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=11,
            leading=14,
            textColor=INK,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=13,
            textColor=INK,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10.5,
            leading=13,
            textColor=INK,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=9.5,
            leading=12,
            textColor=MUTED,
        ),
        "right": ParagraphStyle(
            "Right",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=12,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=13,
            textColor=INK,
            leftIndent=12,
            bulletIndent=0,
        ),
    }


def header_row(left, right, s):
    return Table(
        [[Paragraph(left, s["role"]), Paragraph(right, s["right"])]],
        colWidths=[5.3 * inch, 1.9 * inch],
    )


def section_rule():
    rule = Table([[""]], colWidths=[7.2 * inch], rowHeights=[1])
    rule.setStyle(TableStyle([("LINEABOVE", (0, 0), (-1, -1), 0.6, LINE)]))
    return rule


def build():
    s = styles()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title="Faiyaz Sabab Resume",
        author="Faiyaz Sabab",
    )
    story = []

    story.append(Paragraph("Faiyaz Sabab", s["name"]))
    story.append(Paragraph("Bengaluru, India", s["location"]))
    story.append(
        Paragraph(
            '<link href="mailto:sababfaiyaz25@gmail.com">sababfaiyaz25@gmail.com</link>'
            " &nbsp;|&nbsp; "
            '<link href="https://www.linkedin.com/in/faiyaz-sabab-0925-cse">linkedin.com/in/faiyaz-sabab-0925-cse</link>'
            " &nbsp;|&nbsp; "
            '<link href="https://github.com/orieantx25">github.com/orieantx25</link>'
            " &nbsp;|&nbsp; "
            '<link href="https://faiyaz-s.vercel.app/">faiyaz-s.vercel.app</link>',
            s["link"],
        )
    )
    story.append(section_rule())

    story.append(Paragraph("SUMMARY", s["section"]))
    story.append(
        Paragraph(
            "Data analyst focused on turning operational and business data into dashboards, "
            "report hubs, and decisions. Experienced with Looker, Power BI, Python, and SQL "
            "across growth, operations, and workforce analytics. Ships full UI report surfaces "
            "and uses Cursor and Claude Code to move faster from question to prototype.",
            s["body"],
        )
    )

    story.append(Paragraph("EXPERIENCE", s["section"]))

    story.append(header_row("upGrad School of Technology", "Bengaluru", s))
    story.append(Paragraph("Operation &amp; Business Analyst &nbsp;&nbsp; Mar 2026 – Present", s["meta"]))
    for item in [
        "Analyze operational and business data to uncover trends and support strategic decisions.",
        "Design and maintain Looker dashboards for KPIs, data delivery outcomes, and program performance.",
        "Identify bottlenecks in delivery pipelines and improve reporting accuracy through validation and structured processes.",
        "Built a full Python UI dashboard and report hub for internal stakeholders.",
    ]:
        story.append(Paragraph(f"• {item}", s["bullet"]))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Growth & Strategy Analyst &nbsp;&nbsp; Oct 2025 – Apr 2026", s["meta"]))
    for item in [
        "Supported growth initiatives through acquisition, retention, and revenue tracking.",
        "Built databases from scratch and analyzed structured datasets for GTM opportunities.",
        "Partnered across teams on funnel, campaign, and market analysis.",
    ]:
        story.append(Paragraph(f"• {item}", s["bullet"]))

    story.append(Spacer(1, 8))
    story.append(header_row("GyanX (Freelance)", "Bengaluru", s))
    story.append(Paragraph("Product & AI Lead &nbsp;&nbsp; Sep 2025 – Aug 2026", s["meta"]))
    for item in [
        "Led product and AI work for an EdTech venture focused on personalized, data-driven learning.",
        "Designed RAG prototypes, learning workflows, and analytics-minded product surfaces.",
    ]:
        story.append(Paragraph(f"• {item}", s["bullet"]))

    story.append(Spacer(1, 8))
    story.append(header_row("TekWissen", "Visakhapatnam", s))
    story.append(Paragraph("Jr. Program Coordinator &nbsp;&nbsp; Nov 2024 – Sep 2025", s["meta"]))
    for item in [
        "Built workforce and operations analytics dashboards for data-driven decisions.",
        "Validated structured and unstructured datasets and managed Azure SQL with SLA discipline.",
        "Streamlined ATS filtering pipelines and partnered with clients including Amazon, Unisys, and ThermoFisher.",
    ]:
        story.append(Paragraph(f"• {item}", s["bullet"]))

    story.append(Spacer(1, 8))
    story.append(header_row("Indian Oil Corporation Limited", "Digboi", s))
    story.append(Paragraph("Summer Intern &nbsp;&nbsp; Aug 2023 – Sep 2023", s["meta"]))
    story.append(
        Paragraph(
            "• Developed an ANPR authentication system using YOLOv8 and EasyOCR, reducing manual vehicle processing.",
            s["bullet"],
        )
    )

    story.append(Spacer(1, 8))
    story.append(header_row("Cotton University", "Guwahati", s))
    story.append(Paragraph("Research Intern &nbsp;&nbsp; Aug 2022 – Sep 2022", s["meta"]))
    story.append(
        Paragraph(
            "• Researched backtracking and search algorithms, documenting performance limits and optimization patterns.",
            s["bullet"],
        )
    )

    story.append(Spacer(1, 8))
    story.append(header_row("Maan Ki Umeed", "Remote", s))
    story.append(Paragraph("Social Media Analyst &nbsp;&nbsp; Jan 2021 – Oct 2022", s["meta"]))
    story.append(
        Paragraph(
            "• Used content performance data and A/B testing to refine targeting; ~30% lift in post engagement.",
            s["bullet"],
        )
    )

    story.append(Paragraph("PROJECTS", s["section"]))
    projects = [
        (
            "DBRIEF (Debrief F1)",
            "F1 analytics hub for race data, predictions, and historical analysis. Live at "
            '<link href="https://www.debrieff1.in/">debrieff1.in</link>.',
        ),
        (
            "Analytical Dashboard & Report Hub",
            "Looker dashboards and a full Python UI report hub for upGrad School of Technology.",
        ),
        (
            "Growth Analytics Dashboard",
            "Acquisition, retention, and revenue views for GTM decisions using Power BI, SQL, and Looker Studio.",
        ),
        (
            "ANPR Authentication System",
            "Computer-vision vehicle authentication with YOLOv8 and EasyOCR; ~90% efficiency improvement.",
        ),
        (
            "Assamese–English Translator",
            "Transformer-based bilingual NLP model trained on 50K+ sentence pairs.",
        ),
    ]
    for title, desc in projects:
        story.append(Paragraph(title, s["role"]))
        story.append(Paragraph(desc, s["body"]))
        story.append(Spacer(1, 3))

    story.append(Paragraph("SKILLS", s["section"]))
    story.append(
        Paragraph(
            "<b>Analytics & BI:</b> Power BI, Looker, Looker Studio, Tableau, Excel, DAX, ETL, data visualization",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "<b>Data & code:</b> Python, SQL, Pandas, NumPy, statistical analysis, Azure SQL, PostgreSQL",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "<b>Tools:</b> Cursor, Claude Code, Git, AWS, Azure, React, Next.js, Flask",
            s["body"],
        )
    )

    story.append(Paragraph("EDUCATION", s["section"]))
    story.append(header_row("Assam Science and Technology University", "2020 – 2024", s))
    story.append(Paragraph("B.Tech, Computer Science", s["body"]))
    story.append(Spacer(1, 4))
    story.append(header_row("Kendriya Vidyalaya, Nagaon", "2008 – 2020", s))
    story.append(Paragraph("AISSCE / AISSE, Science (PCM)", s["body"]))

    story.append(Paragraph("CERTIFICATIONS", s["section"]))
    story.append(
        Paragraph(
            "Introduction to Data Science (LinkedIn Learning) &nbsp;|&nbsp; "
            "Prompt Engineering for Generative AI (LinkedIn) &nbsp;|&nbsp; "
            "Deloitte Data Analytics Job Simulation &nbsp;|&nbsp; "
            "Career Skills in Data Analytics (LinkedIn) &nbsp;|&nbsp; "
            "Data Analysis & Power BI (Tutedude) &nbsp;|&nbsp; "
            "Business Analysis (Microsoft & LinkedIn)",
            s["body"],
        )
    )

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
