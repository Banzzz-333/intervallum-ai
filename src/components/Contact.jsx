import React, { useState } from 'react';
import './Contact.css';
import { Fade } from "react-awesome-reveal";

function Contact({ duration = 1500, delay = 300 }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the page from reloading
        setIsSubmitted(true);
    };
    
    return (
        <Fade duration={duration} delay={delay}>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>Ready to revolutionize your business? Let's talk.</p>
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}>
                    <input type="text" name="honeypot" style={{ display: 'none' }} />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                    {/* Honeypot field for anti-spam */}
                    <input
                        type="text"
                        name="honeypot"
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <button type="submit">
                        {isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </button>
                </form>
            </div>
        </Fade>
    );
}

export default Contact;