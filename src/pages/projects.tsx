import React from "react";
import Layout from "../components/Layout";
import { projects } from "@/data/projects";
import { ProjectTable } from "@/components/ProjectTable/ProjectTable";

const Projects: React.FC = () => {
  return (
    <Layout>
      <section>
        <h2>Projects</h2>
        <div className="tableContainer">
          <ProjectTable projects={projects} />
          <div className="buttonContainer"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
