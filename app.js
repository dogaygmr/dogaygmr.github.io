const projects = [
  {
    name: "worker-cv-parser-rag",
    category: "Applied AI",
    language: "Python",
    pushed: "2026-02-03",
    fork: false,
    description: "Turns CV documents into structured profile data using text extraction, chunking, embeddings, retrieval, and schema-guided language-model extraction.",
    url: "https://github.com/dogaygmr/worker-cv-parser-rag",
    featured: true,
    detail: "README reviewed"
  },
  {
    name: "Sirket-Tekillestirme",
    category: "Applied AI",
    language: "HTML",
    pushed: "2026-01-30",
    fork: false,
    description: "A company research agent that separates web research, structured extraction, and reflection to return schema-shaped company information.",
    url: "https://github.com/dogaygmr/Sirket-Tekillestirme",
    featured: true,
    detail: "README reviewed"
  },
  {
    name: "PIPELINE-DE-TRAITEMENT-DE-DONNEES",
    category: "Data & Analytics",
    language: "Repository metadata",
    pushed: "2024-02-02",
    fork: false,
    description: "A data-processing pipeline repository. The project name is retained as published; further implementation details are not summarized here.",
    url: "https://github.com/dogaygmr/PIPELINE-DE-TRAITEMENT-DE-DONNEES"
  },
  {
    name: "Recommendation-System",
    category: "Applied AI",
    language: "Repository metadata",
    pushed: "2025-04-14",
    fork: false,
    description: "A recommendation-system project. Open the source repository for its implementation details and current status.",
    url: "https://github.com/dogaygmr/Recommendation-System"
  },
  {
    name: "rag-tutorial-v2",
    category: "Applied AI",
    language: "Repository metadata",
    pushed: "2024-08-03",
    fork: true,
    description: "A forked tutorial focused on LangChain RAG, local language models, database updates, and testing.",
    url: "https://github.com/dogaygmr/rag-tutorial-v2"
  },
  {
    name: "Urban-Mobility-Analysis",
    category: "Data & Analytics",
    language: "TeX",
    pushed: "2024-02-02",
    fork: false,
    description: "An urban mobility analysis repository. The public repository metadata identifies the project; consult its source for the study details.",
    url: "https://github.com/dogaygmr/Urban-Mobility-Analysis"
  },
  {
    name: "pred-of-medecine-consumption",
    category: "Data & Analytics",
    language: "Jupyter Notebook",
    pushed: "2023-10-25",
    fork: false,
    description: "A notebook-based project on medicine consumption prediction.",
    url: "https://github.com/dogaygmr/pred-of-medecine-consumption"
  },
  {
    name: "Data-Structures-and-Algorithms",
    category: "Software & Learning",
    language: "TeX",
    pushed: "2023-10-05",
    fork: false,
    description: "A collection of data structures and algorithms coursework and exercises.",
    url: "https://github.com/dogaygmr/Data-Structures-and-Algorithms"
  },
  {
    name: "Wtag",
    category: "Software & Learning",
    language: "Repository metadata",
    pushed: "2023-09-28",
    fork: false,
    description: "A public repository from the project archive. Source code and history are available on GitHub.",
    url: "https://github.com/dogaygmr/Wtag"
  },
  {
    name: "Customer-Churn",
    category: "Data & Analytics",
    language: "Jupyter Notebook",
    pushed: "2023-05-07",
    fork: false,
    description: "A notebook-based customer churn analysis and prediction project.",
    url: "https://github.com/dogaygmr/Customer-Churn"
  },
  {
    name: "taskforce-platform",
    category: "Software & Learning",
    language: "Repository metadata",
    pushed: "2023-09-21",
    fork: false,
    description: "A platform repository. The README links to its hosted project; see the source for current availability.",
    url: "https://github.com/dogaygmr/taskforce-platform",
    homepage: "https://taskforce.onrender.com"
  },
  {
    name: "GA-mutation-paralellisation",
    category: "Software & Learning",
    language: "Python",
    pushed: "2023-02-08",
    fork: false,
    description: "A Python project exploring parallelization in genetic-algorithm mutation.",
    url: "https://github.com/dogaygmr/GA-mutation-paralellisation"
  },
  {
    name: "Application-de-BigQuery",
    category: "Data & Analytics",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A BigQuery application project from the public repository archive.",
    url: "https://github.com/dogaygmr/Application-de-BigQuery"
  },
  {
    name: "Rezervasyon-Sistemi-Fizibilite-Calismasi",
    category: "Software & Learning",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A feasibility study for a reservation system.",
    url: "https://github.com/dogaygmr/Rezervasyon-Sistemi-Fizibilite-Calismasi"
  },
  {
    name: "Hasta-Takip-Sistemi",
    category: "Software & Learning",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A patient-tracking system project in the public archive.",
    url: "https://github.com/dogaygmr/Hasta-Takip-Sistemi"
  },
  {
    name: "Liman-MYS-Eklenti-Gelistirme",
    category: "Software & Learning",
    language: "PHP",
    pushed: "2022-01-27",
    fork: false,
    description: "A Liman MYS plugin project developed during the Havelsan Technology Camp, using the Liman extension model.",
    url: "https://github.com/dogaygmr/Liman-MYS-Eklenti-Gelistirme"
  },
  {
    name: "Societe-d-Enregistrement-DataBase",
    category: "Data & Analytics",
    language: "SQL",
    pushed: "2022-01-27",
    fork: false,
    description: "A small database project developed with Microsoft SQL Server.",
    url: "https://github.com/dogaygmr/Societe-d-Enregistrement-DataBase"
  },
  {
    name: "Encryption-Project",
    category: "Software & Learning",
    language: "Jupyter Notebook",
    pushed: "2022-01-27",
    fork: false,
    description: "Notebook implementations exploring RSA, Diffie–Hellman, and Vernam encryption algorithms.",
    url: "https://github.com/dogaygmr/Encryption-Project"
  },
  {
    name: "Diabetes-Prediction",
    category: "Data & Analytics",
    language: "Jupyter Notebook",
    pushed: "2022-01-27",
    fork: false,
    description: "A notebook project exploring diabetes prediction from medical measurements.",
    url: "https://github.com/dogaygmr/Diabetes-Prediction"
  },
  {
    name: "havelsan-tech.-camp",
    category: "Software & Learning",
    language: "Shell",
    pushed: "2021-09-09",
    fork: false,
    description: "Shell scripts and materials associated with a technology-camp project.",
    url: "https://github.com/dogaygmr/havelsan-tech.-camp"
  },
  {
    name: "teknolojikampi2021",
    category: "Software & Learning",
    language: "Repository metadata",
    pushed: "2021-09-09",
    fork: true,
    description: "A forked repository associated with the Pardus and Liman technology camp.",
    url: "https://github.com/dogaygmr/teknolojikampi2021"
  },
  {
    name: "game",
    category: "Software & Learning",
    language: "Python",
    pushed: "2021-09-09",
    fork: false,
    description: "A small Python game project from the public archive.",
    url: "https://github.com/dogaygmr/game"
  },
  {
    name: "Author-predict-code",
    category: "Applied AI",
    language: "Repository metadata",
    pushed: "2020-06-28",
    fork: true,
    description: "A forked text-author prediction project based on linguistic feature analysis.",
    url: "https://github.com/dogaygmr/Author-predict-code"
  },
  {
    name: "systeme-of-irrigation",
    category: "Software & Learning",
    language: "C++",
    pushed: "2021-01-07",
    fork: false,
    description: "A C++ irrigation-system project.",
    url: "https://github.com/dogaygmr/systeme-of-irrigation"
  }
];

const featured = projects.filter((project) => project.featured);
const categories = ["All", ...new Set(projects.map((project) => project.category))];
const state = { category: "All", query: "", includeForks: false };
const grid = document.querySelector("#project-grid");
const featuredGrid = document.querySelector("#featured-projects");
const count = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#project-search");
const forkToggle = document.querySelector("#include-forks");

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
}[character]));

function dateLabel(dateString) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}

function featureCard(project, index) {
  const art = index === 0
    ? `<div class="feature-art art-cv" aria-hidden="true"><div class="paper-stack"><span></span><span></span><span></span></div><span class="art-arrow">→</span><div class="json-block">{ "profile": {<br>&nbsp; "skills": [...]<br>} }</div></div>`
    : `<div class="feature-art art-research" aria-hidden="true"><div class="research-node"><span></span><span></span></div><span class="research-link"></span><div class="research-node"><span></span><span></span></div><span class="research-link"></span><div class="research-node"><span></span><span></span></div></div>`;
  return `<a class="feature-card" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">
    <div class="feature-top"><span class="feature-number">0${index + 1} / FEATURED</span><span class="feature-arrow" aria-hidden="true">↗</span></div>
    ${art}
    <span class="feature-category">${escapeHtml(project.category)} · ${escapeHtml(project.detail)}</span>
    <h3>${escapeHtml(project.name)}</h3>
    <p>${escapeHtml(project.description)}</p>
    <div class="feature-meta"><span class="pill">${escapeHtml(project.language)}</span><span class="pill">${dateLabel(project.pushed)}</span></div>
  </a>`;
}

function renderFilters() {
  document.querySelector("#category-filters").innerHTML = categories.map((category) =>
    `<button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}">${escapeHtml(category)}</button>`
  ).join("");
}

function matches(project) {
  if (!state.includeForks && project.fork) return false;
  if (state.category !== "All" && project.category !== state.category) return false;
  const haystack = `${project.name} ${project.category} ${project.language} ${project.description}`.toLowerCase();
  return haystack.includes(state.query);
}

function projectCard(project) {
  const badges = [project.fork ? "FORK" : "", project.featured ? "SELECTED" : ""].filter(Boolean);
  return `<article class="project-card">
    <div class="project-card-top"><span class="project-category">${escapeHtml(project.category)}</span><span class="project-badges">${badges.map((badge) => `<span class="project-badge">${badge}</span>`).join("")}</span></div>
    <div class="project-title-row"><h3>${escapeHtml(project.name)}</h3><a class="project-open" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.name)} on GitHub">↗</a></div>
    <p>${escapeHtml(project.description)}</p>
    <div class="project-card-bottom"><span>${escapeHtml(project.language)}</span><span>${dateLabel(project.pushed)}</span></div>
  </article>`;
}

function renderProjects() {
  const visible = projects.filter(matches);
  grid.innerHTML = visible.map(projectCard).join("");
  count.textContent = `${visible.length} / ${projects.length}`;
  emptyState.hidden = visible.length !== 0;
}

featuredGrid.innerHTML = featured.map(featureCard).join("");
renderFilters();
renderProjects();

document.querySelector("#category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderProjects();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim().toLowerCase();
  renderProjects();
});

forkToggle.addEventListener("change", () => {
  state.includeForks = forkToggle.checked;
  renderProjects();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    renderProjects();
    searchInput.blur();
  }
});
