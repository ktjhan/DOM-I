const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerNavigation = document.querySelectorAll("a");

headerNavigation[0].textContent = siteContent["nav"]["nav-item-1"];
headerNavigation[1].textContent = siteContent["nav"]["nav-item-2"];
headerNavigation[2].textContent = siteContent["nav"]["nav-item-3"];
headerNavigation[3].textContent = siteContent["nav"]["nav-item-4"];
headerNavigation[4].textContent = siteContent["nav"]["nav-item-5"];
headerNavigation[5].textContent = siteContent["nav"]["nav-item-6"];

const logoPicture = document.getElementById("logo-img");
logoPicture.src = siteContent["nav"]["img-src"];

const ctaText = document.querySelector("cta-text, h1");
const ctaButton = document.querySelector("cta-text, button");
const headerPic = document.getElementById("cta-img");
ctaText.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];;
headerPic.src = siteContent["cta"]["img-src"];;

const contentHeader = document.querySelectorAll("h4");
const contentParagraph = document.querySelectorAll("top-content, p");
const bottomContent = document.querySelectorAll("bottom-content, p");
contentHeader[0].textContent = siteContent["main-content"]["features-h4"];
contentHeader[1].textContent = siteContent["main-content"]["about-h4"];
contentHeader[2].textContent = siteContent["main-content"]["services-h4"];
contentHeader[3].textContent = siteContent["main-content"]["product-h4"];
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"];
contentHeader[5].textContent = siteContent["contact"]["contact-h4"];

contentParagraph[0].textContent = siteContent["main-content"]["features-content"];
contentParagraph[1].textContent = siteContent["main-content"]["about-content"];
bottomContent[2].textContent = siteContent["main-content"]["services-content"];
bottomContent[3].textContent = siteContent["main-content"]["product-content"];
bottomContent[4].textContent = siteContent["main-content"]["vision-content"];

const middlePicture = document.getElementById("middle-img");
middlePicture.src = "img/mid-page-accent.jpg";

const contactParagraph = document.querySelectorAll(".contact p");

contactParagraph[0].textContent = siteContent["contact"]["address"];
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];

const footerParagraph = document.querySelector("footer");
footerParagraph.textContent = siteContent["footer"]["copyright"];

const good = document.createElement('a');
const bad = document.createElement('a');

good.textContent = "Good Idea";
bad.textContent = "Bad Idea";

const navA = document.querySelector('nav');
navA.prepend(good);
navA.appendChild(bad);

const colorMe = document.querySelectorAll("a").forEach(ele => ele.style.color = "green");
