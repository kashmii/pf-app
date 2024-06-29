import React from "react";
import Layout from "../components/Layout";
import { Profile } from "../components/Profile/Profile";
import { ProjectTable } from "@/components/ProjectTable/ProjectTable";
import { projects } from "@/data/projects";
import Link from "next/link";

const Home: React.FC = () => {
  const showingProjects = projects.slice(0, 2);
  return (
    <Layout>
      <section>
        <h2>Projects</h2>
        <div className="tableContainer">
          <ProjectTable projects={showingProjects} />
          <div className="buttonContainer">
            <Link href="/" className="projectButton">
              もっと見る
            </Link>
          </div>
        </div>
        <Profile />
      </section>
    </Layout>
  );
};

export default Home;
