import React from "react";
import jsPic from "../assets/js.png";
import nodePic from "../assets/node-logo 1 (2).png";
import reactPic from "../assets/Rectangle 35 (3).png";
import reduxPic from "../assets/Group 101.png";
import vscodePic from "../assets/Group 101 (1).png";
import figmaPic from "../assets/figma-logo 1.png";
import "../CSS/skills.css";

const Skills = () => {
  return (
    <section
      className="section-skills" id="skills"
      class="min-h-[80vh] md:min-h-screen items-center bg-[#ffff] pl-3 md:flex-row lg:flex-row flex-col-reverse pt-16 pb-16 "
    >
      <h2
        class="header-skills"
        className="font-sans text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        My Skill Set
      </h2>
      <div>
      <div className="right-skills">
        <div className="skills-set" id="skillsUpdate">

          <img src={jsPic} alt="js" className="font-mono" />
        </div>

        <div className="skills-set">

          <img src={nodePic} alt="node" />
        </div>

        <div className="skills-set" id="skillsUpdate">

          <img src={reactPic} alt="react" />
        </div>

        <div className="skills-set">

          <img src={vscodePic} alt="vsCode" />
        </div>

        <div className="skills-set" id="skillsUpdate">

          <img src={reduxPic} alt="redux" />
        </div>

        <div className="skills-set">

          <img src={figmaPic} alt="figma" />
        </div>
      </div>
      </div>
    </section>
  );
};
export default Skills;
