import React from 'react';
import './Features.css';
import { Fade } from "react-awesome-reveal";

const featuresData = [
    {
        icon: "🤖",
        title: "Intelligent Automation",
        description: "Streamline workflows and boost productivity with our smart automation tools."
    },
    {
        icon: "🧠",
        title: "Predictive Analytics",
        description: "Leverage the power of AI to forecast trends and make smarter business decisions."
    }
];

function Features() {
    return (
        <Fade duration={1500} delay={300}>
            <div className="features-container">
                <h2>Our Cutting-Edge Features</h2>
                <div className="feature-cards">
                    {featuresData.map((feature, idx) => (
                        <div className="feature-card" key={idx}>
                            <h3>{feature.icon} {feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default Features;