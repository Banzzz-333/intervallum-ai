import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
    return (
        <div className="blog-page-container">
            <Navbar />
            
            <div className="blog-header">
                <Fade direction="up" triggerOnce>
                    <h1>Thought Leadership</h1>
                    <p>Insights and analysis on AI automation, property management efficiency, and luxury guest experience.</p>
                </Fade>
            </div>

        <div className="blog-list">
                {/* --- FIX 1: Use the CAPITALIZED <Link> component and add 'to' attribute --- */}
                <Link to="/blog/article-1" className="blog-card">
                    <h3>The End of Operational Chaos: How Intervallum Solves Inconsistency.</h3>
                    <p className="blog-date">October 1, 2025</p>
                    <p>A deep dive into how centralizing guest communication leads directly to 5-star reviews and higher owner retention rates.</p>
                    <span className="read-more">Read Article →</span>
                </Link>

                {/* --- FIX 2: Use the CAPITALIZED <Link> component and add 'to' attribute --- */}
                <Link to="/blog/article-2" className="blog-card">
                    <h3>Metrics That Matter: Moving Beyond Response Rate.</h3>
                    <p className="blog-date">September 15, 2025</p>
                    <p>We analyze the three key data points every Portfolio Manager must track to guarantee profitable scaling.</p>
                    <span className="read-more">Read Article →</span>
                </Link>
            </div>

            <Footer />
        </div>
    );
}

export default Blog;