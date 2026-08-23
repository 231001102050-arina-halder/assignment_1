function Skills() {

    const skills = [
        {
            name: "HTML",
            level: "90%"
        },
        {
            name: "CSS",
            level: "85%"
        },
        {
            name: "JavaScript",
            level: "80%"
        },
        {
            name: "React",
            level: "75%"
        },
        {
            name: "Java",
            level: "70%"
        },
        {
            name: "C",
            level: "85%"
        },
        {
            name: "MySQL",
            level: "85%"
        },
        {
            name: "Python",
            level: "75%"
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="section-title">
                <h2>My Skills</h2>
                <div className="title-line"></div>
            </div>

            <div className="skills-container">

                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>

                        <div className="skill-header">
                            <h3>{skill.name}</h3>
                            <span>{skill.level}</span>
                        </div>

                        <div className="skill-bar">
                            <div
                                className="skill-progress"
                                style={{ width: skill.level }}
                            ></div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Skills;