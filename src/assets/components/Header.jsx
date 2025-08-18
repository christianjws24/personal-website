import React, { useState } from "react";
import '../styles/Header.css';

export default function Header() {
  const items = ['Home', 'About', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-container">
      <a href="#" className="logo">CHRISDEV</a>


      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-ul ${isOpen ? "show" : ""}`}>
        {items.map((item, index) => (
          <li key={index} className="nav-li">
            <a href={`#${item.toLowerCase()}`} className="nav-a" onClick={closeMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
