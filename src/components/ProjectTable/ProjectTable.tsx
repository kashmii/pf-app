import { Project } from "@/types/project";
import { formatDate } from "@/utils/format";
import s from "./ProjectTable.module.css";
import Image from "next/image";

export const ProjectTable: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <table className={s.table}>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td className={s.td}>
              <h3>{project.name}</h3>
              <div>{project.description}</div>
              <div className={s.detailLine}>
                <div>{project.technologies.join(", ")}</div>
                <div className={s.containerDateGithub}>
                  <span className={s.projectDate}>
                    {formatDate(project.date)}
                  </span>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    README へ
                    <Image
                      src="/icon_outer_link.svg"
                      alt="outer_link"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
