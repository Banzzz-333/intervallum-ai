import React from 'react';
import './PainAndPromise.css';
import { Fade } from "react-awesome-reveal";

function PainAndPromise() {
    return (
        <div className="pain-promise-container">
            <Fade direction="right" duration={750} triggerOnce>
                <div className="pain">
                    <h2>The Problem</h2>
                    <p>Your team is stretched across time zones. Guest answers are inconsistent. Critical details get missed. One bad interaction leads to a 1-star review and a lost owner contract.</p>
                </div>
            </Fade>
            <Fade direction="left" duration={750} delay={300} triggerOnce>
                <div className="promise">
                    <h2>The Promise</h2>
                    <p>InterVallum Ai ensures every guest, in every property, receives the same instant, accurate, and on-brand response, 24/7. We turn inconsistent communication into a consistent 5-star experience.</p>
                </div>
            </Fade>
        </div>
    );
}

export default PainAndPromise;