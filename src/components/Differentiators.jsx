import React from 'react';
import './Differentiators.css';
import { Fade } from "react-awesome-reveal";

function Differentiators() {
    return (
        <div className="differentiators-container">
            {/* The JSX Element that becomes the Angled Stripe (Styled via ::before logic) */}
            <div className="top-angle-stripe"></div> 
            
            <div className="differentiators-content"> 
                <h2>The Second Generation of Property Management AI.</h2>
                <div className="differentiators-grid">
                    
                    {/* The individual cards remain wrapped in Fade */}
                    <Fade direction="up" delay={150} triggerOnce fraction={0.2}>
                        <div className="differentiator">
                            <h3>Bespoke Training</h3>
                            <p>Our AI is trained on your specific property manuals, local guides, and brand voice. It becomes an expert on your unique portfolio, not a generic tool.</p>
                        </div>
                    </Fade>
                    
                    <Fade direction="up" delay={300} triggerOnce fraction={0.2}>
                        <div className="differentiator">
                            <h3>Product-Level Security</h3>
                            <p>We are built with enterprise-grade data security from the ground up, ensuring your sensitive guest and property information is always protected.</p>
                        </div>
                    </Fade>
                    
                    <Fade direction="up" delay={450} triggerOnce fraction={0.2}>
                        <div className="differentiator">
                            <h3>Actionable Insights</h3>
                            <p>Our AI flags patterns in guest questions, giving you the data to proactively improve your properties and operations, securing better reviews and higher occupancy.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Differentiators;