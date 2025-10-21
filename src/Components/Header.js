import React from "react";
import headerPic from "../assets/black1.jpg";
import Button from "../Utils/Button";
import { Link } from "react-scroll"; 

const Header = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center lg:w-screen">
      <nav className=" font-sans fixed top-0 left-0 w-full bg-[rgba(99,102,241,0.3)] backdrop-blur-md shadow-md z-5fixed top-0 left-0 w-full bg-gradient-to-r from-pink-100 bg-opacity-20 backdrop-blur-sm shadow-md z-50 bg-opacity-5">
        <ul className="flex justify-center gap-6 py-3 text-gray-500 font-semibold lg:text-base">
          <li>
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300 " 
            >
              Hi!
            </Link>
          </li>
              <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
            <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              Skills
            </Link>
          </li>
        
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              Profile
            </Link>
          </li>
        
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              Contact me!
            </Link>
          </li>
        </ul>
      </nav>

     <section
  id="header"
  className="min-h-screen bg-[#ffffff] p-8 lg:p-20 flex flex-col justify-center items-center"
>
  <div className="flex flex-col items-center space-y-6 lg:space-y-10">

    <img
      src={headerPic}
      className="max-w-[11rem] rounded-[2rem] drop-shadow-xl opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      alt="Header visual"
    />

    <h1 className="font-sans text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      Let's Work Together: Develop, Tech, Value!
    </h1>
    

    <p className="font-sans text-center text-2xl lg:text-base text-[#414a4c] leading-7 max-w-3xl mx-auto">
     I am a versatile professional with experience in front-end development, product ownership, and
technical project management. Over the past years, I have worked extensively on React and web
development projects, managed product initiatives, and contributed to AI projects, bridging the gap
between technical teams and stakeholders. I enjoy turning complex requirements into actionable
solutions and continuously improving user experience. If my profile interests you, you can contact me!
    </p>

  </div>
</section>

    </div>
  );
};

export default Header;
