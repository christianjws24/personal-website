import React, { useState, useEffect } from "react";
import '../styles/Header.css';

export default function Header() {
  const items = ['About', 'Experience', 'Projects', 'Technologies', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="nav-container">
      <a href="#home" className="logo">CHRISDEV</a>

      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-ul ${isOpen ? "show" : ""}`}>
        {items.map((item, index) => (
          <li key={index} className="nav-li">
            <a 
              href={`#${item.toLowerCase()}`} 
              className="nav-a" 
              onClick={closeMenu}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}