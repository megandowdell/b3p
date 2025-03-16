/* BIG THREE PERFORMANCE - INTERACTIVE MAIN.JS */

// === NAVBAR ACTIVE HIGHLIGHT ON PAGE LOAD ===
document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// === FAQ TOGGLE FUNCTIONALITY ===
function toggleFAQ(id) {
    const answer = document.getElementById(id);
    answer.classList.toggle("hidden");
}

/* === FAQ EXPAND FUNCTION FIX === */
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function() {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            this.querySelector("span").textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            this.querySelector("span").textContent = "−";
        }
    });
});

// === GALLERY FILTERING ===
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        document.querySelectorAll(".gallery-item").forEach(item => {
            item.style.display = (filter === "all" || item.classList.contains(filter)) ? "block" : "none";
        });
    });
});

// === PROJECT IMAGE CAROUSEL ===
let currentIndex = 0;
let images = document.querySelectorAll(".projects-carousel .project-item");

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector(".projects-carousel");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// === REVEAL EASTER EGG ===
function revealEasterEgg() {
    alert("You found the hidden easter egg! Big Three Performance is built with passion and precision!");
}

// === SMOOTH SCROLLING FOR NAV LINKS ===
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// === BACK TO TOP BUTTON ===
const backToTop = document.createElement("div");
backToTop.innerHTML = "⬆";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
