// =============================================
//  PROJECT-DETAIL.JS
//  Reads ?slug=xxx from the URL and renders
//  the full project detail page.
//  No need to edit this file.
// =============================================

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
document.getElementById("menuToggle").addEventListener("click", () =>
  document.getElementById("mobileMenu").classList.toggle("open")
);

// Read slug from URL: project.html?slug=coppens
const params = new URLSearchParams(window.location.search);
const slug   = params.get("slug");

const project = PROJECTS.find(p => p.slug === slug);
const root    = document.getElementById("detailRoot");

if (!project || !project.detail) {
  // Project not found or no detail content
  root.innerHTML = `
    <div class="detail-notfound">
      <h2>Project niet gevonden</h2>
      <p>Dit project bestaat niet of heeft nog geen detailpagina.</p>
      <a href="index.html">← Terug naar alle projecten</a>
    </div>
  `;
} else {
  const d            = project.detail;
  const companyClass = (COMPANY_CLASS && COMPANY_CLASS[project.company]) || "default";

  // Hero image or placeholder
  const heroHtml = project.image
    ? `<div class="detail-hero">
         <img src="${project.image}" alt="${project.title}"
              onerror="this.parentElement.innerHTML='<div class=\\'detail-hero-placeholder\\'><svg width=\\'48\\' height=\\'48\\' viewBox=\\'0 0 52 52\\'><circle cx=\\'26\\' cy=\\'14\\' r=\\'7\\' fill=\\'#E00113\\' opacity=\\'.5\\'/><circle cx=\\'15\\' cy=\\'33\\' r=\\'7\\' fill=\\'#F5C400\\' opacity=\\'.5\\'/><circle cx=\\'37\\' cy=\\'33\\' r=\\'7\\' fill=\\'#008A3A\\' opacity=\\'.5\\'/></svg><span>Foto volgt</span></div>'">
       </div>`
    : `<div class="detail-hero">
         <div class="detail-hero-placeholder">
           <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
             <circle cx="26" cy="14" r="7" fill="#E00113" opacity=".5"/>
             <circle cx="15" cy="33" r="7" fill="#F5C400" opacity=".5"/>
             <circle cx="37" cy="33" r="7" fill="#008A3A" opacity=".5"/>
           </svg>
           <span>Foto volgt</span>
         </div>
       </div>`;

  // Body paragraphs
  const bodyHtml = (d.body || [])
    .map(p => `<p>${p}</p>`)
    .join("\n");

  // Second quote (optional)
  const quote2Html = d.quote2
    ? `<div class="detail-quote2"><p>"${d.quote2}"</p></div>`
    : "";

  // Key facts
  const factsHtml = (d.facts || [])
    .map(f => `
      <div class="detail-fact">
        <p class="detail-fact-label">${f.label}</p>
        <p class="detail-fact-value">${f.value}</p>
      </div>`)
    .join("\n");

  // Update page title
  document.title = `${project.title} — Centrum voor Verduurzamen`;

  root.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="detail-breadcrumb">
      <a href="index.html">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Alle projecten
      </a>
    </nav>

    ${heroHtml}

    <div class="detail-article">

      <!-- Left: main content -->
      <article class="detail-main">
        <div class="detail-meta">
          <span class="detail-company-label ${companyClass}">${project.company}</span>
          <span class="detail-category-label">${project.category} &mdash; ${project.subject}</span>
        </div>

        <h1 class="detail-title">${project.title}</h1>
        <p class="detail-subtitle">${project.subtitle}</p>

        <blockquote class="detail-quote">
          <p>"${d.quote}"</p>
          ${d.customer ? `<cite>— ${d.customer}</cite>` : ""}
        </blockquote>

        <div class="detail-body">
          ${bodyHtml}
        </div>

        ${quote2Html}
      </article>

      <!-- Right: sidebar -->
      <aside class="detail-sidebar">
        ${d.customer ? `
        <div class="detail-customer-block">
          <h3>Klant aan het woord</h3>
          <p>${d.customer}</p>
        </div>` : ""}

        ${factsHtml ? `
        <div class="detail-facts">
          <h3>Projectdetails</h3>
          ${factsHtml}
        </div>` : ""}

        <div class="detail-cta">
          <p>Interesse in een samenwerking of meer informatie over onze bewerkingen?</p>
          <a href="https://centrumvoorverduurzamen.nl/contact/" target="_blank">Neem contact op</a>
        </div>
      </aside>

    </div>

    <!-- Back link -->
    <div class="detail-back-bottom">
      <a href="index.html">← Terug naar alle projecten</a>
    </div>
  `;
}
