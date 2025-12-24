import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Button from './Button';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* --- TOP ROW / LINKS WRAPPER --- */}
                <div className="footer-links-wrapper"> 
                    <div className="footer-section">
                        <h4>Integrations</h4>
                        <ul className="integrations-list">
                            <li>Hostfully</li>
                            <li>Guesty</li>
                            <li>Hostaway</li>
                            <li>Lodgify</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li> 
                        </ul>
                    </div>
                </div>
                {/* --- END TOP ROW / LINKS WRAPPER --- */}

                {/* --- BOTTOM ROW / MISSION AND CTA (Center-Aligned) --- */}
                {/* This section spans the full width below the links on desktop */}
                <div className="footer-mission-cta"> 
                    <div className="mission-content">
                        <h4>Our Mission</h4>
                        <p className="mission-statement">Intervallum.ai: The indispensable AI partner for visionary property managers.</p>
                    </div>
                    
                    <div className="footer-blog-cta">
                        <Button to="/blog" className="blog-cta">Visit Our Blog</Button>
                    </div>
                </div>
                {/* --- END BOTTOM ROW --- */}
            </div>

            <div className="copyright">
                <p>&copy; 2025 Intervallum.ai. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;