import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <span className="footer-text">Bryan Garay</span>
      <div className="footer-icons">
        <a href="https://github.com/BryanGaray99" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="footer-icon" />
        </a>
        <a href="https://linkedin.com/in/bg99astro/" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/astronomy_student/?igshid=MjEwN2IyYWYwYw%3D%3D" className="footer-icon-link" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Logo" className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

export { Footer };
