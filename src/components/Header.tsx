import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
