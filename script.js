// =============================================
//  SCRIPT.JS — Renders cards & filters
//  No need to edit this file.
// =============================================

document.getElementById("year").textContent = new Date().getFullYear();

function populateSelect(id, options) {
  const sel = document.getElementById(id);
  options.forEach(opt => {
    const el = document.createElement("option");
    el.value = opt;
    el.textContent = opt;
    sel.appendChild(el);
  });
}
populateSelect("filterCategory", CATEGORIES);
populateSelect("filterSubject",  SUBJECTS);
populateSelect("filterRegion",   REGIONS);

function buildCard(project) {
  const companyClass = (COMPANY_CLASS && COMPANY_CLASS[project.company]) || "default";
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.category = project.category;
  card.dataset.subject  = project.subject;
  card.dataset.region   = project.region;

  // Build the correct href: if project has a detail page use project.html?slug=xxx
  const href = (project.link && project.link !== "#")
    ? `${project.link}?slug=${project.slug}`
    : "#";

  const imgTag = project.image
    ? `<img src="${project.image}" alt="${project.title}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : "";

  card.innerHTML = `
    <a href="${href}" class="card-image-wrap" aria-label="${project.title}">
      ${imgTag}
      <div class="img-placeholder" style="${project.image ? 'display:none' : ''}">
        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="14" r="7" fill="#E00113" opacity=".5"/>
          <circle cx="15" cy="33" r="7" fill="#F5C400" opacity=".5"/>
          <circle cx="37" cy="33" r="7" fill="#008A3A" opacity=".5"/>
        </svg>
        <span>Foto volgt</span>
      </div>
    </a>
    <div class="card-body">
      ${project.company ? `<p class="card-company ${companyClass}">${project.company}</p>` : ""}
      <p class="card-category">${project.category}</p>
      <h2 class="card-title">${project.title}</h2>
      <p class="card-subtitle">${project.subtitle}</p>
      <a href="${href}" class="card-link">${href === "#" ? "Binnenkort meer" : "Lees meer"}</a>
    </div>
  `;
  return card;
}

const grid = document.getElementById("projectsGrid");
PROJECTS.forEach(p => grid.appendChild(buildCard(p)));

function applyFilters() {
  const cat = document.getElementById("filterCategory").value;
  const sub = document.getElementById("filterSubject").value;
  const reg = document.getElementById("filterRegion").value;
  let visible = 0;
  document.querySelectorAll(".project-card").forEach(card => {
    const match =
      (!cat || card.dataset.category === cat) &&
      (!sub || card.dataset.subject  === sub) &&
      (!reg || card.dataset.region   === reg);
    card.style.display = match ? "" : "none";
    if (match) visible++;
  });
  document.getElementById("noResults").style.display = visible === 0 ? "block" : "none";
}

["filterCategory","filterSubject","filterRegion"].forEach(id =>
  document.getElementById(id).addEventListener("change", applyFilters)
);

document.getElementById("menuToggle").addEventListener("click", () =>
  document.getElementById("mobileMenu").classList.toggle("open")
);
