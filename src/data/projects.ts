import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    name: "Online Chat Messenger",
    description: "UDP ネットワークソケットを使ったチャットアプリ",
    technologies: ["Go"],
    githubLink: "https://github.com/kashmii/recursion_online_chat_messenger",
    date: new Date("2024-05-28")
  },
  {
    name: "golang_postcode_api",
    description: "郵便番号データを取得するAPIとそのデモアプリ",
    technologies: ["Go", "javascript", "HTML"],
    githubLink: "https://github.com/kashmii/golang_postcode_api",
    date: new Date("2024-04-22")
  },
  {
    name: "football_highlights",
    description: "サッカーのハイライトを取得するAPIとそのデモアプリ(未完成)",
    technologies: ["Ruby", "javascript", "Docker"],
    githubLink: "https://github.com/kashmii/football_highlights",
    date: new Date("2024-06-14")
  }
  // 他のプロジェクトも追加
  ];