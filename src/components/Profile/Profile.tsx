import { Project } from "@/types/project";
import { formatDate } from "@/utils/format";
import { GITHUB_URL, TWITTER_URL } from "@/utils/constants";
import Image from "next/image";
import s from "./Profile.module.css";

export const Profile: React.FC = () => {
  return (
    <div className={s.outerContainer}>
      <h2>Profile</h2>
      <div className={s.profile}>
        <div className={s.profileImage}>
          <Image src="/miki_icon.png" alt="profile" width={200} height={200} />
        </div>

        <div className={s.profileContent}>
          <h3>miki</h3>
          <div className={s.detail}>
            <div>
              <p>未経験・独学でSES企業に転職 3年目</p>
              <p>転職を機に上京 関西弁が抜けません</p>
              <p></p>
            </div>
            <div className={s.language}>
              <p>経験言語: Ruby, React, TypeScript, Go</p>
            </div>
            <div className={s.snsIcons}>
              <a href={GITHUB_URL} className={s.icon}>
                <Image
                  src="/github-mark.svg"
                  alt="github"
                  width={30}
                  height={30}
                />
              </a>
              <a href={TWITTER_URL} className={s.icon}>
                <Image
                  src="/x-logo-black.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
