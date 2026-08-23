function Projects() {

    const projects = [
        {
            title: "Personal Portfolio",
            description:
                "A responsive personal portfolio website developed using React and CSS.",
            technology:
                "React, JSX, CSS"
        },
        {
            title: "Employee Directory",
            description:
                "A React-based employee management application with search, filtering and employee management.",
            technology:
                "React, JavaScript, CSS"
        },
        {
            title: "Student Management System",
            description:
                "A student and teacher management system designed to manage students, batches and academic information.",
            technology:
                "HTML, CSS, Java, JDBC, MySQL"
        }
    ];

    return (
        <section id="projects" className="section projects-section">

            <div className="section-title">
                <h2>My Projects</h2>
                <div className="title-line"></div>
            </div>

            <div className="projects-container">

                {projects.map((project) => (
                    <div className="project-card" key={project.title}>

                        <div className="project-icon">
                            💻
                        </div>

                        <h3>{project.title}</h3>

                        <p>
                            {project.description}
                        </p>

                        <span className="technology">
                            {project.technology}
                        </span>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;