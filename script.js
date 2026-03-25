// =============================================
//  SCRIPT.JS — Renders project cards & filters
//  No need to edit this file.
// =============================================

document.getElementById("year").textContent = new Date().getFullYear();

// Populate filter dropdowns from projects.js data
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

// Build a single card element
function buildCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-category", project.category);
  card.setAttribute("data-subject",  project.subject);
  card.setAttribute("data-region",   project.region);

  const imageHtml = project.image
    ? `<img src="${project.image}" alt="${project.title}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : "";

  card.innerHTML = `
    <a href="${project.link || '#'}" class="card-image-wrap" aria-label="${project.title}">
      ${imageHtml}
      <div class="img-placeholder" style="${project.image ? 'display:none' : ''}">G</div>
    </a>
    <div class="card-body">
      <p class="card-category">${project.category}</p>
      <h2 class="card-title">${project.title}</h2>
      <p class="card-subtitle">${project.subtitle}</p>
      <a href="${project.link || '#'}" class="card-link">Lees meer</a>
    </div>
  `;
  return card;
}

// Render all cards initially
const grid = document.getElementById("projectsGrid");
PROJECTS.forEach(p => grid.appendChild(buildCard(p)));

// Filter logic
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

["filterCategory", "filterSubject", "filterRegion"].forEach(id => {
  document.getElementById(id).addEventListener("change", applyFilters);
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
