document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    function scrollLeft() {
        document.getElementById("scroll-gallery").scrollBy({ left: -300, behavior: "smooth" });
    }
    
    function scrollRight() {
        document.getElementById("scroll-gallery").scrollBy({ left: 300, behavior: "smooth" });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
    
            const filter = button.getAttribute('data-filter');
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("hidden");
            this.classList.toggle("active");
        });
    });

    document.addEventListener("click", function (event) {
        const dropdowns = document.querySelectorAll(".faq-answer");
        dropdowns.forEach((dropdown) => {
            if (!dropdown.parentElement.contains(event.target)) {
                dropdown.classList.add("hidden");
            }
        });
    });


});