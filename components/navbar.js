document.getElementById("navbar").innerHTML = `
    <nav class="navbar">

        <div class="nav-container">

            <!-- Logo -->
            <a href="#home" class="logo">
                Soniya<span>S</span>
            </a>


            <!-- Mobile Menu Button -->
            <button
                class="menu-toggle"
                id="menuToggle"
                aria-label="Toggle navigation"
            >
                <i class="fa-solid fa-bars"></i>
            </button>


            <!-- Navigation Links -->
            <ul class="nav-links" id="navLinks">

                <li>
                    <a href="#home">
                        <i class="fa-solid fa-house"></i>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about">
                        <i class="fa-solid fa-user"></i>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills">
                        <i class="fa-solid fa-code"></i>
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#internships">
                        <i class="fa-solid fa-briefcase"></i>
                        Internships
                    </a>
                </li>

                <li>
                    <a href="#projects">
                        <i class="fa-solid fa-folder-open"></i>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#footer">
                        <i class="fa-solid fa-envelope"></i>
                        Contact
                    </a>
                </li>

                <li>
                    <a
                        href="assets/Soniya_S_Resume.pdf"
                        class="resume-btn"
                        target="_blank"
                        download
                    >
                        <i class="fa-solid fa-file-arrow-down"></i>
                        Resume
                    </a>
                    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
                    🌙
                    </button>
                </li>

            </ul>

        </div>

    </nav>
`;


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});