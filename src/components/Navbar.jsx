import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleRef = useRef(null);

    const closeMenu = () => setIsOpen(false);

    // Close on outside click and on scroll
    useEffect(() => {
        function handleDocClick(e) {
            if (!isOpen) return;
            const dd = dropdownRef.current;
            const toggle = toggleRef.current;
            if (dd && !dd.contains(e.target) && toggle && !toggle.contains(e.target)) {
                closeMenu();
            }
        }

        function handleScroll() {
            if (isOpen) closeMenu();
        }

        function handleKey(e) {
            if (e.key === 'Escape' && isOpen) closeMenu();
        }

        document.addEventListener('mousedown', handleDocClick);
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('mousedown', handleDocClick);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('keydown', handleKey);
        };
    }, [isOpen]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    {/* Hamburger */}
                    <div className="menu-toggle" ref={toggleRef} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Logo (centered) */}
                    <div className="navbar-header">
                        <div className="navbar-logo">
                            <Link to="/">InterVallum Ai</Link>
                        </div>
                    </div>

                    {/* Desktop left links */}
                    <ul className="navbar-links navbar-links-left">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>

                    {/* Desktop right links */}
                    <ul className="navbar-links navbar-links-right">
                        <li><Link to="/book" className="navbar-cta-button">Book Review</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div className={`navbar-dropdown ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
                <div className="navbar-dropdown-inner">
                    <ul className="navbar-dropdown-items">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/book" className="navbar-cta-button" onClick={closeMenu}>Book Review</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;