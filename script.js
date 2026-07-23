/*=========================================================
    SMOOTH NAVIGATION
=========================================================*/

const navLinks = document.querySelectorAll(".navlinks a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const target = link.getAttribute("href");

        if (target && target.startsWith("#")) {
            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


/*=========================================================
    ACTIVE NAV LINK
=========================================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            document
                .querySelector(`.navlinks a[href="#${sectionId}"]`)
                ?.classList.add("active");
        } else {
            document
                .querySelector(`.navlinks a[href="#${sectionId}"]`)
                ?.classList.remove("active");
        }
    });
});


/*=========================================================
    NAV BACKGROUND ON SCROLL
=========================================================*/

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(10,9,6,0.95)";
    } else {
        nav.style.background = "rgba(10,9,6,0.86)";
    }
});