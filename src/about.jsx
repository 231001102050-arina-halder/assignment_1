function About() {
    return (
        <section id="about" className="section">
            <div className="section-title">
                <h2>About Me</h2>
                <div className="title-line"></div>
            </div>

            <div className="about-container">
                <div className="about-card">
                    <div className="profile-icon">
                        AH
                    </div>

                    <h3>Computer Applications Student</h3>

                    <p>
                        Hello! I am Arina Halder, a Computer Applications
                        student interested in web development, software
                        development and modern technologies.
                    </p>

                    <p>
                        I enjoy learning programming languages and building
                        useful applications using technologies such as
                        HTML, CSS, JavaScript, React and Java.
                    </p>

                    <p>
                        My goal is to continuously improve my technical
                        skills and build creative and user-friendly
                        software applications.
                    </p>
                </div>

                <div className="about-info">
                    <div className="info-box">
                        <h3>🎓 Education</h3>
                        <p>Bachelor of Computer Applications</p>
                    </div>

                    <div className="info-box">
                        <h3>💻 Interest</h3>
                        <p>Web Development & Software Development</p>
                    </div>

                    <div className="info-box">
                        <h3>🚀 Goal</h3>
                        <p>Become a skilled software professional</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;