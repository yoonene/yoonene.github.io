const portfolioData = {
  profile: {
    name: "Yoonhye Kim",
    badge: "Open Work Permit",
    headline:
      "Machine Learning Engineer building production retrieval, RAG, and AI serving systems.",
    summary:
      "Machine Learning Engineer with 3+ years of experience building production retrieval and RAG systems for game AI services. Delivered measurable results including 60% GPU cost reduction and 2× latency improvement in a 30K-user CBT environment.",
    ctas: [
      { label: "Resume", href: "CV_Yoonhye Kim.pdf", primary: true },
      { label: "GitHub", href: "[Add GitHub URL]" },
      { label: "LinkedIn", href: "[Add LinkedIn URL]" },
      { label: "Email", href: "mailto:[Add email address]" }
    ],
    contact: [
      { label: "Email", value: "[Add email address]", href: "mailto:[Add email address]" },
      { label: "GitHub", value: "[Add GitHub URL]", href: "[Add GitHub URL]" },
      { label: "LinkedIn", value: "[Add LinkedIn URL]", href: "[Add LinkedIn URL]" },
      { label: "Phone", value: "[Add phone number]" },
      { label: "Location", value: "[Add location in Canada or target city]" },
      { label: "Work authorization", value: "Open Work Permit" }
    ]
  },
  projects: [
    {
      title: "Cross-Service Retrieval System Development",
      context: "AI Engineer · Company A · 2023-2026",
      problem:
        "Multiple services needed stronger retrieval quality, consistent evaluation, and more efficient serving across varied formats and languages.",
      whatWasDone: [
        "Drove embedding model training, selection, reranker training, and evaluation across services.",
        "Built service-specific evaluation datasets and an internal leaderboard for systematic benchmarking.",
        "Improved search quality through LLM-based query rewriting, chunking strategy design, and an LM-based chunking validation pipeline.",
        "Benchmarked open-source and custom embedding models, then transitioned to cost-efficient off-the-shelf models once quality matured.",
        "Optimized embedding and reranker serving with TEI on H100 MIG instances and used load testing to set latency and resource targets.",
        "Automated indexing and post-update validation pipelines spanning RDB, Milvus, MongoDB, and Redis via Airflow."
      ],
      stack: [
        "Python",
        "RAG",
        "Embedding Models",
        "Rerankers",
        "TEI",
        "H100 MIG",
        "Airflow",
        "Milvus",
        "MongoDB",
        "Redis"
      ],
      impact: [
        "Established a repeatable benchmarking workflow for model comparison.",
        "[Add measurable search quality metric]",
        "[Add production scale or request volume]"
      ],
      links: [
        { label: "Project link", href: "[Add project link]" }
      ]
    },
    {
      title: "In-Game AI Customization Pipeline",
      context: "AI Engineer · Company A · 30K-user CBT · 2025-2026",
      problem:
        "The original generation-heavy pipeline was too slow and expensive for a live customization workflow.",
      whatWasDone: [
        "Designed a hybrid retrieval-generation architecture that shifted more traffic to retrieval.",
        "Fine-tuned a 3B language model with LoRA on 500K-1M curated samples selected from an approximately 2M dataset.",
        "Replaced third-party APIs with an internal model path to improve responsiveness and reduce dependency on external providers.",
        "Removed a VLM-based image scoring bottleneck by replacing it with a fine-tuned reranker.",
        "Deployed models with vLLM on AWS H100 MIG infrastructure in collaboration with infrastructure engineers."
      ],
      stack: [
        "Python",
        "LoRA",
        "PEFT",
        "vLLM",
        "AWS",
        "H100 MIG",
        "Rerankers",
        "LLMs"
      ],
      impact: [
        "Reduced latency from approximately 5 seconds to under 2 seconds.",
        "Served more than 60% of requests via retrieval, reducing GPU cost by 60%.",
        "Reduced peak latency from approximately 8 seconds to approximately 1 second while maintaining around 80% user satisfaction."
      ],
      links: [
        { label: "Demo or case study", href: "[Add link]" }
      ]
    },
    {
      title: "Virtual AI Character Memory System",
      context: "AI Engineer · Company A · 2024",
      problem:
        "Live AI character experiences required persistent state, dynamic persona updates, and reliable memory retrieval across sessions.",
      whatWasDone: [
        "Developed a long-term memory architecture combining vector retrieval with structured state tracking.",
        "Enabled dynamic updates of memory, persona, and personality across live sessions.",
        "Supported interactive use with hundreds of concurrent users."
      ],
      stack: [
        "Vector Retrieval",
        "Structured State Tracking",
        "LLM Systems",
        "[Add exact serving or storage components]"
      ],
      impact: [
        "Supported hundreds of concurrent users.",
        "[Add retention, engagement, or satisfaction metric]"
      ],
      links: [
        { label: "Architecture write-up", href: "[Add link]" }
      ]
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Company A, South Korea",
      dates: "Apr 2023 - Mar 2026",
      bullets: [
        "Led cross-service retrieval optimization through embedding model training and selection, reranker training, and evaluation design.",
        "Created multilingual, multi-format evaluation datasets and an internal leaderboard to make model comparison systematic and repeatable.",
        "Improved retrieval quality with LLM-based query rewriting, chunking strategies, and an LM-based chunking validation pipeline.",
        "Shifted model strategy from custom training to cost-efficient off-the-shelf embeddings when quality reached production needs, reducing training overhead while preserving performance.",
        "Optimized serving with TEI on H100 MIG instances and used load testing to set latency targets and resource allocation.",
        "Automated indexing and validation workflows across RDB, Milvus, MongoDB, and Redis using Airflow.",
        "Designed a hybrid retrieval-generation pipeline for in-game AI customization, cutting latency from approximately 5 seconds to under 2 seconds.",
        "Moved more than 60% of requests to retrieval, reducing GPU cost by 60% while maintaining around 80% user satisfaction.",
        "Fine-tuned a 3B-parameter language model with LoRA on 500K-1M curated samples to replace third-party APIs and reduce peak latency from approximately 8 seconds to approximately 1 second.",
        "Built a long-term memory system combining vector retrieval and structured state tracking for virtual AI characters in live sessions."
      ]
    },
    {
      role: "AI Research Intern",
      company: "Company A, South Korea",
      dates: "Jan 2023 - Mar 2023",
      bullets: [
        "Fine-tuned persona-based language models and implemented hybrid memory retrieval using Elasticsearch.",
        "[Add evaluation metric or deployment detail]"
      ]
    },
    {
      role: "Research Intern",
      company: "Company B, South Korea",
      dates: "Mar 2021 - Jun 2021",
      bullets: [
        "Developed a real-time medical image segmentation and 3D reconstruction system.",
        "Co-authored a paper presented at OO.",
        "[Add modality, model type, or outcome if available]"
      ]
    }
  ],
  publications: [
    {
      title: "paper title",
      venue: "OO",
      year: "2023",
      description:
        "Co-authored publication from research internship work. The CV extract redacts the full author list and venue details.",
      note: "Citation in CV: Yoonhye Kim, XXX, XXX, \"paper title\", OO, 2023"
    }
  ],
  patents: [
    "Method and Apparatus for Generating Images for Character Costumes Based on User Input Data, 2026",
    "Apparatus and Method for Dialogue-Based In-Game Automatic Housing Control, 2026",
    "Apparatus and Method for Long-term Memory Management Supporting Chatbot Service, 2026"
  ],
  skills: {
    Languages: ["Python", "SQL", "C++"],
    "ML / AI": [
      "RAG",
      "Vector Search",
      "Embedding Training",
      "Reranker Training",
      "LoRA / PEFT",
      "Multimodal Models",
      "PyTorch",
      "Transformers"
    ],
    "LLM / NLP / Retrieval": [
      "Query Rewriting",
      "Chunking Strategy Design",
      "Evaluation Dataset Construction",
      "Hybrid Retrieval-Generation Systems",
      "Long-Term Memory Retrieval"
    ],
    "Backend / Infra": ["vLLM", "TGI", "TEI", "AWS", "Docker", "Kubernetes (collaborative)", "Airflow"],
    "Data / DB": ["Milvus", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis"],
    Tools: ["H100 MIG", "Load Testing", "Benchmarking", "Internal Leaderboards"]
  },
  additional: [
    {
      title: "Achievements",
      body: "[Add notable awards, rankings, or internal recognition]"
    },
    {
      title: "Open Source",
      body: "[Add GitHub repositories, OSS contributions, or reusable libraries]"
    },
    {
      title: "Talks",
      body: "[Add conference, meetup, or internal presentations]"
    },
    {
      title: "Certifications",
      body: "[Add relevant cloud, ML, or engineering certifications]"
    },
    {
      title: "Awards",
      body: "[Add scholarships, competitions, or research distinctions]"
    },
    {
      title: "Leadership",
      body: "[Add mentoring, team leadership, or cross-functional ownership examples]"
    },
    {
      title: "Research Interests",
      body: "[Add interests such as retrieval systems, LLM evaluation, memory systems, multimodal AI]"
    },
    {
      title: "Work Authorization / Location",
      body: "Open Work Permit. [Add current location or relocation preference in Canada]"
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

    const linksRow = document.createElement("div");
    linksRow.className = "links-row";
    project.links.forEach((link) => {
      linksRow.appendChild(createAnchor(link, "inline-link"));
    });

    article.append(meta, title, problem, bulletList, impactTitle, impactList, tagList, linksRow);
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
  const pubs = document.getElementById("publications-list");
  portfolioData.publications.forEach((publication) => {
    const item = document.createElement("article");
    item.className = "stack-item";
    item.innerHTML = `
      <h3>${publication.title}</h3>
      <p class="meta">${publication.venue} · ${publication.year}</p>
      <p>${publication.description}</p>
      <p class="muted">${publication.note}</p>
    `;
    pubs.appendChild(item);
  });

  const patents = document.getElementById("patents-list");
  portfolioData.patents.forEach((patent) => {
    const item = document.createElement("article");
    item.className = "stack-item";
    item.innerHTML = `<p>${patent}</p>`;
    patents.appendChild(item);
  });
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
