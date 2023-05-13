import React from "react";
import "../CSS/projects.css";
import ProjectsArray from "../Utils/ProjectsArray";

const Profile = () => {
  return (
    <section className="section-project">
      <h1 className="section-profile-header"> Some Projects...</h1>
      <ProjectsArray />
    </section>
  );
};
export default Profile;
