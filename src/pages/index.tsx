import React from "react";
import Layout from "../components/Layout";
import { Profile } from "../components/Profile/Profile";
import { projects } from "@/data/projects";
import { ProjectTable } from "@/components/ProjectTable/ProjectTable";

const Home: React.FC = () => {
  return (
    <Layout>
      <section>
        <h2>Projects</h2>
        <div className="tableContainer">
          <ProjectTable projects={projects} />
          <div className="buttonContainer">
            <button className="projectButton">もっと見る</button>
          </div>
        </div>
        <Profile />
      </section>
    </Layout>
  );
};

export default Home;
