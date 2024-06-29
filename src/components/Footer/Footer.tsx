import { githubAccountUrl, twitterUrl } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <ul className={s.social}>
          <li>
            <a href={githubAccountUrl} className="" target="_blank">
              <Image
                src="/github-mark.svg"
                alt="github"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href={twitterUrl} className="" target="_blank">
              <Image
                src="/x-logo-black.svg"
                alt="twitter"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Miki&apos;s Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
