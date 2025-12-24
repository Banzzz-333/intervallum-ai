import React from 'react';
import Navbar from './Navbar';
import './About.css';
import Footer from './Footer';
import { Fade } from "react-awesome-reveal";

function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <Fade direction="up" cascade damping={0.2} triggerOnce>
                    <h1>About Us</h1>
                    <p>Intervallum.ai is the indispensable AI partner for visionary property managers. Our mission is to eliminate operational chaos and provide a single source of truth for your entire portfolio, ensuring consistent, 5-star guest experiences. We are a team of experts dedicated to building enterprise-grade AI solutions that empower businesses to scale profitably and with profound peace of mind.</p>
                    <Footer />
                </Fade>
            </div>
        </>
    );
}

export default About;