export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: BlogContent[];
}

export interface BlogContent {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'quote';
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-saas-sdr-actually-does",
    title: "What a SaaS SDR Actually Does (Day-to-Day Reality)",
    excerpt: "An SDR in a SaaS company is responsible for creating qualified sales opportunities, not 'selling' the product directly. Discover what a real SaaS SDR's day typically looks like.",
    category: "Sales Development",
    readTime: "8 min read",
    publishDate: "December 2024",
    content: [
      {
        type: 'paragraph',
        text: "An SDR (Sales Development Representative) in a SaaS company is responsible for creating qualified sales opportunities, not \"selling\" the product directly. Their job sits at the intersection of prospecting, qualification, and pipeline creation. Below is what a real SaaS SDR's day typically looks like."
      },
      {
        type: 'heading',
        text: "1. Prospect Research & Account Preparation"
      },
      {
        type: 'paragraph',
        text: "Before any outreach begins, a good SDR spends time understanding:"
      },
      {
        type: 'list',
        items: [
          "Target companies (size, industry, tech stack, funding stage)",
          "Decision-makers and influencers",
          "Current business problems the product can realistically solve",
          "Recent triggers (funding, hiring, expansion, product launches)"
        ]
      },
      {
        type: 'paragraph',
        text: "This step separates high-performing SDRs from \"dial-and-email\" operators."
      },
      {
        type: 'quote',
        text: "Outcome: Relevance before reach."
      },
      {
        type: 'heading',
        text: "2. Outbound Outreach (Calls, Emails, LinkedIn)"
      },
      {
        type: 'paragraph',
        text: "A significant part of the day is spent on multi-channel outbound outreach. Typical activities include:"
      },
      {
        type: 'list',
        items: [
          "Cold calling targeted prospects",
          "Sending personalised outbound emails",
          "LinkedIn messages and follow-ups",
          "Sequencing touches across multiple days"
        ]
      },
      {
        type: 'paragraph',
        text: "This is not random outreach. Good SDRs follow structured cadences and track responses carefully."
      },
      {
        type: 'quote',
        text: "Outcome: Consistent conversations, not just activity volume."
      },
      {
        type: 'heading',
        text: "3. Handling First Conversations & Discovery"
      },
      {
        type: 'paragraph',
        text: "When a prospect responds, the SDR's role shifts from outreach to qualification. They focus on:"
      },
      {
        type: 'list',
        items: [
          "Understanding the prospect's problem",
          "Asking discovery questions",
          "Identifying urgency and buying intent",
          "Confirming role relevance (are they the right stakeholder?)"
        ]
      },
      {
        type: 'paragraph',
        text: "They are not pitching features. They are testing fit and readiness."
      },
      {
        type: 'quote',
        text: "Outcome: Only genuine opportunities move forward."
      },
      {
        type: 'heading',
        text: "4. Qualification & Lead Scoring"
      },
      {
        type: 'paragraph',
        text: "SDRs qualify prospects based on:"
      },
      {
        type: 'list',
        items: [
          "Need",
          "Timing",
          "Decision authority",
          "Budget signals (direct or indirect)",
          "Current solution gaps"
        ]
      },
      {
        type: 'paragraph',
        text: "This is often aligned to frameworks like BANT, MEDDICC (light versions), or company-specific criteria."
      },
      {
        type: 'quote',
        text: "Outcome: Sales teams spend time on the right deals."
      },
      {
        type: 'heading',
        text: "5. Scheduling Meetings for Account Executives"
      },
      {
        type: 'paragraph',
        text: "Once a prospect is qualified:"
      },
      {
        type: 'list',
        items: [
          "The SDR schedules a discovery or demo call",
          "Shares detailed context with the AE",
          "Prepares internal notes to ensure a smooth handover"
        ]
      },
      {
        type: 'paragraph',
        text: "A strong SDR makes the AE's job easier — not harder."
      },
      {
        type: 'quote',
        text: "Outcome: Higher conversion from meetings to pipeline."
      },
      {
        type: 'heading',
        text: "6. CRM Updates & Pipeline Hygiene"
      },
      {
        type: 'paragraph',
        text: "Every serious SaaS SDR maintains clean data:"
      },
      {
        type: 'list',
        items: [
          "Logging calls and emails",
          "Updating lead status",
          "Tracking responses and objections",
          "Flagging warm accounts"
        ]
      },
      {
        type: 'paragraph',
        text: "This discipline directly impacts forecasting and sales planning."
      },
      {
        type: 'quote',
        text: "Outcome: Visibility and predictability in the sales pipeline."
      },
      {
        type: 'heading',
        text: "7. Follow-Ups & Nurturing"
      },
      {
        type: 'paragraph',
        text: "Most deals don't move immediately. SDRs spend time:"
      },
      {
        type: 'list',
        items: [
          "Following up with unresponsive prospects",
          "Re-engaging cold leads",
          "Nurturing accounts over weeks or months",
          "Keeping timing aligned with business cycles"
        ]
      },
      {
        type: 'paragraph',
        text: "Persistence — without spam — is a core skill."
      },
      {
        type: 'quote',
        text: "Outcome: Long-term pipeline creation."
      },
      {
        type: 'heading',
        text: "8. Learning, Feedback & Skill Improvement"
      },
      {
        type: 'paragraph',
        text: "Top SDRs invest daily time in:"
      },
      {
        type: 'list',
        items: [
          "Reviewing call recordings",
          "Learning objection handling",
          "Improving messaging",
          "Understanding product updates",
          "Feedback sessions with managers or AEs"
        ]
      },
      {
        type: 'paragraph',
        text: "This is where performance compounds."
      },
      {
        type: 'quote',
        text: "Outcome: Rapid improvement and promotion readiness."
      },
      {
        type: 'subheading',
        text: "What SDR Performance Is Actually Measured On"
      },
      {
        type: 'paragraph',
        text: "Not vanity metrics. SDRs are usually evaluated on:"
      },
      {
        type: 'list',
        items: [
          "Qualified meetings booked",
          "Conversion rate (contact → meeting)",
          "Show-up rate for meetings",
          "Pipeline contribution",
          "Quality of handover to AEs"
        ]
      },
      {
        type: 'paragraph',
        text: "Activity matters — but outcomes matter more."
      },
      {
        type: 'subheading',
        text: "Common Misconceptions About the SDR Role"
      },
      {
        type: 'paragraph',
        text: "❌ \"It's just cold calling\"\n❌ \"Anyone can do it\"\n❌ \"It's an entry-level filler role\""
      },
      {
        type: 'paragraph',
        text: "In reality:"
      },
      {
        type: 'list',
        items: [
          "SDR is a core revenue role",
          "It requires discipline, resilience, and business thinking",
          "It's the foundation for careers in sales, account management, and leadership"
        ]
      },
      {
        type: 'subheading',
        text: "Why Companies Invest Heavily in SDR Teams"
      },
      {
        type: 'paragraph',
        text: "Because:"
      },
      {
        type: 'list',
        items: [
          "Pipeline is the lifeblood of SaaS growth",
          "Good SDRs dramatically improve sales efficiency",
          "SDRs allow AEs to focus on closing, not prospecting"
        ]
      },
      {
        type: 'paragraph',
        text: "In high-growth SaaS companies, SDRs are treated as future AEs and sales leaders, not temporary resources."
      },
      {
        type: 'subheading',
        text: "Final Thought"
      },
      {
        type: 'paragraph',
        text: "A SaaS SDR's job is not about \"pushing meetings.\" It's about creating trust, relevance, and opportunity at the top of the sales funnel. When done right, it's one of the most valuable — and fastest-growing — roles in modern sales."
      }
    ]
  },
  {
    slug: "skills-saas-sdr-first-12-months",
    title: "Skills Every SaaS SDR Must Build in the First 12 Months",
    excerpt: "The first year as a SaaS SDR defines everything that follows. Top-performing SDRs deliberately build specific, repeatable skills early. Learn what they are.",
    category: "Career Development",
    readTime: "10 min read",
    publishDate: "December 2024",
    content: [
      {
        type: 'paragraph',
        text: "The first year as a SaaS SDR defines everything that follows — your performance, credibility, confidence, and future career path. Top-performing SDRs don't succeed because they're \"good talkers.\" They succeed because they deliberately build specific, repeatable skills early. Below are the most important skills an SDR must develop in the first 12 months."
      },
      {
        type: 'heading',
        text: "1. Prospecting Discipline (Not Just Activity)"
      },
      {
        type: 'paragraph',
        text: "Early SDRs often focus on volume — more calls, more emails, more LinkedIn messages. High performers focus on structure:"
      },
      {
        type: 'list',
        items: [
          "Research before outreach",
          "Target the right accounts and personas",
          "Follow consistent, multi-touch cadences",
          "Track what works and refine messaging"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Random activity burns energy. Disciplined prospecting builds pipeline."
      },
      {
        type: 'heading',
        text: "2. Cold Calling Confidence & Control"
      },
      {
        type: 'paragraph',
        text: "Cold calling doesn't get easier — you get better at it. In the first year, SDRs must learn:"
      },
      {
        type: 'list',
        items: [
          "How to open conversations without sounding scripted",
          "How to stay calm under rejection",
          "How to steer conversations instead of reacting",
          "How to ask questions without fear"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Calls still convert faster than any other channel in SaaS."
      },
      {
        type: 'heading',
        text: "3. Discovery & Questioning Skills"
      },
      {
        type: 'paragraph',
        text: "Good SDRs don't pitch. They ask intelligent questions. Key abilities to develop:"
      },
      {
        type: 'list',
        items: [
          "Identify real business problems",
          "Separate curiosity from urgency",
          "Ask follow-up questions that uncover impact",
          "Avoid feature dumping"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Better discovery = higher-quality meetings for AEs."
      },
      {
        type: 'heading',
        text: "4. Objection Handling (Without Defensiveness)"
      },
      {
        type: 'paragraph',
        text: "Most objections aren't rejections — they're reflex responses. SDRs must learn to handle:"
      },
      {
        type: 'list',
        items: [
          "\"We're not interested\"",
          "\"Send me details\"",
          "\"We already have a solution\"",
          "\"Call me later\""
        ]
      },
      {
        type: 'paragraph',
        text: "This requires:"
      },
      {
        type: 'list',
        items: [
          "Calmness",
          "Empathy",
          "Structured responses",
          "Knowing when to push and when to pause"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Objection handling separates average SDRs from consistent performers."
      },
      {
        type: 'heading',
        text: "5. Clear Communication & Articulation"
      },
      {
        type: 'paragraph',
        text: "In SaaS sales, clarity beats enthusiasm. SDRs should focus on:"
      },
      {
        type: 'list',
        items: [
          "Explaining value in simple language",
          "Speaking confidently without jargon",
          "Adjusting tone based on persona",
          "Keeping conversations concise and purposeful"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Executives don't reward excitement. They reward clarity."
      },
      {
        type: 'heading',
        text: "6. Qualification Judgement"
      },
      {
        type: 'paragraph',
        text: "Not every conversation should become a meeting. Strong SDRs develop judgement around:"
      },
      {
        type: 'list',
        items: [
          "Who is worth booking",
          "When timing is wrong",
          "When authority is missing",
          "When a deal is unlikely to progress"
        ]
      },
      {
        type: 'paragraph',
        text: "This protects the sales pipeline and AE trust."
      },
      {
        type: 'quote',
        text: "Why it matters: Bad meetings kill credibility fast."
      },
      {
        type: 'heading',
        text: "7. CRM Hygiene & Sales Discipline"
      },
      {
        type: 'paragraph',
        text: "Early in their career, SDRs often underestimate this. They must learn:"
      },
      {
        type: 'list',
        items: [
          "Accurate logging of calls and emails",
          "Updating lead stages correctly",
          "Writing clear internal notes",
          "Tracking follow-ups rigorously"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Sales leadership trusts data — not memory."
      },
      {
        type: 'heading',
        text: "8. Learning From Call Reviews & Feedback"
      },
      {
        type: 'paragraph',
        text: "Top SDRs improve faster because they:"
      },
      {
        type: 'list',
        items: [
          "Listen to their own call recordings",
          "Learn from lost conversations",
          "Seek feedback proactively",
          "Apply coaching consistently"
        ]
      },
      {
        type: 'paragraph',
        text: "This habit compounds over time."
      },
      {
        type: 'quote',
        text: "Why it matters: Skill growth accelerates when feedback is used properly."
      },
      {
        type: 'heading',
        text: "9. Time & Energy Management"
      },
      {
        type: 'paragraph',
        text: "The role is demanding. SDRs must learn:"
      },
      {
        type: 'list',
        items: [
          "How to structure their day",
          "When to prospect vs follow up",
          "How to manage emotional fatigue",
          "How to stay consistent across bad days"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: Burnout is the biggest hidden reason SDRs fail."
      },
      {
        type: 'heading',
        text: "10. Business Curiosity & Context Awareness"
      },
      {
        type: 'paragraph',
        text: "Great SDRs think beyond scripts. They develop:"
      },
      {
        type: 'list',
        items: [
          "Curiosity about the customer's business",
          "Understanding of industry trends",
          "Awareness of how deals actually close",
          "Interest in revenue and growth drivers"
        ]
      },
      {
        type: 'quote',
        text: "Why it matters: This is what turns SDRs into future AEs and leaders."
      },
      {
        type: 'subheading',
        text: "What Happens When SDRs Build These Skills Early"
      },
      {
        type: 'paragraph',
        text: "Within 12 months, strong SDRs typically:"
      },
      {
        type: 'list',
        items: [
          "Book higher-quality meetings",
          "Earn trust from AEs and managers",
          "Get promoted faster",
          "Move into AE, growth, or leadership tracks",
          "Command better compensation and roles"
        ]
      },
      {
        type: 'subheading',
        text: "Final Thought"
      },
      {
        type: 'paragraph',
        text: "The SDR role is not a stepping stone by default. It becomes one only if the right skills are built early. The first 12 months are less about targets — and more about building a sales foundation that compounds for years."
      }
    ]
  }
];
