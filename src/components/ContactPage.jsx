import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact'; // The existing form component
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-page-container">
            <Navbar />
            <div className="contact-page-content">
                <div className="contact-header">
                    <h1>Direct Service Inquiry</h1>
                    <p>For immediate questions or specialized service requests, please use the form below.</p>
                </div>
                {/* Renders your existing contact form */}
                <Contact /> 
            </div>
            <Footer />
        </div>
    );
}

export default ContactPage;