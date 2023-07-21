import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/pdangerfield" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/philip-dangerfield-142108260/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

