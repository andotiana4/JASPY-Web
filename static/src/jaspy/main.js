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