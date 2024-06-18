import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
};

export default Footer;
