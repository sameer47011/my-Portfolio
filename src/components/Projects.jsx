import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
 // You may want to replace this with your actual project images
import bookMSImage from "../assets/admin-dashboard.png";
 // Same here
 
 import Restorent from "../assets/RestaurentUi.png";
 import ecommerce from "../assets/e-commerce.png"
 import todoApp from "../assets/todo-app.png"

const projects = [
  {
    id: 1,
    name: "Restaurant UI",
    technologies: "React JS, Tailwind CSS",
    image: Restorent, // Replace with your actual image
    live: "https://react-material-ui-coral.vercel.app/",
    github: "https://github.com/sameer47011/React-Material-UI",
  },
  {
    id: 2,
    name: "E-Commerce Website ",
    technologies: "React JS, Material UI",
    image: ecommerce, // Replace with your actual image
    live: "https://react-website-three-flame.vercel.app/",
    github: "https://github.com/sameer47011/react-website",
  },
  {
    id: 3,
    name: "Todo App",
    technologies: "MERN Stack",
    image: todoApp, // Replace with your actual image
    live: "https://mern-todo-app-teal.vercel.app/",
    github: "https://github.com/sameer47011/Mern-todo-app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
                <a
                  href={project.live}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo Project 
                </a>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
