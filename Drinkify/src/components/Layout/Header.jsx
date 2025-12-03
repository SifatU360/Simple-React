import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <svg className="app-logo" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#0ea5a4" opacity="0.12" />
          <path d="M6 12c1.333-2 4-4 6-4s4.667 2 6 4c-1.333 2-4 4-6 4s-4.667-2-6-4z" fill="#089e9d"/>
        </svg>
        <div style={{color: 'black'}}>
          <div className="brand-title">Drinkify</div>
          <div className="brand-sub">Curated beverages</div>
        </div>
        <div className="app-header__actions" aria-hidden="true">
          <button className="action-btn" title="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="#0b1320" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#0b1320" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="action-btn" title="Favorites">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-9-7.5C1.5 10.6 4.2 6 8.5 6c1.9 0 3.2 1.1 3.5 1.6.3-.5 1.6-1.6 3.5-1.6 4.3 0 7 4.6 5.5 7.5-2 3.15-9 7.5-9 7.5z" stroke="#0b1320" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="action-btn" title="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.6 8.3a2 2 0 0 1-2 1.7H9.6a2 2 0 0 1-2-1.6L6 6z" stroke="#0b1320" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
