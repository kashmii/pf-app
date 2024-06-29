import React from "react";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    // TODO: add link of github n twitter
    <footer className={s.footer}>
      <div className={s.content}>
        <ul className={s.social}>
          <li>
            <a
              href="https://www.github.com/kashmii"
              className="lsf facebook"
              target="_blank"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://x.com/miki_do_"
              className="lsf github"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Miki&apos;s Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
