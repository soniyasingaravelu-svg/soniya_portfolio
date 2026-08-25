document.getElementById("home").innerHTML = `
    <section class="home-section">

        <div class="home-container">

            <div class="home-content">

                <p class="hello">
                    HELLO, I'M
                </p>

                <h1>
                    Soniya <span>S</span>
                </h1>

                <h2>
                    Web Developer
                </h2>

                <p class="home-description">
                    I am a passionate Web Developer specializing in frontend 
                    development and UI/UX design. I enjoy transforming ideas 
                    into modern, responsive and visually appealing websites 
                    that provide a smooth and user-friendly experience.

                </p>


                <!-- Main Buttons -->

                <div class="home-buttons">

                    <a
                        href="#projects"
                        class="primary-btn"
                    >
                        View Projects
                    </a>

                    <a
    href="./assets/Soniya_S_Resume.pdf"
    class="secondary-btn"
    target="_blank"
    download
>
    <i class="fa-solid fa-file-arrow-down"></i>
    Download Resume
</a>

                </div>


                <!-- Social Links -->

                <div class="home-social">

    <a
        href="https://www.linkedin.com/in/soniya-singaravelu-57a555417"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <i class="fa-brands fa-linkedin-in"></i>
    </a>

    <a
        href="https://github.com/soniyasingaravelu-svg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <i class="fa-brands fa-github"></i>
    </a>

</div>

            </div>


            <!-- Developer Decoration -->

            <div class="home-decoration">

                <div class="code-box">

                    <span>&lt;</span>
                    <span>/</span>
                    <span>&gt;</span>

                </div>

            </div>

        </div>

    </section>
`;