const portfolioData = {
  profile: {
    name: "Yoonhye Kim",
    badge: "Vancouver, BC, Canada · Open Work Permit",
    headline:
      "I build AI systems that need to be fast, reliable, and useful in the real world.",
    summary:
      "Over the past three years, I've worked on live AI products where retrieval quality, latency, and cost all matter at once. My work sits at the intersection of search, evaluation, model optimization, and serving — with a strong focus on building systems teams can actually ship and operate.",
    ctas: [
      { label: "Resume", href: "CV.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/yoonene" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yoonhye-kim-271a6a216/" },
      { label: "Email", href: "mailto:neune21153@gmail.com" }
    ],
    contact: [
      { label: "Email", value: "neune21153@gmail.com", href: "mailto:neune21153@gmail.com" },
      { label: "GitHub", value: "yoonene", href: "https://github.com/yoonene" },
      { label: "LinkedIn", value: "yoonhye kim", href: "https://www.linkedin.com/in/yoonhye-kim-271a6a216/" },
      { label: "Location", value: "Vancouver, BC, Canada" },
      { label: "Work authorization", value: "Open Work Permit" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Placeholder University",
      location: "South Korea",
      dates: "Mar 2019 – Feb 2023",
      note: ""
    }
  ],

  projects: [
    {
      title: "Cross-Service Retrieval Infrastructure",
      context: "AI Engineer · Smilegate · LostArk Mobile · 2023–2026",
      problem:
        "Multiple AI features across LostArk Mobile shared no common retrieval foundation. Each service evaluated models differently, indexed data inconsistently, and had no shared way to measure whether retrieval changes were actually helping players.",
      whatWasDone: [
        "Built shared retrieval infrastructure used across multiple AI features, standardizing how data was indexed, queried, and evaluated service-wide.",
        "Created Korean-language and domain-specific evaluation datasets, and built an internal benchmark workflow with MRR, Recall@K, and NDCG metrics so model decisions had a measurable basis.",
        "Improved search quality through embedding and reranker experiments, LLM-based query rewriting, and chunking strategy exploration across different services.",
        "Evaluated and adopted Qwen3-Embedding and other open-source models, and built automated preprocessing and indexing pipelines using Airflow.",
        "Optimized TEI serving on H100 MIG slices and ran structured load tests to find practical latency and throughput targets for production."
      ],
      stack: [
        "Python",
        "Milvus",
        "Elasticsearch",
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
        "Replaced one-off model checks with a repeatable benchmark, giving teams a shared standard for retrieval decisions.",
        "Reduced embedding maintenance overhead by consolidating to well-maintained open-source models without sacrificing quality.",
        "Made retrieval improvements portable across services, shortening the path from experiment to deployment."
      ],
      links: []
    },
    {
      title: "Low-Latency AI Customization Pipeline",
      context: "AI Engineer · Smilegate · LostArk Mobile · 30K-user CBT · 2025–2026",
      problem:
        "LostArk Mobile's AI-powered character costume and room interior customization features were too slow and too expensive for sustained player traffic. Players type a natural language description; the system returns matching in-game patterns. End-to-end latency averaged ~5 seconds and GPU costs were unsustainable at scale.",
      whatWasDone: [
        "Designed a hybrid retrieval-plus-generation pipeline for two in-game AI features: character costume customization and room interior design.",
        "Fine-tuned a 3B LLM with LoRA on ~500K–1M production-style training samples to replace third-party API calls and bring latency and cost under control.",
        "Replaced VLM-based image scoring with a fine-tuned reranker, eliminating a major bottleneck in the inference path.",
        "Served the full model stack on vLLM with AWS H100 MIG instances, routing 60%+ of requests through retrieval to avoid generation entirely where possible."
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
        "Milvus",
        "Hybrid Search",
        "HuggingFace"
      ],
      impact: [
        "Cut end-to-end latency from ~5s to under 2s; reduced peak path latency from ~8s to ~1s.",
        "Reduced GPU inference cost by 60% while maintaining ~80% user satisfaction across 30K closed beta users.",
        "Replaced third-party API dependencies with an in-house model, improving cost predictability and response quality control."
      ],
      links: [],
      media: [
        {
          type: "youtube",
          id: "H9y6fp164_4",
          start: 39,
          end: 88,
          caption: "In-game AI dyeing feature — LostArk Mobile (0:39–1:28)"
        },
        {
          type: "image",
          src: "assets/ai-dyeing-demo.png",
          alt: "AI Dyeing System in LostArk Mobile — character costume customization UI"
        }
      ]
    },
    {
      title: "Long-Term Memory System for AI Characters",
      context: "AI Engineer · Smilegate · 2024",
      problem:
        "Smilegate ran a live AI V-tuber on their streaming channel. The character needed to remember hundreds of past conversations, maintain a stable persona, and respond naturally to audience messages — all in real time during live sessions with hundreds of concurrent viewers. Standard stateless LLM calls couldn't support this kind of continuity.",
      whatWasDone: [
        "Designed and built the complete AI dialogue system for the V-tuber: conversation pipeline, backend architecture, database design, and the long-term memory layer.",
        "Built an LLM-based memory extraction and consolidation flow on top of Milvus (vector storage) and PostgreSQL (structured state), enabling the character to recall past events, viewer relationships, and stream highlights.",
        "Implemented dynamic updates to memory, persona, and personality state based on viewer interactions, so the character evolved naturally over time without losing coherence.",
        "Engineered the system for live 1:N sessions — one AI character handling hundreds of simultaneous viewers while maintaining contextual, persona-consistent responses.",
        "Extended the architecture to in-game AI NPCs and other character types after the V-tuber deployment."
      ],
      stack: [
        "Python",
        "LLMs",
        "Milvus",
        "PostgreSQL",
        "Redis",
        "FastAPI",
        "Vector Search",
        "Persona Engineering",
        "Memory Extraction"
      ],
      impact: [
        "Shipped a live AI V-tuber that ran in real broadcast environments with hundreds of concurrent viewers.",
        "Enabled multi-session continuity: the character remembered past conversations, viewer names, and prior stream content.",
        "Architecture generalized to AI NPCs and in-game characters, extending its value beyond the original use case.",
        "Filed as a patent: 'Apparatus and Method for Long-Term Memory Management Supporting Chatbot Service.'"
      ],
      links: [],
      media: [
        {
          type: "youtube",
          id: "A2HB65cRw1c",
          caption: "Smilegate V-tuber interacting live with the AI V-tuber I built"
        }
      ]
    },
    {
      title: "Personalized In-Game AI Guide",
      context: "AI Engineer · Smilegate · LostArk Mobile · 2026",
      problem:
        "LostArk Mobile's in-game guide NPC needed to give players answers based on their actual situation — current equipment, level, skill build, and progression stage — not just generic FAQs. This required connecting live player state with a large corpus of structured and unstructured game knowledge.",
      whatWasDone: [
        "Designed the retrieval architecture for a personalized AI guide that grounds every response in both player context (inventory, equipment, level, skill build, progression) and game knowledge (world lore, item descriptions, quest guides, combat mechanics).",
        "Built a lightweight GraphRAG-inspired retrieval approach to capture cross-document relationships and enable multi-hop guidance (e.g., responses that reason across player data and multiple game documents simultaneously).",
        "Structured incremental graph updates so the knowledge base could be extended with new game content without full re-indexing.",
        "Composed prompt inputs from multiple sources — player state, retrieved game context, and character persona — to produce responses specific to each player's situation."
      ],
      stack: [
        "Python",
        "GraphRAG",
        "LightRAG",
        "Multi-hop Retrieval",
        "LLMs",
        "Milvus",
        "PostgreSQL",
        "FastAPI",
        "LangGraph"
      ],
      impact: [
        "Enabled genuinely personalized guidance — responses that changed based on individual player progression, not just their query.",
        "Improved retrieval quality for multi-hop questions requiring connections across player data and game documents.",
        "Built an extensible knowledge layer the team could update with new game content without re-engineering the retrieval pipeline."
      ],
      links: []
    },
  ],

  sideProjects: [
    {
      title: "Home Alone Romance — AI Dialogue Backend",
      context: "Team Project (3 members) · Visual Novel / Romance Simulation · 2024",
      problem:
        "Most visual novels give players a fixed set of dialogue choices. Home Alone Romance removes that constraint — players type anything they want, and the AI responds in character. The backend needed to generate realistic character dialogue, score affection in real time, and determine scene transitions, all while keeping latency low enough to feel like a real conversation.",
      whatWasDone: [
        "Built the full AI dialogue server with FastAPI, exposing REST and SSE streaming APIs for character dialogue generation, affection scoring, scene transition detection, and player response suggestions.",
        "Integrated Anthropic Claude as the primary LLM with automatic OpenAI GPT fallback on API overload (HTTP 529), using async calls throughout.",
        "Parallelized dialogue generation and affection scoring with asyncio.gather, reducing round-trip latency per turn.",
        "Applied token optimizations: limited conversation history to the last 10 turns, and short-circuited end-of-scene detection for question-ending inputs without an LLM call."
      ],
      stack: [
        "Python",
        "FastAPI",
        "Anthropic Claude",
        "OpenAI GPT",
        "SSE Streaming",
        "Pydantic",
        "Prompt Engineering"
      ],
      impact: [
        "Shipped a playable game on Stove (Smilegate's distribution platform) with four story routes and multiple character types.",
        "Automatic LLM fallback kept the service available during Claude API outages.",
        "Parallelized core API calls reduced per-turn latency without additional infrastructure cost."
      ],
      links: [
        { label: "GitHub", href: "https://github.com/yoonene/home-alone-romance" },
        { label: "Play on Stove", href: "https://store.onstove.com/games/placeholder" }
      ]
    },
    {
      title: "Project K-Star — NPC Dialogue Backend",
      context: "Team Project (4 members) · K-pop Idol Simulation · 2025",
      problem:
        "K-Star is a K-pop idol management simulation where NPC interactions — trainers, rivals, managers — shape the player's career path. Each NPC needed a distinct, consistent personality across a full playthrough, while keeping API costs manageable as the dialogue volume scaled.",
      whatWasDone: [
        "Built the NPC dialogue backend with FastAPI, serving REST and WebSocket streaming APIs for character conversation, affection and stress state updates, story flag resolution, and personality-consistent response generation.",
        "Implemented dynamic model routing: used Claude Haiku for standard conversations and automatically upgraded to Claude Sonnet for flagged important scenes, balancing cost and quality per interaction.",
        "Added a keyword pre-filter to bypass LLM calls entirely for greeting-type inputs, reducing latency and API cost for the most frequent interaction type.",
        "Integrated Langfuse for prompt versioning and LLM call tracing, enabling fast iteration on character prompts across the team.",
        "Wrote a dedicated Unity WebSocket integration guide for the game client team."
      ],
      stack: [
        "Python",
        "FastAPI",
        "Anthropic Claude (Haiku / Sonnet)",
        "OpenAI GPT",
        "WebSocket Streaming",
        "Langfuse",
        "Pydantic",
        "Unity Integration"
      ],
      impact: [
        "Dynamic model switching maintained generation quality on key scenes without paying for the higher-tier model on every call.",
        "Keyword-based LLM bypass reduced latency and cost for the highest-volume interaction type.",
        "Langfuse tracing made prompt debugging and cross-team iteration significantly faster."
      ],
      links: [
        { label: "GitHub", href: "https://github.com/yoonene/project-k-star" },
        { label: "Play on Stove", href: "https://store.onstove.com/games/placeholder2" }
      ]
    },
    {
      title: "Fate.me — AI Fortune Reading Agent",
      context: "Hackathon Project · Cursor Hackathon 2026 · Team (2 members) · Backend",
      problem:
        "Traditional fortune-telling apps serve static text. Fate.me makes it conversational: users enter their birth date and time, receive a structured Korean saju (四柱) reading, then ask follow-up questions about compatibility, timing, or life areas through a chat interface. The challenge was combining deterministic saju calculation with fluid, AI-driven consultation.",
      whatWasDone: [
        "Built a multi-agent consultation system using LangGraph, routing dynamically between specialized nodes for saju reading, compatibility analysis, timing guidance, and domain-specific fortune (career, relationships, health).",
        "Kept saju calculation fully deterministic using a rule engine (lunar-python + YAML rules), delegating only natural language interpretation to the LLM — ensuring reproducible readings regardless of model variation.",
        "Implemented SSE streaming across both the initial reading and follow-up chat endpoints for real-time response delivery.",
        "Designed a fallback system that serves pre-written copy when no API key is present, making local development and demos fully self-contained."
      ],
      stack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "Anthropic Claude",
        "GPT-4o",
        "SSE Streaming",
        "Pydantic",
        "Render"
      ],
      impact: [
        "Built and shipped a working multi-agent service end-to-end during a hackathon.",
        "Deterministic calculation layer ensured reading consistency across sessions regardless of LLM variation.",
        "LangGraph routing enabled clean separation of consultation domains without complex conditional branching."
      ],
      links: [
        { label: "GitHub", href: "https://github.com/yoonene/fate-me" },
        { label: "Live Demo", href: "https://fate-me.onrender.com" }
      ]
    },
    {
      title: "ResuMatch — AI Job Matching & Resume Tailoring",
      context: "Personal Project · 2026",
      problem:
        "Job searching meant manually scanning multiple boards, comparing listings to a resume by eye, and rewriting the resume for each application. ResuMatch automates the full loop: upload a resume, get matched job listings ranked by actual fit, and receive a tailored resume draft — for about $0.07 per search run.",
      whatWasDone: [
        "Built a full-stack pipeline: FastAPI backend + Next.js 15 frontend, with resume parsing (PDF/DOCX), job listing ingestion via SerpAPI (Google Jobs) and Adzuna API, and hybrid match scoring.",
        "Implemented a hybrid scoring formula combining keyword overlap and embedding similarity (0.4×keyword + 0.6×embedding cosine), with a required-skill penalty for hard mismatches, output clamped to [0, 1].",
        "Ran Qwen3-Embedding-0.6B locally via SentenceTransformers (CPU inference), eliminating external embedding API costs entirely.",
        "Streamed all results via SSE with a 12-step progress UI so users see the full pipeline running in real time.",
        "Auto-generated tailored resume HTML from match results, adapting language and emphasis to each specific job listing."
      ],
      stack: [
        "Python",
        "FastAPI",
        "Next.js 15",
        "TypeScript",
        "Qwen3-Embedding",
        "SentenceTransformers",
        "GPT-4o",
        "SerpAPI",
        "Adzuna",
        "SSE Streaming",
        "Tailwind CSS"
      ],
      impact: [
        "~$0.07 per full search cycle — local embeddings keep the variable cost to LLM API calls only.",
        "Hybrid scoring catches keyword-heavy mismatches that pure semantic search alone would miss.",
        "Built for personal use during my own job search — the most honest validation metric."
      ],
      links: [
        { label: "GitHub", href: "https://github.com/yoonene/resumatch" },
        { label: "Live Demo", href: "https://resumatch.placeholder.com" }
      ]
    }
  ],

  experience: [
    {
      role: "AI Engineer",
      company: "Smilegate",
      companyNote: "South Korean game developer behind global titles including Lost Ark and CrossFire (5,000+ employees)",
      location: "Seoul, South Korea",
      dates: "Apr 2023 – Mar 2026",
      bullets: [
        "Built cross-service retrieval infrastructure for multiple AI features in LostArk Mobile, covering evaluation datasets, benchmarks, embedding model selection, reranker training, query rewriting, and chunking strategies.",
        "Designed and shipped an AI customization pipeline (character costumes and room interiors) for LostArk Mobile's 30K-user closed beta — cutting end-to-end latency from ~5s to under 2s and GPU cost by 60%.",
        "Fine-tuned a 3B LLM with LoRA on ~500K–1M samples and replaced VLM-based scoring with an in-house reranker, reducing inference cost and latency.",
        "Designed and built an AI V-tuber's long-term memory system using vector and relational storage, enabling persona-consistent responses in live sessions with hundreds of concurrent viewers; filed as a patent.",
        "Built a personalized in-game AI guide for LostArk Mobile using a GraphRAG-inspired retrieval approach to connect player state with game knowledge for multi-hop guidance.",
        "Optimized TEI and vLLM serving on H100 MIG instances, balancing latency, throughput, and operating cost across multiple live AI services.",
        "Built retrieval evaluation workflows with RAGAS and internal benchmarks (MRR, Recall@K, NDCG) to make model decisions measurable and reproducible."
      ]
    },
    {
      role: "AI Research Intern",
      company: "Smilegate",
      companyNote: "",
      location: "Seoul, South Korea",
      dates: "Jan 2023 – Mar 2023",
      bullets: [
        "Fine-tuned persona-based LLMs and implemented hybrid memory retrieval using Elasticsearch.",
        "Converted to a full-time AI Engineer role at the end of the internship."
      ]
    },
    {
      role: "Research Intern",
      company: "Korea Institute of Science and Technology (KIST)",
      companyNote: "",
      location: "Seoul, South Korea",
      dates: "Mar 2021 – Jun 2021",
      bullets: [
        "Developed a real-time medical image segmentation and 3D reconstruction pipeline for handheld ultrasound as lead researcher; co-authored a paper presented at IEEE EMBC 2023."
      ]
    }
  ],

  publications: [
    {
      title: "Segmentation of Carotid Vessel using Res-Unet for Point-of-Care Ultrasound",
      venue: "IEEE EMBC (Engineering in Medicine and Biology Conference)",
      year: "2023",
      description:
        "Real-time carotid vessel segmentation for handheld ultrasound using a residual U-Net architecture. Improved segmentation and Doppler accuracy in resource-limited point-of-care settings.",
      note: "Lead researcher — responsible for model implementation, experiments, and primary writing."
    }
  ],

  patents: [
    {
      title: "Method and Apparatus for Generating Images for Character Costumes Based on User Input Data",
      description:
        "An AI pipeline that generates in-game character costume patterns from natural language player input, deployed as part of LostArk Mobile's AI customization features.",
      status: "Patent Pending · Filed 2026"
    },
    {
      title: "Apparatus and Method for Dialogue-Based In-Game Automatic Housing Control",
      description:
        "A conversational AI system that interprets player dialogue to automatically configure in-game room interiors, applied to LostArk Mobile's AI housing feature.",
      status: "Patent Pending · Filed 2026"
    },
    {
      title: "Apparatus and Method for Long-Term Memory Management Supporting Chatbot Service",
      description:
        "A long-term memory architecture enabling AI characters to maintain persona consistency and recall past conversations across extended interactions.",
      status: "Patent Pending · Filed 2026"
    }
  ],

  skills: {
    Languages: ["Python", "SQL", "C++ (basic)"],
    "ML / LLM": [
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Vector & Hybrid Search",
      "Embedding & Reranker Training",
      "Retrieval Evaluation",
      "LoRA / PEFT Fine-tuning",
      "Multimodal Models (VLM)",
      "PyTorch",
      "Transformers",
      "HuggingFace",
      "SentenceTransformers"
    ],
    Frameworks: ["LangChain", "LangGraph", "RAGAS", "W&B"],
    Serving: ["vLLM", "TGI", "TEI", "FastAPI", "Streaming APIs"],
    Databases: ["Milvus", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis"],
    Infra: ["AWS", "Docker", "Kubernetes", "Airflow", "CI/CD"]
  },

  additional: [
    {
      title: "What I Enjoy Building",
      body: "Search and retrieval systems, evaluation workflows, memory-heavy AI character systems, and the serving layer that keeps all of it responsive in production."
    },
    {
      title: "Product Mindset",
      body: "I care about whether a model change improves the real user experience, not just whether it moves an offline metric."
    },
    {
      title: "How I Work",
      body: "I like owning problems end to end — from dataset design and evaluation to serving decisions and production rollout."
    },
    {
      title: "Collaboration",
      body: "A lot of my work sits between research, game development, backend, and product teams. I value clear tradeoffs and decisions that are easy to explain."
    },
    {
      title: "What I'm Looking For",
      body: "ML Engineer or AI Engineer roles where retrieval, search, or production AI systems work matters at scale. Particularly interested in game AI and player-facing AI features."
    },
    {
      title: "Languages",
      body: "Fluent in English and Korean. Comfortable working in international teams and cross-cultural environments."
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
  return !value || value.includes("[Add") || value.includes("/placeholder");
}

function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "\u2026";
}

function renderMedia(mediaList) {
  if (!mediaList || mediaList.length === 0) return "";
  return mediaList
    .map((item) => {
      if (item.type === "youtube") {
        // youtube-nocookie + referrerpolicy: fixes YouTube embed "Error 153" when referrer is stripped
        let src = `https://www.youtube-nocookie.com/embed/${item.id}?rel=0`;
        if (item.start) src += `&start=${item.start}`;
        if (item.end) src += `&end=${item.end}`;
        let watchUrl = `https://www.youtube.com/watch?v=${item.id}`;
        if (item.start) watchUrl += `&t=${item.start}s`;
        return `
          <div class="modal-media">
            <div class="modal-media-video">
              <iframe src="${src}"
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen
                title="${item.caption || "Project demo"}"></iframe>
            </div>
            ${item.caption ? `<p class="modal-media-caption">${item.caption}</p>` : ""}
            <p class="modal-media-fallback"><a href="${watchUrl}" class="inline-link" target="_blank" rel="noreferrer">Open on YouTube</a> — if the player shows an error, use this link (common when opening the site as a local file)</p>
          </div>`;
      }
      if (item.type === "image") {
        return `
          <div class="modal-media">
            <img class="modal-media-img" src="${item.src}" alt="${item.alt || ""}" loading="lazy" />
            ${item.caption ? `<p class="modal-media-caption">${item.caption}</p>` : ""}
          </div>`;
      }
      return "";
    })
    .join("");
}

function buildModalContent(project) {
  const mediaHtml = renderMedia(project.media);
  const whatItems = project.whatWasDone.map((i) => `<li>${i}</li>`).join("");
  const impactItems = project.impact.map((i) => `<li>${i}</li>`).join("");
  const tags = project.stack.map((t) => `<span class="tag">${t}</span>`).join("");
  const validLinks = project.links.filter((l) => !isPlaceholder(l.href));
  const linksHtml =
    validLinks.length > 0
      ? `<div class="links-row" style="margin-top:20px">${validLinks
          .map(
            (l) =>
              `<a href="${l.href}" class="inline-link" target="_blank" rel="noreferrer">${l.label}</a>`
          )
          .join("")}</div>`
      : "";
  return `
    ${mediaHtml}
    <p class="meta" style="margin-bottom:6px">${project.context}</p>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-problem">${project.problem}</p>
    <p class="meta modal-section-label">What I did</p>
    <ul class="modal-list">${whatItems}</ul>
    <p class="meta modal-section-label">Impact</p>
    <ul class="modal-list">${impactItems}</ul>
    <div class="tag-list" style="margin-top:18px">${tags}</div>
    ${linksHtml}
  `;
}

function openModal(project) {
  const overlay = document.getElementById("project-modal");
  overlay.querySelector(".modal-body").innerHTML = buildModalContent(project);
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".modal-close").focus();
}

function closeModal() {
  const overlay = document.getElementById("project-modal");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

function initModal() {
  const overlay = document.getElementById("project-modal");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function createCompactCard(project) {
  const article = document.createElement("article");
  article.className = "card card-clickable";
  article.setAttribute("role", "button");
  article.setAttribute("tabindex", "0");
  article.setAttribute("aria-label", `View details for ${project.title}`);

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = project.context;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const problem = document.createElement("p");
  problem.textContent = truncate(project.problem, 130);

  const impactLabel = document.createElement("p");
  impactLabel.className = "meta";
  impactLabel.textContent = "Impact";
  impactLabel.style.marginTop = "14px";

  const impactList = document.createElement("ul");
  project.impact.slice(0, 2).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    impactList.appendChild(li);
  });

  const tagList = document.createElement("div");
  tagList.className = "tag-list";
  project.stack.slice(0, 5).forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagList.appendChild(span);
  });

  const btn = document.createElement("button");
  btn.className = "card-details-btn";
  btn.textContent = "View details \u2192";
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(project);
  });

  article.append(meta, title, problem, impactLabel, impactList, tagList, btn);
  article.addEventListener("click", () => openModal(project));
  article.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(project);
    }
  });

  return article;
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
    container.appendChild(createCompactCard(project));
  });
}

function populateSideProjects() {
  const container = document.getElementById("side-projects-grid");
  if (!container) return;
  portfolioData.sideProjects.forEach((project) => {
    container.appendChild(createCompactCard(project));
  });
}


function populateExperience() {
  const container = document.getElementById("experience-timeline");
  portfolioData.experience.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "timeline-entry";

    const title = document.createElement("h3");
    title.textContent = `${entry.role} · ${entry.company}`;

    if (entry.companyNote) {
      const note = document.createElement("p");
      note.className = "muted";
      note.style.margin = "4px 0 0";
      note.style.fontSize = "0.85em";
      note.textContent = entry.companyNote;
      article.append(title, note);
    } else {
      article.append(title);
    }

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

    article.append(meta, list);
    container.appendChild(article);
  });
}

function populateEducation() {
  const container = document.getElementById("education-timeline");
  portfolioData.education.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "timeline-entry";

    const title = document.createElement("h3");
    title.textContent = `${entry.degree} · ${entry.school}`;

    const meta = document.createElement("p");
    meta.className = "entry-meta";
    meta.textContent = `${entry.dates} · ${entry.location}`;
    meta.style.margin = "8px 0 0";

    article.append(title, meta);

    if (entry.note) {
      const note = document.createElement("p");
      note.className = "muted";
      note.style.marginTop = "8px";
      note.textContent = entry.note;
      article.appendChild(note);
    }

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

      if (typeof patent === "string") {
        item.innerHTML = `<p>${patent}</p>`;
      } else {
        item.innerHTML = `<h3>${patent.title}</h3>`;
        if (patent.description) {
          const desc = document.createElement("p");
          desc.textContent = patent.description;
          item.appendChild(desc);
        }
        if (patent.status) {
          const status = document.createElement("p");
          status.className = "meta";
          status.style.marginTop = "6px";
          status.textContent = patent.status;
          item.appendChild(status);
        }
      }

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
populateSideProjects();
populateExperience();
populateEducation();
populateResearch();
populateSkills();
populateAdditional();
populateContact();
setFooterYear();
initModal();
