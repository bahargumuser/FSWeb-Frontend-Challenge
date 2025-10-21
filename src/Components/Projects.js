import React from "react";
import "../CSS/projects.css";
import ProjectsArray from "../Utils/ProjectsArray";

const Profile = () => {
  return (

    <section id="projects" className="smin-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 flex flex-col items-center">
    <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-16 font-mono tracking-wide">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        <ProjectsArray />
        </div>
     
    </section>

  );
};
export default Profile;
