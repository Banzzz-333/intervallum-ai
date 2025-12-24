import React from 'react';
import './Hero.css';
import ScarcityCounter from './ScarcityCounter';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <Fade duration={1000} delay={500} triggerOnce>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>The Future Of Property Management Ai</h1>
                    <p>Intelligent Automation for Smarter Property Management</p>
                    <ScarcityCounter />
                    <Link to="/book" className="cta-button">BOOK A PRIVATE 10-MINUTE OPERATIONAL REVIEW</Link>
                </div>
            </div> 
        </Fade>
    );
}

export default Hero;