import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span style={{ color: 'var(--accent-light)' }}>&lt;</span>
         Nera Shyoran
          <span style={{ color: 'var(--accent-light)' }}>/&gt;</span>
        </span>
        <p className="footer-copy">
          © {new Date().getFullYear()} Nera. All rights reserved. &nbsp;•&nbsp; Built with React
        </p>
      </div>
    </footer>
  );
}
