function Create_Element_simple_after_root(a){
    var ab =document.createElement(a);       
    var e = document.getElementById('root');
    e.appendChild(ab);
}
function Create_other_Element_simple(tg, isa, a){
    var ab =document.createElement(a);       
    var e = document.getElementsByTagName(tg);
    e[isa].appendChild(ab);
}
function Create_Element_text_after_root(a, b, c, d){
    var ab =document.createElement(a);
    ab.setAttribute(c,d);
    var ac= document.createTextNode(b);
    ab.appendChild(ac);
    var e = document.getElementById('root');
    e.appendChild(ab);
}
function Create_Element_after_root(a,c,d){
    var ab =document.createElement(a);
    ab.setAttribute(c,d);    
    var e = document.getElementById('root');
    e.appendChild(ab);
}
function Create_other_Element_text(id, a, b, c, d){
    var ab =document.createElement(a);
    ab.setAttribute(c, d);
    var ac= document.createTextNode(b);
    ab.appendChild(ac);
    var e = document.getElementById(id);
    e.appendChild(ab);
}
function Create_other_Element(id, a, c, d){
    var ab =document.createElement(a);
    ab.setAttribute(c, d);    
    var a = document.getElementById(id);
    a.appendChild(ab);
}
function Create_other_Element_ByTag(tg, isa, a){
    var ab =document.createElement(a);
    var e = document.getElementsByTagName(tg);
    e[isa].appendChild(ab);
}
function Set_Attribut(id, c, d){
    var e = document.getElementById(id);
    e.setAttribute(c, d);
}
function Set_Attribut_ByTag(tg, isa, c, d){
    var e = document.getElementsByTagName(tg);
    e[isa].setAttribute(c, d);
}
function script(src_name){
    var a = "script";
    var c = "src";
    var d = src_name;
    Create_Element_after_root(a, c, d);     
}

function Jaspy(){
    script('static/src/jaspy/jaspy.js');
}
function Add_Text(id, a){
    var b = document.getElementById(id);
    var c = document.createTextNode(a);
    b.appendChild(c);
}
function Add_Text_ByClass(clas, isa, a){
    var b = document.getElementsByClassName(clas);
    var c = document.createTextNode(a);
    b[isa].appendChild(c);    
}
function Add_Text_ByTag(tg, isa, a){
    var b = document.getElementsByTagName(tg);
    var c = document.createTextNode(a);
    b[isa].appendChild(c);    
}
function Add_ClassByTag(tg, isa, cln){
    var b = document.getElementsByTagName(tg);
    b[isa].setAttribute('class', cln);
}
function Add_ClassById(id, cln){
    var b= document.getElementById(id);
    b.setAttribute('class', cln);
}
function Add_IdByTag(tg, isa, idn){
    var b = document.getElementsByTagName(tg);
    b[isa].setAttribute('id', idn);   
}
function Add_IdByClass(cln, isa, idn){
    var b = document.getElementsByClassName(cln);
    b[isa].setAttribute('id', idn);   
}
function create_landing_page(pageTitle, description, colors = {}) {
    const palette = {
        yellow: colors.yellow || "#f4df00",
        blue: colors.blue || "#2639b8",
        green: colors.green || "#26d53b",
        white: "#ffffff"
    };

    document.title = pageTitle + " | JASPY Web";

    Set_Attribut(
        "root",
        "style",
        `margin:0; min-height:100vh; font-family:Arial,sans-serif;
        background:${palette.yellow}; color:${palette.blue};`
    );

    Create_Element_after_root("main", "id", "jaspy-landing");
    Set_Attribut(
        "jaspy-landing",
        "style",
        "max-width:1000px; margin:auto; padding:70px 24px; text-align:center;"
    );

    Create_other_Element("jaspy-landing", "img", "id", "jaspy-logo");
    Set_Attribut("jaspy-logo", "src", "/static/src/jaspy/jaspy.png");
    Set_Attribut("jaspy-logo", "alt", "JASPY Web logo");
    Set_Attribut(
        "jaspy-logo",
        "style",
        "width:220px; max-width:70%; border-radius:24px; display:block; margin:0 auto 28px;"
    );

    Create_other_Element_text("jaspy-landing", "h1", pageTitle, "id", "landing-title");
    Set_Attribut(
        "landing-title",
        "style",
        `font-size:clamp(2.2rem, 6vw, 4.5rem); margin:0 0 18px; color:${palette.blue};`
    );

    Create_other_Element_text(
        "jaspy-landing",
        "p",
        description,
        "id",
        "landing-description"
    );
    Set_Attribut(
        "landing-description",
        "style",
        "max-width:680px; margin:0 auto; font-size:1.2rem; line-height:1.7;"
    );
}
function create_portfolio(name, projects) {
    if (!Array.isArray(projects)) {
        projects = [];
    }

    document.title = name + " | Portfolio | JASPY Web";

    const oldPortfolio = document.getElementById("portfolio");

    if (oldPortfolio) {
        oldPortfolio.remove();
    }

    Set_Attribut(
        "root",
        "style",
        "margin:0; min-height:100vh; background:#f4df00; font-family:Arial,sans-serif; color:#2639b8;"
    );

    Create_Element_after_root("main", "id", "portfolio");

    Set_Attribut(
        "portfolio",
        "style",
        "max-width:1100px; margin:auto; padding:55px 24px;"
    );

    Create_other_Element("portfolio", "img", "id", "portfolio-logo");
    Set_Attribut("portfolio-logo", "src", "/static/src/jaspy/jaspy.png");
    Set_Attribut("portfolio-logo", "alt", "Logo JASPY Web");
    Set_Attribut(
        "portfolio-logo",
        "style",
        "width:140px; display:block; margin:0 auto 25px; border-radius:22px;"
    );

    Create_other_Element_text("portfolio", "h1", name, "id", "portfolio-name");
    Set_Attribut(
        "portfolio-name",
        "style",
        "margin:0; text-align:center; font-size:clamp(2.2rem, 5vw, 4rem); color:#2639b8;"
    );

    Create_other_Element_text(
        "portfolio",
        "p",
        "Portfolio noforonina tamin'ny JASPY Web",
        "id",
        "portfolio-subtitle"
    );
    Set_Attribut(
        "portfolio-subtitle",
        "style",
        "text-align:center; font-size:1.15rem; margin:14px 0 40px;"
    );

    Create_other_Element("portfolio", "section", "id", "projects-list");
    Set_Attribut(
        "projects-list",
        "style",
        "display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px;"
    );

    projects.forEach(function (project, index) {
        const projectTitle = project.title || "Projet";
        const projectDescription = project.description || "Tsy misy famaritana.";
        const projectUrl = project.url || "#";

        const cardId = "project-card-" + index;
        const titleId = "project-title-" + index;
        const descriptionId = "project-description-" + index;
        const linkId = "project-link-" + index;

        Create_other_Element("projects-list", "article", "id", cardId);
        Set_Attribut(
            cardId,
            "style",
            "background:#2639b8; color:white; padding:25px; border-radius:18px; box-shadow:0 8px 0 #182579;"
        );

        Create_other_Element_text(cardId, "h2", projectTitle, "id", titleId);
        Set_Attribut(
            titleId,
            "style",
            "margin:0 0 14px; color:#26d53b;"
        );

        Create_other_Element_text(
            cardId,
            "p",
            projectDescription,
            "id",
            descriptionId
        );
        Set_Attribut(
            descriptionId,
            "style",
            "line-height:1.6;"
        );

        Create_other_Element_text(
            cardId,
            "a",
            "Jereo ilay projet →",
            "id",
            linkId
        );
        Set_Attribut(linkId, "href", projectUrl);
        Set_Attribut(linkId, "target", "_blank");
        Set_Attribut(
            linkId,
            "style",
            "display:inline-block; margin-top:14px; color:#f4df00; font-weight:bold;"
        );
    });
}
function create_business_website(business_name, services) {
    if (!Array.isArray(services)) {
        services = [];
    }

    const oldSite = document.getElementById("business-site");

    if (oldSite) {
        oldSite.remove();
    }

    document.title = business_name + " | JASPY Web";

    Set_Attribut(
        "root",
        "style",
        "margin:0; min-height:100vh; background:#f4df00; font-family:Arial,sans-serif; color:#2639b8;"
    );

    Create_Element_after_root("main", "id", "business-site");
    Set_Attribut(
        "business-site",
        "style",
        "max-width:1100px; margin:auto; padding:60px 24px;"
    );

    Create_other_Element("business-site", "img", "id", "business-logo");
    Set_Attribut("business-logo", "src", "/static/src/jaspy/jaspy.png");
    Set_Attribut("business-logo", "alt", "JASPY Web");
    Set_Attribut(
        "business-logo",
        "style",
        "width:130px; display:block; margin:0 auto 25px; border-radius:20px;"
    );

    Create_other_Element_text(
        "business-site",
        "h1",
        business_name,
        "id",
        "business-name"
    );
    Set_Attribut(
        "business-name",
        "style",
        "margin:0; text-align:center; font-size:clamp(2.2rem, 5vw, 4rem);"
    );

    Create_other_Element_text(
        "business-site",
        "p",
        "Tongasoa eto amin'ny tranonkalanay.",
        "id",
        "business-intro"
    );
    Set_Attribut(
        "business-intro",
        "style",
        "text-align:center; font-size:1.2rem; margin:15px 0 40px;"
    );

    Create_other_Element("business-site", "section", "id", "services-list");
    Set_Attribut(
        "services-list",
        "style",
        "display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px;"
    );

    services.forEach(function (service, index) {
        const serviceId = "service-" + index;

        Create_other_Element_text(
            "services-list",
            "article",
            service,
            "id",
            serviceId
        );

        Set_Attribut(
            serviceId,
            "style",
            "background:#2639b8; color:white; padding:25px; border-radius:16px; font-size:1.15rem; box-shadow:0 8px 0 #182579;"
        );
    });
}
async function export_website(file_name = "jaspy-website.html") {
    const pageCopy = document.documentElement.cloneNode(true);

    // Esorina ireo scripts satria site static no avoaka.
    pageCopy.querySelectorAll("script").forEach(function (scriptTag) {
        scriptTag.remove();
    });

    // Ovaina ho image tafiditra ao anaty fichier ny sary rehetra.
    const originalImages = Array.from(document.images);
    const copiedImages = Array.from(pageCopy.querySelectorAll("img"));

    for (let index = 0; index < originalImages.length; index++) {
        try {
            const response = await fetch(originalImages[index].src);
            const imageBlob = await response.blob();

            const dataUrl = await new Promise(function (resolve) {
                const reader = new FileReader();

                reader.onloadend = function () {
                    resolve(reader.result);
                };

                reader.readAsDataURL(imageBlob);
            });

            copiedImages[index].src = dataUrl;
        } catch (error) {
            console.warn("Tsy afaka nampiditra ity sary ity:", originalImages[index].src);
        }
    }

    const htmlCode = "<!DOCTYPE html>\n" + pageCopy.outerHTML;
    const htmlBlob = new Blob([htmlCode], { type: "text/html" });
    const downloadUrl = URL.createObjectURL(htmlBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = file_name;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    URL.revokeObjectURL(downloadUrl);
}
function create_navigator(containerId, brandName, links = []) {
    const navId = "jaspy-navbar";
    Create_other_Element(containerId, "nav", "id", navId);
    Set_Attribut(navId, "style", "display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: #2639b8; color: #fff;");

    // Fametrahana ny Logo na Anaran'ny Marina (Brand)
    Create_other_Element_text(navId, "h2", brandName, "id", "nav-brand");
    Set_Attribut("nav-brand", "style", "margin: 0; font-size: 1.5rem; color: #f4df00;");

    // Fametrahana ireo Rohy (Links) ao anaty Navigateur
    const ulId = "nav-links-list";
    Create_other_Element(navId, "ul", "id", ulId);
    Set_Attribut(ulId, "style", "list-style: none; display: flex; gap: 20px; margin: 0; padding: 0;");

    links.forEach((link, index) => {
        const liId = `nav-item-${index}`;
        const aId = `nav-link-${index}`;
        
        Create_other_Element(ulId, "li", "id", liId);
        Create_other_Element_text(liId, "a", link.text, "id", aId);
        Set_Attribut(aId, "href", link.url);
        Set_Attribut(aId, "style", "color: #fff; text-decoration: none; font-weight: bold;");
    });
}
function create_section(parentId, sectionId, titleText, descriptionText) {
    // Mamorona ilay Section lehibe
    Create_other_Element(parentId, "section", "id", sectionId);
    Set_Attribut(sectionId, "style", "padding: 40px 20px; max-width: 900px; margin: auto;");

    // Lohatenin'ny Section
    const titleId = `${sectionId}-title`;
    Create_other_Element_text(sectionId, "h2", titleText, "id", titleId);
    Set_Attribut(titleId, "style", "font-size: 2rem; color: #2639b8; margin-bottom: 15px; border-bottom: 3px solid #26d53b; display: inline-block; padding-bottom: 5px;");

    // Famaritana na votoatin'ny Section
    const descId = `${sectionId}-desc`;
    Create_other_Element_text(sectionId, "p", descriptionText, "id", descId);
    Set_Attribut(descId, "style", "font-size: 1.1rem; line-height: 1.6; color: #333;");
}
/*
 * JASPY-Web Portfolio — static/js/portfolio.js
 * In JASPY.py, render this page with page="portfolio".
 */

function Model_portfolio(
  name,
  role,
  location,
  email,
  avatar,
  social = [],
) {
  const profile = {
    name,
    role,
    location,
    email,
    avatar,
    social: Array.isArray(social) ? social : [],
  };

  const navItems = [
    ["home", "Accueil", "⌂"],
    ["about", "À propos", "◉"],
    ["resume", "Parcours", "▤"],
    ["portfolio", "Portfolio", "▦"],
    ["services", "Services", "▱"],
    ["contact", "Contact", "✉"],
  ];

  const icon = (name) => ({
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.08 1.54 1.08.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.4c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.59 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.3 10.3 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.7 8.4h3v12.1h-3V8.4Zm4.9 0h2.9V10c.4-.8 1.5-1.9 3.3-1.9 3.2 0 3.8 2.1 3.8 4.9v7.5h-3v-6.7c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.8h-3V8.4Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm-.2 2A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4H7.1Zm10.8 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 6.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"/></svg>',
  }[name] || "");

  const app = document.getElementById("root");
  if (!app) return;

  app.innerHTML = `
    <a class="skip-link" href="#main">Aller au contenu</a>
    <button class="mobile-menu" type="button" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
    <aside class="sidebar" aria-label="Navigation principale">
      <div class="identity">
        <img class="avatar" src="${profile.avatar}" alt="Portrait de ${profile.name}">
        <h1>${profile.name}</h1>
        <p>${profile.role}</p>
        <div class="socials">${profile.social.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer" aria-label="${item.label}">${icon(item.icon)}</a>`).join("")}</div>
      </div>
      <nav>${navItems.map(([id, label, glyph], index) => `<a class="nav-link${index === 0 ? " active" : ""}" href="#${id}" data-target="${id}"><span>${glyph}</span>${label}</a>`).join("")}</nav>
      <footer><strong>© ${new Date().getFullYear()} ${profile.name}</strong><br><span>Créé avec JASPY-Web</span></footer>
    </aside>

    <main id="main">
      <section id="home" class="hero section">
        <p class="eyebrow">Bienvenue dans mon univers</p>
        <h2>Je crée des expériences <em>web utiles</em> et élégantes.</h2>
        <p class="lead">Développeur passionné par Python, JavaScript et les interfaces qui transforment une idée en produit clair et performant.</p>
        <div class="actions"><a class="button primary" href="#portfolio">Voir mes projets</a><a class="button secondary" href="#contact">Me contacter</a></div>
      </section>

      <section id="about" class="section split"><div><p class="eyebrow">À propos</p><h2>Construire avec intention.</h2></div><p>Je conçois des applications web accessibles, rapides et faciles à maintenir. Mon approche unit une interface soignée avec une logique serveur robuste, de la première maquette jusqu’au déploiement.</p></section>

      <section id="resume" class="section"><p class="eyebrow">Parcours</p><h2>Compétences essentielles</h2><div class="skills"><article><strong>Frontend</strong><span>JavaScript · HTML5 · CSS3 · Responsive UI</span></article><article><strong>Backend</strong><span>Python · Flask · APIs REST · Architecture web</span></article><article><strong>Qualité</strong><span>Git · Documentation · Performance · Accessibilité</span></article></div></section>

      <section id="portfolio" class="section"><p class="eyebrow">Portfolio</p><h2>Quelques réalisations</h2><div class="projects"><article class="project"><span>01</span><h3>JASPY-Web</h3><p>Fondation web qui relie JavaScript et Flask dans une architecture simple et extensible.</p><a href="https://github.com/andotiana4/JASPY-Web" target="_blank" rel="noreferrer">Voir le projet ↗</a></article><article class="project muted"><span>02</span><h3>Votre prochain projet</h3><p>Ajoutez ici une étude de cas, une image et le lien vers votre dépôt ou démo.</p></article></div></section>

      <section id="services" class="section"><p class="eyebrow">Services</p><h2>De l’idée au produit.</h2><div class="services"><article><h3>Sites web</h3><p>Présence en ligne moderne, responsive et adaptée à votre identité.</p></article><article><h3>Applications Flask</h3><p>Backends Python structurés, routes claires et intégration frontend.</p></article><article><h3>Interfaces UI</h3><p>Tableaux de bord et interfaces pensées pour être simples à utiliser.</p></article></div></section>

      <section id="contact" class="section contact"><p class="eyebrow">Contact</p><h2>Un projet à réaliser ?</h2><p>Écrivez-moi pour discuter de votre idée et définir une solution adaptée.</p><a class="button primary" href="mailto:${profile.email}">Envoyer un e-mail</a></section>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    :root{--ink:#073243;--navy:#042d3d;--blue:#069bd8;--mint:#45be58;--paper:#f7fafb;--muted:#61727a;--line:#dfe9ec}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.65 Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.skip-link{position:absolute;left:-999px}.skip-link:focus{left:1rem;top:1rem;z-index:9;background:#fff;padding:.6rem 1rem}.sidebar{position:fixed;inset:0 auto 0 0;width:300px;display:flex;flex-direction:column;padding:3.2rem 2rem 1.5rem;background:var(--navy);color:#eaf7fb}.identity{text-align:center}.avatar{width:118px;height:118px;object-fit:cover;border-radius:50%;border:7px solid rgba(78,186,86,.32);background:#dcebef}.identity h1{margin:1rem 0 0;font-size:1.55rem;line-height:1.15}.identity p{margin:.3rem 0 1rem;color:#a9c3cb;font-size:.88rem}.socials{display:flex;justify-content:center;gap:.6rem}.socials a{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.08);color:white;transition:.2s}.socials a:hover{background:var(--blue);transform:translateY(-2px)}.socials svg{width:18px;fill:currentColor}nav{display:grid;gap:.45rem;margin-top:2.6rem}.nav-link{display:flex;align-items:center;gap:1rem;padding:.75rem .85rem;border-radius:.6rem;color:#c2d4da;text-decoration:none;font-size:.94rem;transition:.2s}.nav-link span{color:var(--mint);font-size:1.3rem;width:1.25rem;text-align:center}.nav-link:hover,.nav-link.active{background:rgba(255,255,255,.08);color:#fff}.nav-link.active span{color:#20b8f1}footer{margin-top:auto;text-align:center;color:#d4e3e8;font-size:.78rem}footer span{color:#7fa3ae}.mobile-menu{display:none}main{margin-left:300px;min-height:100vh}.section{max-width:1120px;margin:auto;padding:7rem 7vw;border-bottom:1px solid var(--line)}.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 85% 15%,#dff5ff 0,transparent 28%)}.eyebrow{margin:0 0:.75rem;text-transform:uppercase;letter-spacing:.15em;color:#0d91c7;font-size:.72rem;font-weight:800}.section h2{margin:0;color:var(--ink);font-size:clamp(2rem,4.5vw,4.5rem);line-height:1.06;letter-spacing:-.045em}.hero h2{max-width:760px}.hero em{font-style:normal;color:#078fc7}.lead{max-width:640px;color:var(--muted);font-size:1.15rem}.actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.2rem}.button{display:inline-flex;align-items:center;justify-content:center;padding:.78rem 1.15rem;border-radius:.5rem;text-decoration:none;font-weight:750;transition:.2s}.button.primary{background:var(--ink);color:#fff}.button.primary:hover{background:#087eae;transform:translateY(-2px)}.button.secondary{border:1px solid #a9c3cc;color:var(--ink)}.split{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}.split>p{margin:0;color:var(--muted);font-size:1.12rem}.skills,.services,.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2.5rem}.skills article,.services article,.project{padding:1.5rem;border:1px solid var(--line);border-radius:.85rem;background:#fff}.skills strong{display:block;margin-bottom:.45rem;font-size:1.05rem}.skills span,.services p,.project p{color:var(--muted)}.services h3,.project h3{margin:.1rem 0 .45rem}.projects{grid-template-columns:repeat(2,1fr)}.project span{color:#0d91c7;font-weight:800}.project a{color:#007caf;font-weight:750;text-decoration:none}.project.muted{background:#edf5f7;border-style:dashed}.contact{background:var(--ink);color:#e6f5fa}.contact h2{color:white;max-width:640px}.contact p:not(.eyebrow){max-width:550px;color:#c4dde5}.contact .primary{background:#42bb5a}@media(max-width:820px){.sidebar{z-index:5;transform:translateX(-100%);transition:.25s;width:min(300px,82vw)}body.menu-open .sidebar{transform:translateX(0)}.mobile-menu{display:block;position:fixed;z-index:6;right:1rem;top:1rem;border:0;border-radius:.55rem;background:var(--ink);color:white;padding:.55rem .75rem;font-size:1.25rem}main{margin-left:0}.section{padding:5rem 7vw}.hero{min-height:92vh}.split,.skills,.services,.projects{grid-template-columns:1fr}.section h2{font-size:clamp(2rem,10vw,3.2rem)}}`;
  document.head.appendChild(style);

  const menu = document.querySelector(".mobile-menu");
  menu.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      document.body.classList.remove("menu-open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

// ohatra
// Create_Element_after_root('h1', 'id', 'para');

// Add_Text('para', 'Salama Tompoko!');

// Create_Element_after_root('h1', 'class', 'header');

// Add_Text_ByClass('header', 0, 'Inona no vaovao?');

// Create_Element_after_root('p', 'class', 'poule');

// Add_Text_ByTag('p', 0, 'salama tsara fa misaotra');

// Create_Element_text_after_root('Button', 'Envoyer', 'id', 'commun');

// Add_ClassByTag('button', 0, 'valide');

// Add_ClassById('para', "ok activer");

// Add_IdByTag('h1', 1, 'service');

// Add_IdByClass('poule', 0, 'biby');
