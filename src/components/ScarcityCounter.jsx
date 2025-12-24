import React from 'react';
import './ScarcityCounter.css';
import { Fade } from 'react-awesome-reveal';

function ScarcityCounter() {
    // Define variables for easy modification
    const currentSlots = "2";
    const totalSlots = "3";
    const currentMonth = "November";

    return (
        <Fade direction="up" delay={50} duration={1000} triggerOnce>
            <div className="scarcity-pill">
                <span className="scarcity-label">
                    Limited Onboarding Slots for {currentMonth}: 
                </span>
                
                {/* NEW WRAPPER FOR THE LINE THAT WRAPS AND CENTERS */}
                <span className="scarcity-data-line">
                    <span className="scarcity-data-block">
                        <span className="scarcity-current-count">
                            {currentSlots}
                        </span>
                        <span className="scarcity-separator">
                            &nbsp;of&nbsp;
                        </span>
                        <span className="scarcity-total-count">
                            {totalSlots}
                        </span>
                    </span>
                    
                    <span className="scarcity-status">
                        &nbsp;In Process
                    </span>
                </span>
            </div>
        </Fade>
    );
}

export default ScarcityCounter;