const projects = [
  {
    name: "worker-cv-parser-rag",
    category: "Applied AI",
    visibility: "Public",
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
    visibility: "Public",
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
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2024-02-02",
    fork: false,
    description: "A data-processing pipeline repository. The project name is retained as published; further implementation details are not summarized here.",
    url: "https://github.com/dogaygmr/PIPELINE-DE-TRAITEMENT-DE-DONNEES"
  },
  {
    name: "Recommendation-System",
    category: "Applied AI",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2025-04-14",
    fork: false,
    description: "A recommendation-system project. Open the source repository for its implementation details and current status.",
    url: "https://github.com/dogaygmr/Recommendation-System"
  },
  {
    name: "rag-tutorial-v2",
    category: "Applied AI",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2024-08-03",
    fork: true,
    description: "A forked tutorial focused on LangChain RAG, local language models, database updates, and testing.",
    url: "https://github.com/dogaygmr/rag-tutorial-v2"
  },
  {
    name: "Urban-Mobility-Analysis",
    category: "Data & Analytics",
    visibility: "Public",
    language: "TeX",
    pushed: "2024-02-02",
    fork: false,
    description: "An urban mobility analysis repository. The public repository metadata identifies the project; consult its source for the study details.",
    url: "https://github.com/dogaygmr/Urban-Mobility-Analysis"
  },
  {
    name: "pred-of-medecine-consumption",
    category: "Data & Analytics",
    visibility: "Public",
    language: "Jupyter Notebook",
    pushed: "2023-10-25",
    fork: false,
    description: "A notebook-based project on medicine consumption prediction.",
    url: "https://github.com/dogaygmr/pred-of-medecine-consumption"
  },
  {
    name: "Data-Structures-and-Algorithms",
    category: "Software & Learning",
    visibility: "Public",
    language: "TeX",
    pushed: "2023-10-05",
    fork: false,
    description: "A collection of data structures and algorithms coursework and exercises.",
    url: "https://github.com/dogaygmr/Data-Structures-and-Algorithms"
  },
  {
    name: "Wtag",
    category: "Software & Learning",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2023-09-28",
    fork: false,
    description: "A public repository from the project archive. Source code and history are available on GitHub.",
    url: "https://github.com/dogaygmr/Wtag"
  },
  {
    name: "Customer-Churn",
    category: "Data & Analytics",
    visibility: "Public",
    language: "Jupyter Notebook",
    pushed: "2023-05-07",
    fork: false,
    description: "A notebook-based customer churn analysis and prediction project.",
    url: "https://github.com/dogaygmr/Customer-Churn"
  },
  {
    name: "taskforce-platform",
    category: "Software & Learning",
    visibility: "Public",
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
    visibility: "Public",
    language: "Python",
    pushed: "2023-02-08",
    fork: false,
    description: "A Python project exploring parallelization in genetic-algorithm mutation.",
    url: "https://github.com/dogaygmr/GA-mutation-paralellisation"
  },
  {
    name: "Application-de-BigQuery",
    category: "Data & Analytics",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A BigQuery application project from the public repository archive.",
    url: "https://github.com/dogaygmr/Application-de-BigQuery"
  },
  {
    name: "Rezervasyon-Sistemi-Fizibilite-Calismasi",
    category: "Software & Learning",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A feasibility study for a reservation system.",
    url: "https://github.com/dogaygmr/Rezervasyon-Sistemi-Fizibilite-Calismasi"
  },
  {
    name: "Hasta-Takip-Sistemi",
    category: "Software & Learning",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2023-02-08",
    fork: false,
    description: "A patient-tracking system project in the public archive.",
    url: "https://github.com/dogaygmr/Hasta-Takip-Sistemi"
  },
  {
    name: "Liman-MYS-Eklenti-Gelistirme",
    category: "Software & Learning",
    visibility: "Public",
    language: "PHP",
    pushed: "2022-01-27",
    fork: false,
    description: "A Liman MYS plugin project developed during the Havelsan Technology Camp, using the Liman extension model.",
    url: "https://github.com/dogaygmr/Liman-MYS-Eklenti-Gelistirme"
  },
  {
    name: "Societe-d-Enregistrement-DataBase",
    category: "Data & Analytics",
    visibility: "Public",
    language: "SQL",
    pushed: "2022-01-27",
    fork: false,
    description: "A small database project developed with Microsoft SQL Server.",
    url: "https://github.com/dogaygmr/Societe-d-Enregistrement-DataBase"
  },
  {
    name: "Encryption-Project",
    category: "Software & Learning",
    visibility: "Public",
    language: "Jupyter Notebook",
    pushed: "2022-01-27",
    fork: false,
    description: "Notebook implementations exploring RSA, Diffie–Hellman, and Vernam encryption algorithms.",
    url: "https://github.com/dogaygmr/Encryption-Project"
  },
  {
    name: "Diabetes-Prediction",
    category: "Data & Analytics",
    visibility: "Public",
    language: "Jupyter Notebook",
    pushed: "2022-01-27",
    fork: false,
    description: "A notebook project exploring diabetes prediction from medical measurements.",
    url: "https://github.com/dogaygmr/Diabetes-Prediction"
  },
  {
    name: "havelsan-tech.-camp",
    category: "Software & Learning",
    visibility: "Public",
    language: "Shell",
    pushed: "2021-09-09",
    fork: false,
    description: "Shell scripts and materials associated with a technology-camp project.",
    url: "https://github.com/dogaygmr/havelsan-tech.-camp"
  },
  {
    name: "teknolojikampi2021",
    category: "Software & Learning",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2021-09-09",
    fork: true,
    description: "A forked repository associated with the Pardus and Liman technology camp.",
    url: "https://github.com/dogaygmr/teknolojikampi2021"
  },
  {
    name: "game",
    category: "Software & Learning",
    visibility: "Public",
    language: "Python",
    pushed: "2021-09-09",
    fork: false,
    description: "A small Python game project from the public archive.",
    url: "https://github.com/dogaygmr/game"
  },
  {
    name: "Author-predict-code",
    category: "Applied AI",
    visibility: "Public",
    language: "Repository metadata",
    pushed: "2020-06-28",
    fork: true,
    description: "A forked text-author prediction project based on linguistic feature analysis.",
    url: "https://github.com/dogaygmr/Author-predict-code"
  },
  {
    name: "systeme-of-irrigation",
    category: "Software & Learning",
    visibility: "Public",
    language: "C++",
    pushed: "2021-01-07",
    fork: false,
    description: "A C++ irrigation-system project.",
    url: "https://github.com/dogaygmr/systeme-of-irrigation"
  }
];

const workspaceProjects = [
  {
    name: "Demand & inventory forecasting",
    tags: "Time series · XGBoost · Rules",
    structure: "Data acquisition, preparation and feature modules feed a training script, comparison harness and inference/reporting steps.",
    data: "Longitudinal store–product order records with dates, quantities, product and market context. Open order cycles are treated as censored, not as completed targets.",
    eda: "Notebook analysis and validation reports inspect temporal patterns, feature relationships, residuals, product slices and survey comparisons. WAPE complements scale-sensitive error metrics.",
    features: "Calendar and seasonality signals, recency, rolling order intervals and volumes, order cadence, tenure, promotion ratios, and selected market/location aggregates.",
    model: "XGBoost regression estimates days until the next order; Optuna tunes selected parameters with time-ordered validation. A separate rules layer translates the day estimate into a stock estimate.",
    pipeline: "Ingest and cache transactions → clean and build time-safe features → tune/train → evaluate on later periods and survey slices → score → derive stock with business rules → export results."
  },
  {
    name: "Product & market sales forecasts",
    tags: "Time series · Model selection · ETL",
    structure: "Separate product/market and short/yearly runners coordinate extraction, candidate-model runs, selection, forecast generation, database handoff and reporting.",
    data: "Monthly product- or market-level sales history with units, value, calendar periods and item attributes; each series is forecast independently or by its configured grouping.",
    eda: "Freshness checks, time-based validation windows, model scorecards and error comparisons are built into the run. Broad exploratory analysis is not a separate documented stage.",
    features: "Period aggregation, forecast horizon and item/market grouping; transformations and candidate-specific inputs are prepared inside each model path.",
    model: "Candidate families include statistical and ML time-series models, with optional AutoARIMA runs and hybrid/blended model selection. This is trained forecasting, not a hand-coded decision rule.",
    pipeline: "Check data readiness and run lock → extract and aggregate history → run candidates in isolated chunks → validate and select/blend → refit and forecast → write results and reports."
  },
  {
    name: "Territory & resource planning",
    tags: "Decision support · Rules · Optimization",
    structure: "Layered environment/configuration, imports, preparation, decision logic and a desktop interface; intermediate columnar files and spreadsheet reports connect the stages.",
    data: "Structured activity, sales, product, geography, coverage, capacity and cost observations, reduced to territory/product/specialty summaries.",
    eda: "Quality checks focus on mapping coverage, missingness, source reconciliation, event-window diagnostics and segment-level return/cost comparisons.",
    features: "Carry-over and market-share changes, activity continuity, coverage ratios, capacity, expected return and staffing-cost aggregates.",
    model: "The principal allocation decision is rule-based and scenario-driven; the documented path is not a trained ML predictor.",
    pipeline: "Import snapshots → normalize and prepare → calculate activity effects and coverage → estimate return/capacity/cost → apply decision rules → preview scenarios and export workbooks."
  },
  {
    name: "Healthcare segmentation analytics",
    tags: "Survey analytics · Scoring · Validation",
    structure: "Survey import and validation tools, normalization/mapping helpers, scoring/segmentation logic and workbook/report outputs.",
    data: "Survey-response records joined with categorical attributes and activity summaries; outputs are grouped by segment and reporting dimensions.",
    eda: "Validation scripts check response completeness, question/version alignment, mapping coverage and agreement between survey-derived and aggregate views.",
    features: "Normalized answers, grouped response rates, potential/engagement indicators and weighted segment summaries.",
    model: "The current documented engine uses explicit scoring and business rules. Older clustering experiments exist, but their use in the current production flow is not verified.",
    pipeline: "Import responses and reference extracts → normalize and map questions → validate coverage → compute segment scores → produce validation and result workbooks."
  },
  {
    name: "Customer retention analysis",
    tags: "Churn · Recency · Rule-based",
    structure: "General and product-level descriptive jobs, a runner, and reporting/logging steps.",
    data: "Dated customer–product transaction histories with numeric quantities, summarized by entity and reporting period.",
    eda: "Run-time freshness checks and descriptive counts, recency and period summaries are documented; a separate broad EDA workflow is not.",
    features: "Time since last event, gaps between events, recent activity windows and historical cadence summaries.",
    model: "Churn status is assigned using interval/recency rules and configured thresholds; no trained ML classifier is documented for this workflow.",
    pipeline: "Check reporting window and source freshness → aggregate transaction history → calculate recency/cadence → apply churn rules → export summaries and logs."
  },
  {
    name: "Product performance reporting",
    tags: "Sales analysis · Classical forecasting · Reports",
    structure: "Analysis scripts evaluate forecasts; separate report-generation scripts combine actuals with prepared forecast inputs and format spreadsheet outputs.",
    data: "Daily and monthly product-level unit or value series, with dates and product attributes.",
    eda: "Basic time-series plots, launch/history coverage checks, freshness checks and holdout forecast-error metrics are present; deeper slice analysis varies by report.",
    features: "Daily-to-monthly aggregation, launch-period filtering and partial-period adjustments for presentation.",
    model: "Classical forecasting candidates such as ARIMA-family, Prophet and Holt–Winters are compared with time-based validation. Some report inputs come from separate workbooks, so their upstream generation is not fully established.",
    pipeline: "Load actual series → normalize periods and product history → fit/compare candidate forecasts → combine actuals with supplied forecast outputs → create formatted reports."
  },
  {
    name: "Research briefing automation",
    tags: "LLM research · Curation · Email",
    structure: "Topic-specific prompts and editorial scope notes share a scheduled runner, mail utility, sent-link state and logs.",
    data: "Public articles and announcements represented by source links, publication dates and short summaries.",
    eda: "Statistical EDA is not applicable. Editorial checks verify dates/sources, scope fit and duplicate links before inclusion.",
    features: "Date-window filtering, topic scope, link de-duplication and concise structured summaries.",
    model: "LLM-assisted web research and summarization with deterministic scope and verification checks; no trained predictive model.",
    pipeline: "Trigger schedule → search public sources → filter duplicates and out-of-scope items → verify and summarize → render HTML/plain text → send once → update sent-link history."
  },
  {
    name: "Search & content experiments",
    tags: "API prototype · LLM drafting · Human review",
    structure: "A small API-inspection notebook sits alongside a separate context-gathering, drafting, validation, rendering and approval workflow.",
    data: "The API prototype handles one domain-level response. The drafting flow uses bounded text context and structured draft/source metadata.",
    eda: "The API prototype checks response status and connection failures. Draft checks validate length, source presence and privacy patterns; no dataset-level EDA is documented.",
    features: "Context recency/size limits, output-shape normalization and deterministic content checks; no predictive feature matrix.",
    model: "The drafting path uses an LLM with rule-based checks and human approval. Automatic public posting is not part of the documented flow.",
    pipeline: "Probe API or gather permitted context → draft with an LLM → validate content and metadata → render preview → request human approval."
  },
  {
    name: "SQL data tooling",
    tags: "MCP · Read-only · Query guard",
    structure: "A small MCP server exposes metadata discovery, schema description and guarded query tools, with focused tests and schema documentation.",
    data: "Database metadata plus bounded result sets from caller-provided read-only queries; rows are capped before serialization.",
    eda: "No EDA/model analysis is included. Validation centers on query safety, size hints, row limits, timeouts and serialization behavior.",
    features: "No ML feature engineering; it normalizes query text and result values for safe tool responses.",
    model: "Deterministic SQL validation and metadata access only; no ML or LLM model is implemented in the server.",
    pipeline: "Receive metadata/query request → allow-list the target → validate one read-only statement and scan limits → execute with timeout → cap rows → serialize response."
  }
];

projects.push(...workspaceProjects.map((project) => ({
  ...project,
  category: "Workspace Summary",
  language: project.tags,
  visibility: "Private",
  sourceLabel: "PRIVATE WORKSPACE SUMMARY"
})));

const featured = projects.filter((project) => project.featured);
const categories = ["All", ...new Set(projects.map((project) => project.category))];
const state = { category: "All", query: "", includeForks: true };
const grid = document.querySelector("#project-grid");
const workspaceGrid = document.querySelector("#workspace-grid");
const featuredGrid = document.querySelector("#featured-projects");
const count = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#project-search");
const forkToggle = document.querySelector("#include-forks");
const tabButtons = [...document.querySelectorAll("button[data-tab]")];
const publicPanel = document.querySelector("#public-panel");
const workspacePanel = document.querySelector("#workspace-panel");

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
  const projectLink = project.url
    ? `<a class="project-open" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.name)} on GitHub">↗</a>`
    : "";
  return `<article class="project-card">
    <div class="project-card-top"><span class="project-category">${escapeHtml(project.category)}</span><div class="project-card-status"><span class="visibility-badge ${project.visibility === "Private" ? "is-private" : "is-public"}">${escapeHtml(project.visibility || "Public")}</span><span class="project-badges">${badges.map((badge) => `<span class="project-badge">${badge}</span>`).join("")}</span></div></div>
    <div class="project-title-row"><h3>${escapeHtml(project.name)}</h3>${projectLink}</div>
    <p>${escapeHtml(project.description)}</p>
    <div class="project-card-bottom"><span>${escapeHtml(project.language)}</span><span>${project.visibility === "Private" ? "WORKSPACE SUMMARY" : dateLabel(project.pushed)}</span></div>
  </article>`;
}

function workspaceCard(project) {
  const details = [
    ["Structure", project.structure],
    ["Data shape", project.data],
    ["EDA & validation", project.eda],
    ["Feature engineering", project.features],
    ["Model / rules", project.model],
    ["Pipeline", project.pipeline]
  ];
  return `<article class="workspace-card">
    <header class="workspace-card-header">
      <div><p class="workspace-label">WORKSPACE NOTE</p><h3>${escapeHtml(project.name)}</h3></div>
      <span class="workspace-tags">${escapeHtml(project.tags)}</span>
    </header>
    <dl class="workspace-details">${details.map(([label, value]) =>
      `<div class="workspace-detail"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`
    ).join("")}</dl>
  </article>`;
}

function setActiveTab(name) {
  const workspaceActive = name === "workspace";
  publicPanel.hidden = workspaceActive;
  workspacePanel.hidden = !workspaceActive;
  tabButtons.forEach((button) => {
    const active = button.dataset.tab === name;
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
}

function renderProjects() {
  const visible = projects.filter(matches);
  grid.innerHTML = visible.map(projectCard).join("");
  count.textContent = `${visible.length} / ${projects.length}`;
  emptyState.hidden = visible.length !== 0;
}

featuredGrid.innerHTML = featured.map(featureCard).join("");
workspaceGrid.innerHTML = workspaceProjects.map(workspaceCard).join("");
renderFilters();
renderProjects();

tabButtons.forEach((button) => button.addEventListener("click", () => setActiveTab(button.dataset.tab)));

document.querySelectorAll('nav[aria-label="Main navigation"] a').forEach((link) => {
  link.addEventListener("click", () => setActiveTab("public"));
});

document.querySelector("nav[aria-label=\"Main navigation\"]").addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const currentIndex = tabButtons.findIndex((button) => button.getAttribute("aria-selected") === "true");
  const nextIndex = (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + tabButtons.length) % tabButtons.length;
  tabButtons[nextIndex].focus();
  setActiveTab(tabButtons[nextIndex].dataset.tab);
});

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
