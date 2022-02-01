// NAVBAR
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// LOADING
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }, 1500);
}

// TYPED JS
var typed = new Typed(".typing-text", {
    strings: ["WEB DESIGNER", "DEVELOPER", "FREELANCER"],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    showCursor: false,
    loop: true
});

// ANIMATION
AOS.init();