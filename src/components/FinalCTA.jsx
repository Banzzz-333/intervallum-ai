import React from 'react';
import './FinalCTA.css';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import Button from './Button';

function FinalCTA() {
    return (
        <div className="final-cta-container">
            <Fade direction="up" triggerOnce>
                <h2>READY TO SCALE PROFITABLY?</h2>
                <p>Take the first step toward effortless growth and profound peace of mind. Book your 10-minute operational diagnosis and see how Intervallum.ai can transform your business.</p>
              <Link to="/book" className="cta-button">BOOK A PRIVATE 10-MINUTE OPERATIONAL REVIEW</Link>
            </Fade>
        </div>
    );
}

export default FinalCTA;