import React from "react";
import projectsPic from "../assets/minnet günlüğü.png";
import tarde from "../assets/TARDE.png";
import locations from "../assets/locations.png"
import starwars from "../assets/Star wars i.png"

const myList = [
  {
    pic: tarde,
    name: "TARDE Association",
    description:
      "In response to the 2023 earthquake in our country, we created a project to offer psychosocial aid to earthquake survivors. This initiative streamlined the operations of the Trauma and Disaster Mental Health Studies Association in the affected area. The project empowered mobile psychologists in the region to efficiently handle client data, ultimately improving accessibility for individuals seeking psychological support.",
    tags: ["next.js", "knex", "vite"],
    github: "https://github.com/Workintech-Graduate-Projects/Tarde-app",
    githubbe: "https://github.com/Workintech-Graduate-Projects/tarde-BE",
    vercel: "https://tarde-app.vercel.app/",
  },
  {
    pic: locations,
    name: "Location Recording",
    description:
      "A site for Star Wars fans where they can list all the characters! It can also be listed in which movies the characters have been in. Character and movie information was retrieved from API endpoints. All data is included in the DOM. Developed with JavaScript and React. Styled-components was used for styling.",
    tags: [ "javascript", "react", "node.js"],
    github: "https://github.com/bahargumuser/SAMM",
    githubbe: "https://github.com/bahargumuser/SAMM-be",
  },
  {
    pic: starwars,
    name: "Star Wars API",
    description:
      "A site for Star Wars fans where they can list all the characters! It can also be listed in which movies the characters have been in. Character and movie information was retrieved from API endpoints. All data is included in the DOM. Developed with JavaScript and React. Styled-components was used for styling.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/FSWeb-S6-Challenge",
    vercel: "https://star-wars-kappa-jet.vercel.app/",
  },
  {
    pic: projectsPic,
    name: "Thankfulness Diary",
    description:
      "It's a great site to give thanks for what you have every day! When we want to add new notes and delete existing notes, a request is sent to the API. All written notes are saved and can be reopened at any time. According to on the response, store and localStorage are updated. Developed with React, JavaScript, CSS and HTML.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/fsweb-s10-challenge",
    vercel: "https://minnetgunlugu-dusky.vercel.app/yeni-not",
  },

];

const projectsArray = () => {
  return (
    <>
      {myList.map((list) => (
        <div key={list.name} className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">

          <img src={list.pic} alt={list.name} className="w-full h-56 object-cover" />
          <div className="p-6 flex flex-col justify-between flex-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{list.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{list.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {list.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
            <a href={list.vercel} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-indigo-500 hover:text-indigo-700">
                View Site ↗
              </a>
              <a href={list.github} target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-500 hover:text-gray-800" > 
                View GitHub ↗
              </a>
              
              {list.githubbe && (
                <a href={list.githubbe} target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-500 hover:text-gray-800" >
                View GitHub Backend ↗
              </a>
              )}
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default projectsArray;
