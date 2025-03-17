document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Hamburger menu or nav links not found!");
        return; // Stops execution if elements are missing
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    console.log("Hamburger menu script loaded successfully.");
});