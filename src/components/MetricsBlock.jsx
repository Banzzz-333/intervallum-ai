// Inside MetricsBlock.jsx
import React from 'react';
import './MetricsBlock.css'; 
import { Fade } from "react-awesome-reveal";

function MetricsBlock() {
    return (
        <div className="metrics-container">
            <Fade direction="up" triggerOnce>
                <h2 className="section-headline">Engineered for Operational Excellence.</h2>
            </Fade>

            {/* Metrics Section */}
            <div className="proof-metrics-grid">
                <Fade direction="up" duration={800} cascade damping={0.1} triggerOnce>
                    <div className="metric">
                        <span className="metric-number">78%</span>
                        <p>Reduction in Repetitive Inquiry Volume</p>
                    </div>
                    <div className="metric">
                        <span className="metric-number">99.9%</span>
                        <p>Consistency in Branded Responses</p>
                    </div>
                    <div className="metric">
                        <span className="metric-number">20+</span>
                        <p>Hours/Week of Reclaimed Staff Time</p>
                    </div>
                </Fade>
            </div>

            {/* Before & After Scenario */}
            <div className="scenario-block">
                <Fade direction="up" delay={500} triggerOnce>
                    <h3>High-Stakes Scenario: 3:00 AM Pipe Burst</h3>
                    <div className="scenario-columns">
                        <div className="scenario-column">
                            <h4>Fragmented Service</h4>
                            <p>Staff wastes 30 min searching outdated PDFs, calls wrong plumber, and gives the guest an inconsistent service credit amount. The 1-star review is immediate.</p>
                        </div>
                        <div className="scenario-column solution">
                            <h4>Intervallum.ai (The Guaranteed Consistency)</h4>
                            <p>The AI instantly diagnoses the problem, dispatches the approved local vendor, provides the pre-approved compensation, and logs the incident—all within 60 seconds.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
export default MetricsBlock;