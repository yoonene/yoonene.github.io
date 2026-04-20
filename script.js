const portfolioData = {
  profile: {
    name: "Yoonhye Kim",
    badge: "Vancouver, BC, Canada · Open Work Permit",
    headline:
      "I build AI systems that need to be fast, reliable, and useful in the real world.",
    summary:
      "Over the past three years, I've worked on live AI products where retrieval quality, latency, and cost all matter at once. My work sits at the intersection of search, evaluation, model optimization, and serving, with a strong focus on building systems teams can actually ship and operate.",
    ctas: [
      { label: "Resume", href: "CV_OOO.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/yoonene" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yoonhye-kim-271a6a216/" },
      { label: "Email", href: "mailto:neune21153@gmail.com" }
    ],
    contact: [
      { label: "Email", value: "neune21153@gmail.com", href: "mailto:neune21153@gmail.com" },
      { label: "GitHub", value: "https://github.com/yoonene", href: "https://github.com/yoonene" },
      { label: "LinkedIn", value: "https://www.linkedin.com/in/yoonhye-kim-271a6a216/", href: "https://www.linkedin.com/in/yoonhye-kim-271a6a216/" },
      { label: "Phone", value: "[Add phone number]" },
      { label: "Location", value: "Vancouver, BC, Canada" },
      { label: "Work authorization", value: "Open Work Permit" }
    ]
  },
  projects: [
    {
      title: "Retrieval Infrastructure for Live AI Products",
      context: "AI Engineer · Company A · 2023-2026",
      problem:
        "I led retrieval work across multiple AI products where quality, evaluation, and serving efficiency all had to improve together, especially for Korean-language and domain-specific queries.",
      whatWasDone: [
        "Built Korean-language and service-specific evaluation datasets, along with an internal benchmark workflow that made model comparisons far more grounded.",
        "Improved search quality through embedding and reranker experiments, query rewriting, and chunking strategy changes across multiple services.",
        "Moved the stack from in-house embedding training to open-source models such as Qwen3-Embedding, reducing maintenance overhead without giving up quality.",
        "Optimized TEI serving on H100 MIG and load-tested different configurations to find practical latency and resource targets.",
        "Built an end-to-end retrieval evaluation workflow covering preprocessing, indexing, logging, validation, and RAGAS-based reporting."
      ],
      stack: [
        "Python",
        "Retrieval Systems",
        "Embedding Models",
        "Rerankers",
        "RAGAS",
        "Qwen3-Embedding",
        "TEI",
        "H100 MIG",
        "Airflow",
        "Query Rewriting"
      ],
      impact: [
        "Created a repeatable benchmark for retrieval changes instead of relying on one-off checks.",
        "Reduced model maintenance cost by replacing custom training where it no longer made sense.",
        "Made retrieval improvements easier to compare, tune, and ship across teams."
      ],
      links: []
    },
    {
      title: "Low-Latency AI Customization Pipeline",
      context: "AI Engineer · Company A · 30K-user CBT · 2025-2026",
      problem:
        "For a live AI customization feature, the challenge was to keep the experience fast and affordable under real traffic without hurting user satisfaction.",
      whatWasDone: [
        "Designed a hybrid retrieval-plus-generation pipeline so more requests could avoid the heaviest generation path.",
        "Fine-tuned a 3B LLM with LoRA on curated production-style data to replace third-party APIs and bring latency under tighter control.",
        "Replaced VLM-based image scoring with a reranker to remove a major inference bottleneck.",
        "Served the stack with vLLM on AWS H100 MIG and tuned it for stable throughput in a high-traffic test environment."
      ],
      stack: [
        "Python",
        "LoRA",
        "PEFT",
        "vLLM",
        "AWS",
        "H100 MIG",
        "Rerankers",
        "LLMs",
        "VLM"
      ],
      impact: [
        "Cut end-to-end latency from roughly 5 seconds to under 2 seconds.",
        "Routed more than 60% of requests through retrieval, reducing GPU cost by 60% while keeping satisfaction around 80%.",
        "Reduced peak latency from about 8 seconds to around 1 second in the optimized path."
      ],
      links: []
    },
    {
      title: "Long-Term Memory for Virtual Characters",
      context: "AI Engineer · Company A · 2024",
      problem:
        "I worked on a memory system for persona-driven AI characters that needed to stay coherent over time, even in live sessions with many participants.",
      whatWasDone: [
        "Built an LLM-based memory extraction and consolidation flow on top of vector and relational storage.",
        "Supported dynamic updates to memory, persona, and personality without breaking conversational continuity.",
        "Filed the system as a patent related to long-term memory management for chatbot services."
      ],
      stack: [
        "LLMs",
        "Vector Storage",
        "Relational Storage",
        "Memory Extraction",
        "Persona-based Chatbots"
      ],
      impact: [
        "Supported live 1:N sessions with hundreds of concurrent viewers.",
        "Improved consistency across multi-turn character interactions.",
        "Turned a research-heavy problem into a production-ready system design."
      ],
      links: []
    },
    {
      title: "Personalized AI Guide for Game Context",
      context: "AI Engineer · Company A · 2026",
      problem:
        "To make in-game guidance feel genuinely personalized, retrieval had to reason over both player context and game knowledge instead of treating them as separate sources.",
      whatWasDone: [
        "Built a retrieval pipeline that combined player context with structured and unstructured game knowledge.",
        "Used a graph-inspired retrieval approach to improve multi-hop questions.",
        "Focused on making answers more specific to each player's current situation."
      ],
      stack: [
        "Retrieval Systems",
        "Graph-based Retrieval",
        "Player Context",
        "Game Knowledge",
        "Multi-hop Retrieval"
      ],
      impact: [
        "Improved retrieval quality for guidance tasks that required connecting multiple pieces of context.",
        "Expanded the system's ability to handle multi-hop questions without adding unnecessary latency.",
        "Created a stronger foundation for future player-facing assistant features."
      ],
      links: []
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Company A, South Korea",
      dates: "Apr 2023 - Mar 2026",
      bullets: [
        "Worked across multiple live AI products, focusing on retrieval quality, evaluation, and efficient serving.",
        "Built Korean-language and domain-specific evaluation datasets plus internal benchmarks that made model decisions easier to trust.",
        "Improved search quality through embedding and reranker experiments, query rewriting, and chunking strategy changes.",
        "Optimized TEI and vLLM serving on H100 MIG to balance latency, throughput, and operating cost.",
        "Built a retrieval-heavy AI customization pipeline for a 30K-user CBT, cutting end-to-end latency and GPU cost significantly.",
        "Developed a patent-filed long-term memory system for persona-based AI characters used in live sessions.",
        "Built a personalized AI guide that combined player context with game knowledge for better multi-hop retrieval."
      ]
    },
    {
      role: "AI Research Intern",
      company: "Company A, South Korea",
      dates: "Jan 2023 - Mar 2023",
      bullets: [
        "Fine-tuned persona-based LLMs and implemented hybrid memory retrieval using Elasticsearch."
      ]
    },
    {
      role: "Research Intern",
      company: "Company B, South Korea",
      dates: "Mar 2021 - Jun 2021",
      bullets: [
        "Developed a real-time medical image segmentation and 3D reconstruction system and co-authored a paper presented at OO."
      ]
    }
  ],
  publications: [
    {
      title: "OO",
      venue: "EMBC",
      year: "2022",
      description:
        "Co-authored a paper on real-time carotid vessel segmentation for handheld ultrasound, using a residual U-Net architecture to improve segmentation and Doppler accuracy in resource-limited settings.",
      note: ""
    }
  ],
  patents: [
    "Method and Apparatus for Generating Images for Character Costumes Based on User Input Data, 2026",
    "Apparatus and Method for Dialogue-Based In-Game Automatic Housing Control, 2026",
    "Apparatus and Method for Long-Term Memory Management Supporting Chatbot Service, 2026"
  ],
  skills: {
    Languages: ["Python", "SQL"],
    "ML / LLM": [
      "LLMs",
      "Retrieval-Augmented Systems",
      "Vector Search",
      "Embedding & Reranker Training",
      "Retrieval Evaluation",
      "LoRA / PEFT",
      "Multimodal Models (VLM)",
      "PyTorch",
      "Transformers"
    ],
    Frameworks: ["LangChain", "LangGraph", "RAGAS", "W&B"],
    Serving: ["vLLM", "TGI", "TEI", "FastAPI"],
    Databases: ["Milvus", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis"],
    Infra: ["AWS", "Docker", "Kubernetes", "Airflow"]
  },
  additional: [
    {
      title: "What I Enjoy Building",
      body: "Search and retrieval systems, evaluation workflows, memory-heavy character systems, and the serving layer that keeps them responsive."
    },
    {
      title: "Product Mindset",
      body: "I care about whether a model change improves the real user experience, not just whether it moves an offline metric."
    },
    {
      title: "How I Work",
      body: "I like owning problems end to end, from dataset design and evaluation to serving decisions and production rollout."
    },
    {
      title: "Collaboration",
      body: "A lot of my work sits between research, backend, and product, so I value clear tradeoffs and measurable decisions."
    },
    {
      title: "Current Base",
      body: "Vancouver, BC, Canada"
    },
    {
      title: "Work Authorization",
      body: "Open Work Permit"
    }
  ]
};

function createAnchor(link, className) {
  const a = document.createElement("a");
  a.textContent = link.label;
  a.href = isPlaceholder(link.href) ? "#" : link.href;
  a.className = className;
  if (isPlaceholder(link.href)) {
    a.setAttribute("aria-disabled", "true");
    a.title = "Replace placeholder link before publishing";
  } else if (/^https?:/i.test(link.href)) {
    a.target = "_blank";
    a.rel = "noreferrer";
  }
  return a;
}

function isPlaceholder(value) {
  return !value || value.includes("[Add");
}

function populateProfile() {
  document.getElementById("brand-name").textContent = portfolioData.profile.name;
  document.getElementById("profile-badge").textContent = portfolioData.profile.badge;
  document.getElementById("hero-name").textContent = portfolioData.profile.name;
  document.getElementById("hero-headline").textContent = portfolioData.profile.headline;
  document.getElementById("hero-summary").textContent = portfolioData.profile.summary;
}

function populateHeroCtas() {
  const container = document.getElementById("hero-ctas");
  portfolioData.profile.ctas.forEach((link, index) => {
    const className = index === 0 || link.primary ? "button" : "button-secondary";
    container.appendChild(createAnchor(link, className));
  });
}

function populateProjects() {
  const container = document.getElementById("projects-grid");
  portfolioData.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "card";

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = project.context;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const problem = document.createElement("p");
    problem.textContent = project.problem;

    const bulletList = document.createElement("ul");
    project.whatWasDone.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      bulletList.appendChild(li);
    });

    const impactTitle = document.createElement("p");
    impactTitle.className = "meta";
    impactTitle.textContent = "Impact";
    impactTitle.style.marginTop = "18px";

    const impactList = document.createElement("ul");
    project.impact.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      impactList.appendChild(li);
    });

    const tagList = document.createElement("div");
    tagList.className = "tag-list";
    project.stack.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tagList.appendChild(span);
    });

    const validLinks = project.links.filter((link) => !isPlaceholder(link.href));

    article.append(meta, title, problem, bulletList, impactTitle, impactList, tagList);

    if (validLinks.length > 0) {
      const linksRow = document.createElement("div");
      linksRow.className = "links-row";
      validLinks.forEach((link) => {
        linksRow.appendChild(createAnchor(link, "inline-link"));
      });
      article.appendChild(linksRow);
    }

    container.appendChild(article);
  });
}

function populateExperience() {
  const container = document.getElementById("experience-timeline");
  portfolioData.experience.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "timeline-entry";

    const title = document.createElement("h3");
    title.textContent = `${entry.role} · ${entry.company}`;

    const meta = document.createElement("p");
    meta.className = "entry-meta";
    meta.textContent = entry.dates;
    meta.style.margin = "8px 0 0";

    const list = document.createElement("ul");
    entry.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      list.appendChild(li);
    });

    article.append(title, meta, list);
    container.appendChild(article);
  });
}

function populateResearch() {
  const researchSection = document.getElementById("research");
  const pubs = document.getElementById("publications-list");
  if (portfolioData.publications.length === 0) {
    pubs.parentElement.style.display = "none";
  } else {
    portfolioData.publications.forEach((publication) => {
      const item = document.createElement("article");
      item.className = "stack-item";
      item.innerHTML = `
        <h3>${publication.title}</h3>
        <p class="meta">${publication.venue} · ${publication.year}</p>
        <p>${publication.description}</p>
      `;
      if (publication.note) {
        const note = document.createElement("p");
        note.className = "muted";
        note.textContent = publication.note;
        item.appendChild(note);
      }
      pubs.appendChild(item);
    });
  }

  const patents = document.getElementById("patents-list");
  if (portfolioData.patents.length === 0) {
    patents.parentElement.style.display = "none";
  } else {
    portfolioData.patents.forEach((patent) => {
      const item = document.createElement("article");
      item.className = "stack-item";
      item.innerHTML = `<p>${patent}</p>`;
      patents.appendChild(item);
    });
  }

  if (portfolioData.publications.length === 0 && portfolioData.patents.length === 0) {
    researchSection.style.display = "none";
  }
}

function populateSkills() {
  const container = document.getElementById("skills-grid");
  Object.entries(portfolioData.skills).forEach(([group, items]) => {
    const section = document.createElement("section");
    section.className = "skill-group";

    const title = document.createElement("h3");
    title.textContent = group;

    const list = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    section.append(title, list);
    container.appendChild(section);
  });
}

function populateAdditional() {
  const container = document.getElementById("additional-grid");
  portfolioData.additional.forEach((item) => {
    const article = document.createElement("article");
    article.className = "placeholder-card";
    article.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    container.appendChild(article);
  });
}

function populateContact() {
  const container = document.getElementById("contact-card");
  portfolioData.profile.contact.forEach((item) => {
    const row = document.createElement("div");
    row.className = "contact-item";

    const label = document.createElement("strong");
    label.textContent = item.label;

    let valueNode;
    if (item.href) {
      valueNode = createAnchor({ label: item.value, href: item.href }, "inline-link");
    } else {
      valueNode = document.createElement("span");
      valueNode.textContent = item.value;
      valueNode.className = "muted";
    }

    row.append(label, valueNode);
    container.appendChild(row);
  });
}

function setFooterYear() {
  document.getElementById("footer-year").textContent = `Last updated ${new Date().getFullYear()}`;
}

populateProfile();
populateHeroCtas();
populateProjects();
populateExperience();
populateResearch();
populateSkills();
populateAdditional();
populateContact();
setFooterYear();
