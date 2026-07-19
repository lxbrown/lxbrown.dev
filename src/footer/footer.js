import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-chips">
        <a href="https://www.linkedin.com/in/alexander-brown-3b74a8126/" target="_blank" rel="noopener noreferrer" className="chip">
          LinkedIn
        </a>
        <a href="https://github.com/lxbrown" target="_blank" rel="noopener noreferrer" className="chip">
          GitHub
        </a>
      </div>
    </footer>
  );
}