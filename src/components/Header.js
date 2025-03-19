import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src="https://raw.githubusercontent.com/basement5k/precious-plastic-map/main/src/assets/logo.png" 
          alt="Precious Plastic Logo" 
          className="logo"
          onError={(e) => e.target.src = 'https://via.placeholder.com/50'} 
        />
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search for a place" />
          <button className="filter-button">
            <span>Filter</span>
          </button>
        </div>
      </div>
      
      <nav className="nav">
        <a href="#library" className="nav-link">Library</a>
        <a href="#map" className="nav-link">Map</a>
        <a href="#academy" className="nav-link">Academy</a>
        <a href="#research" className="nav-link">Research</a>
        <a href="#questions" className="nav-link">Questions</a>
        
        <div className="auth-buttons">
          <button className="auth-button">Login</button>
          <button className="auth-button">Join</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;