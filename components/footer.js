document.getElementById("footer").innerHTML = `
    <footer class="footer">

        <div class="footer-container">

            <!-- Footer Main Content -->
            <div class="footer-main">

                <!-- Intro -->
                <div class="footer-intro">

                    <p class="footer-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's Connect
                    </h2>

                    <p class="footer-description">
                        I'm always open to discussing new opportunities,
                        projects, collaborations and ideas.
                    </p>

                </div>


                <!-- Contact Details -->
                <div class="footer-contact">

                    <!-- Phone -->
                    <a
                        href="tel:+916374624281"
                        class="footer-contact-item"
                    >
                        <div class="footer-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>

                        <div class="footer-contact-text">
                            <span>Phone</span>
                            <strong>+91 6374624281</strong>
                        </div>
                    </a>


                    <!-- Email -->
                    <a
                        href="mailto:soniyasingaravelu@gmail.com"
                        class="footer-contact-item"
                    >
                        <div class="footer-icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>

                        <div class="footer-contact-text">
                            <span>Email</span>
                            <strong>soniyasingaravelu@gmail.com</strong>
                        </div>
                    </a>


                    <!-- LinkedIn -->
                    <a
                        href="https://www.linkedin.com/in/soniya-singaravelu-57a555417"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="footer-contact-item"
                    >
                        <div class="footer-icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>

                        <div class="footer-contact-text">
                            <span>LinkedIn</span>
                            <strong>Connect with me</strong>
                        </div>
                    </a>


                    <!-- GitHub -->
                    <a
                        href="https://github.com/soniyasingaravelu-svg"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="footer-contact-item"
                    >
                        <div class="footer-icon">
                            <i class="fa-brands fa-github"></i>
                        </div>

                        <div class="footer-contact-text">
                            <span>GitHub</span>
                            <strong>View my projects</strong>
                        </div>
                    </a>

                </div>

            </div>


            <!-- =====================================
                 CONTACT FORM
            ====================================== -->

            <div class="contact-form-section">

                <div class="contact-form-heading">
                    <p class="footer-label">SEND A MESSAGE</p>

                    <h3>
                        Have a question?
                    </h3>

                    <p>
                        Fill out the form below and I'll get back to you soon.
                    </p>
                </div>


                <!-- Contact Form -->
                <form
                    class="contact-form"
                    action="https://formspree.io/f/myegqgog"
                    method="POST"
                >

                    <!-- Name -->
                    <div class="form-group">

                        <label for="name">
                            Your Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <!-- Email -->
                    <div class="form-group">

                        <label for="email">
                            Your Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <!-- Message -->
                    <div class="form-group">

                        <label for="message">
                            Your Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                    </div>


                    <!-- Submit -->
                    <button
                        type="submit"
                        class="contact-submit-btn"
                    >
                        <i class="fa-solid fa-paper-plane"></i>
                        Send Message
                    </button>

                </form>

            </div>


            <!-- Footer Bottom -->
            <div class="footer-bottom">

                <p>
                    © 2026 Soniya S. All Rights Reserved.
                </p>

                <p>
                    Designed & Developed by
                    <span>Soniya S</span>
                </p>

            </div>

        </div>

    </footer>
`;