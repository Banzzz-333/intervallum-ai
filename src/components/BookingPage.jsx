import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './BookingPage.css';

function BookingPage() {
    // Note: The external scheduling link is hypothetical; replace "your-company"
    const googleCalendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1mDl6w9vIWsFWRKhEeuOwnUe8yN8nK5_r1wnkesc-eTIHLYhaeHPtAml9CoCgolr0iw7rMl5rq?gv=true";

    return (
        <div className="booking-page-container">
            <Navbar />
            <div className="booking-content">
                <h1>Schedule Your Operational Review</h1>
                <p>Select a time that works best for you to book your 10-minute session with our team.</p>
                
                {/* The iframe tag is crucial for embedding external content */}
                <div className="scheduling-embed-placeholder">
                    <iframe 
                        src={googleCalendarUrl}
                        title="Book Operational Review"
                        width="100%"
                        height="100%" /* Ensures the iframe fills the container */
                        frameBorder="0"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default BookingPage;