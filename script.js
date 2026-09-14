// ===============================
// SECTION REVEAL ANIMATIONS
// ===============================

const sections = document.querySelectorAll("section:not(.home-hero)");

if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
}


// ===============================
// NAVBAR
// ===============================

const header = document.querySelector("header");

const updateNavbarState = () => {
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 50);
};

window.addEventListener("scroll", updateNavbarState);
window.addEventListener("load", updateNavbarState);


const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}