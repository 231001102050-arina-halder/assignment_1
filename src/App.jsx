import Header from "./header";
import Navbar from "./navbar";
import About from "./about";
import Education from "./education";
import Skills from "./skill";
import Projects from "./project";
import Contact from "./contact";
import Footer from "./footer";

import "./App.css";

function App() {
    return (
        <div>

            <Header />

            <Navbar />

            <main>

                <section id="home" className="hero">

                    <div className="hero-content">

                        <p className="hero-small">
                            WELCOME TO MY PORTFOLIO
                        </p>

                        <h1>
                            Hi, I'm <span>Arina Halder</span>
                        </h1>

                        <h2>
                            Computer Applications Student
                        </h2>

                        <p>
                            I am passionate about web development,
                            programming and building modern software
                            applications.
                        </p>

                        <div className="hero-buttons">

                            <a
                                href="#about"
                                className="primary-button"
                            >
                                Explore My Portfolio
                            </a>

                            <a
                                href="#contact"
                                className="secondary-button"
                            >
                                Contact Me
                            </a>

                        </div>

                    </div>

                </section>

                <About />

                <Education />

                <Skills />

                <Projects />

                <Contact />

            </main>

            <Footer />

        </div>
    );
}

export default App;