import { Project } from "@/types/project";
import { formatDate } from "@/utils/format";
import s from "./ProjectTable.module.css";

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
                <span>{project.technologies.join(", ")}</span>
                <span>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Githubリンク
                  </a>
                  <span className={s.projectDate}>
                    {formatDate(project.date)}
                  </span>
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
