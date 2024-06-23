import React from "react";
import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>Miki's Portfolio</h1>
      </div>
      <nav className={s.nav}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
