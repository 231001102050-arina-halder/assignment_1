function Contact() {
    return (
        <section id="contact" className="section">

            <div className="section-title">
                <h2>Contact Me</h2>
                <div className="title-line"></div>
            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <h3>Let's Connect</h3>

                    <p>
                        If you would like to contact me, you can use
                        the information provided below.
                    </p>

                    <div className="contact-item">
                        <span>📧</span>
                        <div>
                            <h4>Email</h4>
                            <p>arina2050@technoindiaeducation.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📱</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98745 60213</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>Kolkata, West Bengal, India</p>
                        </div>
                    </div>

                </div>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Your Message"
                    ></textarea>

                    <button type="button">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;