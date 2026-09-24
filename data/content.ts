// All site text lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Abinash Sambandham",
  role: "Technical Lead, AI Engineering",
  company: "TrusTrace",
  location: "Coimbatore, India",
  intro:
    "Technical Lead at TrusTrace, building multi-agent systems, RAG over customer evidence, document intelligence and the evals that keep them honest, for global fashion brands and retailers across the EU and US.",
  email: "abinashsambandham@gmail.com",
  linkedin: "https://www.linkedin.com/in/abinash-sambandham",
  github: "https://github.com/abinashsambandham",
  resume: "/Abinash_Sambandham_Resume.pdf",
};

export const site = {
  url: "https://abinashsambandham.github.io",
  keywords: [
    "Abinash Sambandham",
    "AI Engineer",
    "Technical Lead",
    "Forward-Deployed Engineer",
    "LLM",
    "RAG",
    "Multi-agent systems",
    "LangGraph",
    "Azure AI Foundry",
    "Document intelligence",
    "LLM evaluation",
  ],
  // Privacy-friendly analytics (GoatCounter). Create a free site at goatcounter.com and put its
  // code here, e.g. "abinash" for abinash.goatcounter.com. Leave empty to load no analytics.
  goatcounter: "",
};

export const hero = {
  eyebrow: "Technical Lead · AI Engineering",
  tagline: "I build production AI for global enterprises.",
  expertLabel: "Expert in",
  expertise: ["Multi-agent systems", "RAG pipelines", "Document intelligence", "LLM evaluation"],
  body: "Five and a half years at TrusTrace designing, building and running LLM systems for fashion brands and retailers across the EU and US, from the first customer call to production.",
  // Phone hero only
  impact: [
    { value: "800+", label: "brands onboarded" },
    { value: "15", label: "global retailers" },
    { value: "Days → min", label: "per supplier assessment" },
  ],
  expertiseMore: ["Agentic workflows", "Forward-deployed delivery"],
  stack: ["Claude", "LangGraph", "Azure AI Foundry", "MCP", "Langfuse", "Python", "TypeScript", "Next.js", "Kubernetes"],
  quickStats: [
    { value: 800, suffix: "+", label: "brands onboarded" },
    { value: 15, suffix: "", label: "global retailers" },
    { value: 5.5, suffix: " yrs", label: "building enterprise SaaS" },
  ],
};

export const heroNow = {
  label: "Currently",
  title: "Technical Lead, AI Engineering",
  org: "TrusTrace · supply-chain traceability and compliance SaaS",
  points: [
    "Leading the AI build of One Retail Hub",
    "Built the company-wide AI-driven SDLC framework",
    "Working directly with enterprise brands in the EU and US",
  ],
};

export const heroStats = [
  { value: "800+", label: "brands and 15 retailers on One Retail Hub in its first 12 months" },
  { value: "Days → min", label: "per supplier compliance assessment with the SAQ RAG pipeline" },
  { value: "In weeks", label: "customer apps delivered from requirement to production, forward-deployed" },
  { value: "5.5 yrs", label: "from intern to Technical Lead" },
];

export const techMarquee = [
  "Claude", "LangGraph", "LangChain", "Azure AI Foundry", "Azure OpenAI", "MCP", "Langfuse",
  "Azure Document Intelligence", "Azure AI Search", "Python", "FastAPI", "TypeScript", "Next.js",
  "Java", "Spring Boot", "MongoDB", "Elasticsearch", "RabbitMQ", "Kubernetes", "Playwright",
];

export const pillars = [
  {
    title: "Production LLM systems",
    body: "Multi-agent orchestration, RAG over messy enterprise evidence and document intelligence, built with schema validation, fallbacks and human review so they hold up with real customers.",
    tags: ["LangGraph", "RAG", "MCP", "Claude", "Azure AI Foundry"],
  },
  {
    title: "Evaluation and observability",
    body: "Regression eval sets that catch behaviour drift across prompt and model changes, Langfuse tracing on every generation, and LLM-as-judge scoring on production traffic.",
    tags: ["Eval harnesses", "Langfuse", "LLM-as-judge", "Zod / Pydantic"],
  },
  {
    title: "Forward-deployed delivery",
    body: "Requirement sessions with enterprise brands in the US and Europe, solution demos and AI proofs of concept, then owning the build, the launch and production support.",
    tags: ["Discovery", "Solution demos", "PoCs", "Escalations"],
  },
  {
    title: "Full-stack platform depth",
    body: "Java and Spring Boot microservices, event-driven systems on RabbitMQ, MongoDB and Elasticsearch at scale, and modern front ends from Angular to the T3 stack.",
    tags: ["Java", "Python", "TypeScript", "Next.js", "Kubernetes"],
  },
];

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  context: string;
  problem: string;
  built: string[];
  impact: { value: string; label: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "saq",
    tag: "RAG · Document AI",
    title: "Supplier compliance assessment pipeline",
    context: "One Retail Hub · EUDR, CSDDD and CSRD",
    problem:
      "Brands must assess thousands of suppliers against EU regulations using self-assessment questionnaires and supporting evidence: audit reports, certificates and declarations in many formats and languages. Reviewing them by hand took several days per supplier.",
    built: [
      "A five-stage async pipeline: extract with Azure Document Intelligence, classify and transform with Claude via Azure AI Foundry, translate with Azure Translator, then persist",
      "RAG over supplier evidence with risk-weighted scoring, and human-in-the-loop review kept in place for auditability",
      "Zod validation gates on every model output, and a cheaper Claude Haiku pass only when translation confidence falls below threshold",
      "Durable queueing with retries and a dead-letter queue, and Langfuse traces with token, cost and quality evals on every run",
      "Worked with Microsoft's team on the Azure AI Foundry evaluation setup and agent architecture",
    ],
    impact: [
      { value: "Days → min", label: "per supplier assessment" },
      { value: "~80%", label: "less user time to complete and submit" },
    ],
    stack: ["Python", "TypeScript", "Azure Document Intelligence", "Claude", "Azure AI Foundry", "Azure Service Bus", "Langfuse"],
  },
  {
    id: "sdlc",
    tag: "Agents · Developer productivity",
    title: "AI-driven SDLC framework",
    context: "Internal platform · in use across every engineering team",
    problem:
      "One-off prompting in the IDE didn't scale beyond individual engineers. Agents lost track of repository and ticket state, and nobody trusted output that hadn't been verified.",
    built: [
      "Specialist agent services wired into requirement refinement, development, testing and code review, each with scoped tools and guardrails",
      "A context management layer that grounds agents in live repository, ticket and architecture state, plus a company-wide knowledge hub as one retrieval layer",
      "Three-layer verification: generated Playwright and unit suites, regression eval sets for behaviour drift, and agent review with engineer approval before merge",
      "Three generations: spec-driven development, then a custom structure built on what that got wrong, then a rebuild around explicit context management",
    ],
    impact: [
      { value: "Every team", label: "uses it as the standard way to build" },
      { value: "1–2 eng", label: "teams now ship standalone apps end to end" },
    ],
    stack: ["Claude Code", "Cursor", "Custom MCP servers", "Python", "Azure AI Foundry", "Langfuse", "Playwright", "Jenkins"],
  },
  {
    id: "orh",
    tag: "Product · AI platform",
    title: "One Retail Hub",
    context: "AI-driven retail compliance product",
    problem:
      "Retailers needed one place to collect and verify compliance data from hundreds of brands across fast-moving regulations, without a custom build for every customer.",
    built: [
      "Owned it end to end, from requirements and architecture to the full AI solution and Stripe monetisation, as one of two engineers on the core AI build",
      "Shipped the PPWR/EPR, HRED and GPSR compliance modules to production",
      "A configuration-driven design that admins extend themselves, so new regulations don't need engineering work",
      "An agentic product data collection module that gathers, validates and reconciles data across brand and supplier hierarchies",
    ],
    impact: [
      { value: "800+", label: "brands in 12 months" },
      { value: "15", label: "retailers, largely self-serve onboarding" },
    ],
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "Python", "Azure OpenAI", "Stripe", "Kubernetes"],
  },
];

export type Project = {
  tag: string;
  title: string;
  body: string;
  stack: string[];
};

export const moreWork: Project[] = [
  {
    tag: "Agents",
    title: "Multi-agent product data collection",
    body: "Planning and tool-calling agents that gather supplier and product data from the web and documents. Every tool call is schema-validated, with retries and model fallbacks, and low-confidence runs go to human review.",
    stack: ["LangGraph", "MCP", "Pydantic", "Azure OpenAI"],
  },
  {
    tag: "Customer delivery",
    title: "Forward-deployed customer apps",
    body: "Working directly with enterprise customers, I take bespoke apps from the first requirement call to production within a few weeks. Recurring requests then become configurable product capability.",
    stack: ["Next.js", "Angular", "TypeScript", "Claude Code"],
  },
  {
    tag: "Configurable product",
    title: "Supplier Data Management (SDM)",
    body: "Data collection at every level of the supply chain with no code change per customer: configurable UI generation, rule-driven adaptive workflows, a hierarchical tree data model and a Python validation framework. Delivered end to end while the lead and team were on leave.",
    stack: ["Java", "Spring Boot", "FastAPI", "MongoDB", "RabbitMQ"],
  },
  {
    tag: "Traceability",
    title: "Supply chain mapping and real-time traceability",
    body: "Mapping of multi-tier supplier networks and material flows, with evidence management built in. MongoDB with Elasticsearch-backed search over an event-driven RabbitMQ architecture.",
    stack: ["Java", "MongoDB", "Elasticsearch", "RabbitMQ"],
  },
  {
    tag: "Document AI",
    title: "Document extraction service",
    body: "Built the production extraction service on AWS Textract and led its migration to Azure Document Intelligence after weighing rule-based against model-based extraction. Started as a hackathon proof of concept that went into production.",
    stack: ["AWS Textract", "Azure Document Intelligence", "Spring Boot"],
  },
  {
    tag: "In progress · FY26",
    title: "Digital Product Passport",
    body: "Leading the DPP build, an AI-driven solution that connects brands and end consumers, run as a full SDLC with AI assistance at every stage from requirements to production monitoring.",
    stack: ["Next.js", "Python", "Azure AI Foundry"],
  },
];

export const pipeline = {
  stages: [
    { n: "01", name: "Extract", tool: "Azure Document Intelligence", out: "Raw text, tables, key-value pairs" },
    { n: "02", name: "Classify", tool: "Claude Sonnet", out: "Audit report, SAQ, certificate, declaration or contract" },
    { n: "03", name: "Transform", tool: "Claude Sonnet + Zod gate", out: "Supplier, audit period, findings as typed JSON" },
    { n: "04", name: "Translate", tool: "Azure Translator → Claude Haiku", out: "English text; Haiku refines only if confidence < 0.8" },
    { n: "05", name: "Finalise", tool: "Prisma · SQL", out: "Document ready for assessment and scoring" },
  ],
};

export type Role = {
  title: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience = {
  company: "TrusTrace",
  companyNote:
    "Supply-chain traceability and compliance SaaS for enterprise apparel and footwear brands and retailers across the EU and US.",
  roles: [
    {
      title: "Technical Lead, AI Engineering",
      period: "Apr 2025 – Present",
      summary: "The team's primary AI contributor, owning AI systems end to end, from customer requirements to production support.",
      points: [
        "Run requirement sessions with global sportswear, fast-fashion and footwear brands, and present solution demos and AI PoCs to technical and business stakeholders",
        "Built the company's AI-driven SDLC framework, now the standard engineering approach across every team",
        "Led the AI build of One Retail Hub: SAQ assessment pipeline, document processing, agentic data collection and Stripe monetisation",
        "Own SDM, line-manage its team and stay hands-on in design and code; single point of contact for escalations and production support",
      ],
      stack: ["Python", "TypeScript", "Next.js", "LangGraph", "Azure AI Foundry", "Claude", "Langfuse"],
    },
    {
      title: "Senior Software Engineer",
      period: "Apr 2024 – Apr 2025",
      summary: "Traceability, AI document extraction and the data layer behind them.",
      points: [
        "Built Supply Chain Mapping and Real-Time Traceability for multi-tier supplier networks",
        "Automated certificate capture, classification and validation at scale with AI document extraction",
        "Designed the traceability data layer: MongoDB schema, tuned Elasticsearch search and event-driven RabbitMQ messaging",
      ],
      stack: ["Java", "Spring Boot", "Python", "MongoDB", "Elasticsearch", "RabbitMQ", "Kubernetes"],
    },
    {
      title: "Software Engineer",
      period: "Feb 2021 – Apr 2024",
      summary: "Joined as an intern and grew into full ownership of backend services and shared front-end foundations.",
      points: [
        "Built the document extraction service on AWS Textract and led its migration to Azure Document Intelligence",
        "Designed Spring Boot REST APIs with async processing, rate limiting and third-party integrations",
        "Built an Angular component library with NX and Storybook, moved to lazy loading and introduced micro-frontends",
        "Built a bulk-upload testing utility that cut manual QA effort; enforced quality gates with SonarQube",
      ],
      stack: ["Java", "Spring Boot", "Angular", "NX", "MongoDB", "AWS Textract"],
    },
  ] as Role[],
};

export const principles = [
  {
    title: "Production, not demos",
    body: "An AI feature is done when it survives real customer data, and has retries, fallbacks and someone on call.",
  },
  {
    title: "Evals before features",
    body: "Every prompt or model change runs against a regression set. If behaviour drifts, I know before customers do.",
  },
  {
    title: "Humans where it counts",
    body: "Compliance decisions carry audit weight. Low-confidence results go to a reviewer instead of being guessed.",
  },
  {
    title: "Configuration over custom code",
    body: "Recurring customer requests become configurable capability, which is how one product serves hundreds of brands.",
  },
];

export const recognition = [
  { title: "Intern to Technical Lead", body: "Grew from intern in 2021 to leading AI engineering in four years" },
  { title: "Outstanding ratings", body: "Rated Outstanding by successive managers across review cycles" },
  { title: "Manager's Choice award", body: "For ownership of cross-functional feature delivery" },
  { title: "Hackathon to production", body: "Bulk-extraction proof of concept adopted into the core platform" },
];

export const skills = [
  {
    group: "Agents and LLMs",
    items: ["Multi-agent orchestration", "LangGraph", "LangChain", "Azure AI Foundry Agents", "Tool calling", "Custom MCP servers", "Prompt and context engineering"],
  },
  {
    group: "Retrieval",
    items: ["RAG pipelines", "Chunking and embeddings", "Vector search", "Hybrid search", "Azure AI Search"],
  },
  {
    group: "Evaluation and reliability",
    items: ["Eval harnesses", "Regression eval sets", "Langfuse", "LLM-as-judge", "Schema validation", "Human-in-the-loop", "Risk-weighted scoring"],
  },
  {
    group: "AI cloud",
    items: ["Azure OpenAI", "Claude", "Azure Document Intelligence", "Azure Translator", "Azure API Management", "AWS Textract", "AWS Lambda"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "Microservices", "RabbitMQ", "REST API design"],
  },
  {
    group: "Frontend",
    items: ["TypeScript", "Next.js", "tRPC", "Prisma", "React", "Angular", "NX", "Micro-frontends"],
  },
  {
    group: "Data and delivery",
    items: ["MongoDB", "PostgreSQL", "Elasticsearch", "Docker", "Kubernetes", "Jenkins", "Playwright", "SonarQube"],
  },
];

export const education = {
  degree: "B.E., Electronics and Communication Engineering",
  school: "Sri Shakthi Institute of Engineering and Technology, Anna University",
  period: "2017 – 2021",
};
