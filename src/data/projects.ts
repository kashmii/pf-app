import { Project } from "@/types/project";
import { githubAccountUrl } from "@/utils/constants";

export const projects: Project[] = [
  {
    name: "pf-app",
    description: "このポートフォリオサイト",
    technologies: ["TypeScript", "Next.js", "AWS EC2", "NGINX"],
    githubLink: `${githubAccountUrl}/pf-app`,
    date: new Date("2024-06-30"),
  },
  {
    name: "Online Chat Messenger",
    description: "UDP ネットワークソケットを使ったチャットアプリ",
    technologies: ["Go"],
    githubLink: `${githubAccountUrl}/recursion_online_chat_messenger`,
    date: new Date("2024-05-28"),
  },
  {
    name: "golang_postcode_api",
    description: "郵便番号データを取得するAPIとそのデモアプリ",
    technologies: ["Go", "JavaScript", "HTML"],
    githubLink: `${githubAccountUrl}/golang_postcode_api`,
    date: new Date("2024-04-22"),
  },
  {
    name: "football_highlights",
    description: "サッカーのハイライトを自動取得するシステム(開発中止)",
    technologies: ["Ruby", "JavaScript", "Docker"],
    githubLink: `${githubAccountUrl}/football_highlights`,
    date: new Date("2024-06-14"),
  },
  // 他のプロジェクトも追加
];
