import React from "react";
import Link from "next/link";
import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>Miki&apos;s Portfolio</h1>
      </div>
      <nav className={s.nav}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;
