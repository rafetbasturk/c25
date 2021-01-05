const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");

const left = document.querySelector("#left-arrow");
const right = document.querySelector("#right-arrow");

const heroImage = document.querySelector("#hero-image");
const heroImageDesktop = document.querySelector("#hero-image-desktop");
const heroHeading = document.querySelector("#hero-heading");
const heroText = document.querySelector("#hero-text");


let heroList = [
    {
        heading: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.",
        src: "./images/mobile-image-hero-1.jpg",
        srcDesktop: "./images/desktop-image-hero-1.jpg",
        id: 0
    },
    {
        heading: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        src: "./images/mobile-image-hero-2.jpg",
        srcDesktop: "./images/desktop-image-hero-2.jpg",
        id: 1
    },
    {
        heading: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        src: "./images/mobile-image-hero-3.jpg",
        srcDesktop: "./images/desktop-image-hero-3.jpg",
        id: 2
    }
];

let a = 0;

function plus(n) {
    changeSlide(a += n);
}

function changeSlide(n) {
    if (n > heroList.length - 1) {
        a = 0;
    };

    if (n < 0) {
        a = heroList.length - 1;
    }
}

right.addEventListener("click", function () {
    plus(1);
    heroImage.setAttribute("src", heroList[a].src);
    heroImage.setAttribute("alt", `hero-${a+1}`);
    heroImageDesktop.setAttribute("src", heroList[a].srcDesktop);
    heroImageDesktop.setAttribute("alt", `hero-${a+1}`);
    heroHeading.innerText = heroList[a].heading;
    heroText.innerText = heroList[a].text;
});

left.addEventListener("click", function () {
    plus(-1);
    heroImage.setAttribute("src", heroList[a].src);
    heroImage.setAttribute("alt", `hero-${a+1}`);
    heroImageDesktop.setAttribute("src", heroList[a].srcDesktop);
    heroImageDesktop.setAttribute("alt", `hero-${a+1}`);
    heroHeading.innerText = heroList[a].heading;
    heroText.innerText = heroList[a].text;
});

hamburgerIcon.addEventListener("click", function () {
    hamburgerIcon.style.display = "none";
    logo.style.display = "none";
    closeIcon.style.display = "block";
    nav.style.display = "block";
    header.style.background = "white";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
});

closeIcon.addEventListener("click", function () {
    hamburgerIcon.style.display = "block";
    logo.style.display = "block";
    closeIcon.style.display = "none";
    nav.style.display = "none";
    header.style.background = "none";
    header.style.display = "grid";
});