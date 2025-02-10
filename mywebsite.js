document.addEventListener("DOMContentLoaded", (event) => {
    // Color Mode
    const colorModeSaved = localStorage.getItem("colorMode");
    const colorModeButton = document.getElementById("colorModeButton");

    if (colorModeSaved === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        colorModeButton.children[0].classList.remove("bi-moon-fill");
        colorModeButton.children[0].classList.add("bi-sun-fill");
    } else if (colorModeSaved === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        colorModeButton.children[0].classList.remove("bi-sun-fill");
        colorModeButton.children[0].classList.add("bi-moon-fill");
    }

    colorModeButton.addEventListener("click", (event) => {
        let classes = event.target.classList;
        if (classes.contains("modeButton")) {
            classes = event.target.children[0].classList;
        }
        if (classes.contains("bi-moon-fill")) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("colorMode", "dark");
            classes.remove("bi-moon-fill");
            classes.add("bi-sun-fill");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("colorMode", "light");
            classes.remove("bi-sun-fill");
            classes.add("bi-moon-fill");
        }
    });

    // Hamburger Menu
    const menuListButton = document.getElementById("menuListButton");
    const hamburgerMenu = document.querySelector(".hamburgerMenu");

    menuListButton.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("visible");
    });

    document.addEventListener("click", (event) => {
        if (!menuListButton.contains(event.target)) {
            hamburgerMenu.classList.remove("visible");
        }
    });
});
