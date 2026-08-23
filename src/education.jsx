function Education() {
    return (
        <section id="education" className="section education-section">
            <div className="section-title">
                <h2>Education</h2>
                <div className="title-line"></div>
            </div>

            <div className="education-container">

                <div className="education-card">
                    <div className="education-icon">
                        🎓
                    </div>

                    <div>
                        <h3>Bachelor of Computer Applications</h3>

                        <h4>Techno India University, West Bengal</h4>

                        <p className="education-year">
                            2023 - 2027
                        </p>

                        <p>
                            Currently pursuing Bachelor of Computer
                            Applications with a focus on computer science,
                            programming, database management and software
                            development.
                        </p>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-icon">
                        📚
                    </div>

                    <div>
                        <h3>Higher Secondary Education</h3>

                        <h4>Higher Secondary School</h4>

                        <p className="education-year">
                            Completed
                        </p>

                        <p>
                            Completed higher secondary education with
                            Computer Science and related subjects.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;