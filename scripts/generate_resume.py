from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

INK = HexColor("#3A3228")
MUTED = HexColor("#6E645A")
LINE = HexColor("#D6CFC4")
LINK = HexColor("#1a5f8a")
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Faiyaz_Sabab_Resume.pdf"

PAGE_W, PAGE_H = A4
LEFT = RIGHT = 0.7 * inch
TOP = BOTTOM = 0.6 * inch
CONTENT_W = PAGE_W - LEFT - RIGHT
# Right column for location / dates
META_W = 1.55 * inch
LEFT_W = CONTENT_W - META_W


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
            spaceAfter=1,
        ),
        "location": ParagraphStyle(
            "Location",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=12,
            textColor=MUTED,
            spaceAfter=3,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            leading=12,
            textColor=LINK,
            spaceAfter=2,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10.5,
            leading=13,
            textColor=INK,
            spaceBefore=11,
            spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=12.5,
            textColor=INK,
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10,
            leading=12.5,
            textColor=INK,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=9,
            leading=11.5,
            textColor=MUTED,
            spaceAfter=1,
        ),
        "right": ParagraphStyle(
            "Right",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            leading=11.5,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=12.5,
            textColor=INK,
            leftIndent=11,
            firstLineIndent=0,
            spaceBefore=0,
            spaceAfter=1,
        ),
        "project_title": ParagraphStyle(
            "ProjectTitle",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10,
            leading=12.5,
            textColor=INK,
            spaceBefore=2,
            spaceAfter=1,
        ),
    }


# ReportLab tables sit flush on the frame edge; flow Paragraphs ink ~6pt inset.
# Match that so company/school names line up with section body text.
TEXT_INSET = 6


def header_row(left, right, s):
    table = Table(
        [[Paragraph(left, s["role"]), Paragraph(right, s["right"])]],
        colWidths=[LEFT_W, META_W],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, -1), TEXT_INSET),
                ("LEFTPADDING", (1, 0), (1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        )
    )
    return table


def education_row(school, dates, detail, s):
    """School + dates on one row, degree under school — shared column edges."""
    table = Table(
        [
            [Paragraph(school, s["role"]), Paragraph(dates, s["right"])],
            [Paragraph(detail, s["body"]), ""],
        ],
        colWidths=[LEFT_W, META_W],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, -1), TEXT_INSET),
                ("LEFTPADDING", (1, 0), (1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 1),
                ("BOTTOMPADDING", (0, 1), (-1, 1), 4),
            ]
        )
    )
    return table


def section_rule():
    rule = Table([[""]], colWidths=[CONTENT_W], rowHeights=[1])
    rule.setStyle(
        TableStyle(
            [
                ("LINEABOVE", (0, 0), (-1, -1), 0.6, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return rule


def bullets(items, s):
    return [Paragraph(f"• {item}", s["bullet"]) for item in items]


def job_block(company, place, role_line, items, s, gap_after=6):
    parts = [header_row(company, place, s), Paragraph(role_line, s["meta"]), *bullets(items, s)]
    if gap_after:
        parts.append(Spacer(1, gap_after))
    return KeepTogether(parts)


def project_block(title, desc, s):
    return KeepTogether(
        [
            Paragraph(title, s["project_title"]),
            Paragraph(desc, s["body"]),
            Spacer(1, 5),
        ]
    )


def build():
    s = styles()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=TOP,
        bottomMargin=BOTTOM,
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
            '<link href="https://www.linkedin.com/in/faiyaz-sabab-0925-cse">linkedin.com/in/faiyaz-sabab-0925-cse</link>',
            s["link"],
        )
    )
    story.append(
        Paragraph(
            '<link href="https://github.com/orieantx25">github.com/orieantx25</link>'
            " &nbsp;|&nbsp; "
            '<link href="https://faiyaz-s.vercel.app/">faiyaz-s.vercel.app</link>'
            " &nbsp;|&nbsp; "
            '<link href="https://www.debrieff1.in/">debrieff1.in</link>',
            s["link"],
        )
    )
    story.append(Spacer(1, 4))
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

    upgrad = [
        header_row("upGrad School of Technology", "Bengaluru", s),
        Paragraph("Operation &amp; Business Analyst &nbsp;&nbsp; Mar 2026 – Present", s["meta"]),
        *bullets(
            [
                "Analyze operational and business data to uncover trends and support strategic decisions.",
                "Design and maintain Looker dashboards for KPIs, data delivery outcomes, and program performance.",
                "Identify bottlenecks in delivery pipelines and improve reporting accuracy through validation and structured processes.",
                "Built a full Python UI dashboard and report hub for internal stakeholders.",
            ],
            s,
        ),
        Spacer(1, 3),
        Paragraph("Growth &amp; Strategy Analyst &nbsp;&nbsp; Oct 2025 – Apr 2026", s["meta"]),
        *bullets(
            [
                "Supported growth initiatives through acquisition, retention, and revenue tracking.",
                "Built databases from scratch and analyzed structured datasets for GTM opportunities.",
                "Partnered across teams on funnel, campaign, and market analysis.",
            ],
            s,
        ),
        Spacer(1, 6),
    ]
    story.append(KeepTogether(upgrad))

    story.append(
        job_block(
            "GyanX (Freelance)",
            "Bengaluru",
            "Product &amp; AI Lead &nbsp;&nbsp; Sep 2025 – Aug 2026",
            [
                "Led product and AI work for an EdTech venture focused on personalized, data-driven learning.",
                "Designed RAG prototypes, learning workflows, and analytics-minded product surfaces.",
            ],
            s,
        )
    )
    story.append(
        job_block(
            "TekWissen",
            "Visakhapatnam",
            "Jr. Program Coordinator &nbsp;&nbsp; Nov 2024 – Sep 2025",
            [
                "Built workforce and operations analytics dashboards for data-driven decisions.",
                "Validated structured and unstructured datasets and managed Azure SQL with SLA discipline.",
                "Streamlined ATS filtering pipelines and partnered with clients including Amazon, Unisys, and ThermoFisher.",
            ],
            s,
        )
    )
    story.append(
        job_block(
            "Indian Oil Corporation Limited",
            "Digboi",
            "Summer Intern &nbsp;&nbsp; Aug 2023 – Sep 2023",
            [
                "Developed an ANPR authentication system using YOLOv8 and EasyOCR, reducing manual vehicle processing.",
            ],
            s,
        )
    )
    story.append(
        job_block(
            "Cotton University",
            "Guwahati",
            "Research Intern &nbsp;&nbsp; Aug 2022 – Sep 2022",
            [
                "Researched backtracking and search algorithms, documenting performance limits and optimization patterns.",
            ],
            s,
        )
    )
    story.append(
        job_block(
            "Maan Ki Umeed",
            "Remote",
            "Social Media Analyst &nbsp;&nbsp; Jan 2021 – Oct 2022",
            [
                "Used content performance data and A/B testing to refine themes, formats, and audience targeting.",
            ],
            s,
            gap_after=0,
        )
    )

    story.append(Paragraph("PROJECTS", s["section"]))
    projects = [
        (
            "DBRIEF (Debrief F1)",
            "Built an F1 analytics product so fans and analysts could read race week without digging through "
            "scattered standings and session noise. Combined race data, historical context, prediction views, "
            "and a dashboard UI into one briefing surface — live at "
            '<link href="https://www.debrieff1.in/">debrieff1.in</link> — so session signal stays in one place '
            "instead of across tabs and feeds.",
        ),
        (
            "Analytical Dashboard &amp; Report Hub",
            "Stakeholders at upGrad School of Technology needed operational answers without waiting on ad-hoc "
            "spreadsheets. Built Looker dashboards for KPIs and delivery outcomes, then a Python report hub with "
            "SQL-backed validation and a full UI so teams could open structured reports themselves. The result was "
            "a shared internal surface for program performance and data delivery — not a one-off slide deck.",
        ),
        (
            "Growth Analytics Dashboard",
            "Growth work needed one place to see acquisition, retention, and revenue instead of siloed campaign "
            "exports. Used Power BI, SQL, Python, and Looker Studio to model funnel conversion, cohort behaviour, "
            "and campaign performance so marketing, product, and sales could plan GTM moves from the same views. "
            "Teams stopped debating whose sheet was current and started acting on a shared funnel picture.",
        ),
        (
            "ANPR Authentication System",
            "Indian Oil’s site entry still relied on slow manual vehicle checks. Built an automatic number-plate "
            "pipeline in Python with YOLOv8 for detection and EasyOCR for plate reading (PyTorch under the hood), "
            "wired into the authentication flow so plates could be verified in near real time. Gate staff spent "
            "less time on repetitive entry checks and the site gained a repeatable vision-based process.",
        ),
        (
            "Assamese–English Translator",
            "Wanted usable bilingual translation for Assamese–English evaluation loops, not a demo that only "
            "worked on clean textbook lines. Trained a transformer seq2seq model in TensorFlow and Python with "
            "careful preprocessing and tokenization on a curated sentence corpus, then iterated on data quality "
            "before chasing architecture tweaks. Produced a working bilingual model that could be scored and "
            "improved in a real train–evaluate cycle.",
        ),
    ]
    for title, desc in projects:
        story.append(project_block(title, desc, s))

    story.append(Paragraph("SKILLS", s["section"]))
    story.append(
        Paragraph(
            "<b>Analytics &amp; BI:</b> Power BI, Looker, Looker Studio, Tableau, Excel, DAX, ETL, data visualization",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "<b>Data &amp; code:</b> Python, SQL, Pandas, NumPy, statistical analysis, Azure SQL, PostgreSQL",
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
    story.append(
        education_row(
            "Assam Science and Technology University",
            "2020 – 2024",
            "B.Tech, Computer Science",
            s,
        )
    )
    story.append(
        education_row(
            "Kendriya Vidyalaya, Nagaon",
            "2008 – 2020",
            "AISSCE / AISSE, Science (PCM)",
            s,
        )
    )

    story.append(Paragraph("CERTIFICATIONS", s["section"]))
    for cert in [
        "Introduction to Data Science (LinkedIn Learning)",
        "Prompt Engineering for Generative AI (LinkedIn)",
        "Deloitte Data Analytics Job Simulation",
        "Career Skills in Data Analytics (LinkedIn)",
        "Data Analysis &amp; Power BI (Tutedude)",
        "Business Analysis (Microsoft &amp; LinkedIn)",
    ]:
        story.append(Paragraph(f"• {cert}", s["bullet"]))

    doc.build(story)
    print(OUTPUT)
    print(f"content width: {CONTENT_W:.1f}pt ({CONTENT_W / inch:.2f}in)")
    print(f"margins L/R {LEFT / inch:.2f}in  T/B {TOP / inch:.2f}in")


if __name__ == "__main__":
    build()
