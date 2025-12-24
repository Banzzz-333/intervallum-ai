import React from 'react';
import './Testimonials.css';
import { Fade } from "react-awesome-reveal";

function Testimonials() {
    return (
        <div className="testimonials-container">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-cards">
                <Fade duration={1200} delay={200}>
                    <div className="testimonial-card">
                    <p>'The best AI software on the market. It transformed our workflow and saved us countless hours.'</p>
                        <p className="client-name">- Alex M., Tech Solutions Inc.</p>
                    </div>
                </Fade>
                <Fade duration={1200} delay={400}>
                    <div className="testimonial-card">
                        <p>"Incredible support and a product that exceeded all our expectations. A true game-changer."</p>
                        <p className="client-name">- Sarah L., Data Innovations</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Testimonials;