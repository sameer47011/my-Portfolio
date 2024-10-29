import React from "react";

const services = [
  {
    id: 1,
    title: "E-Commerce Development",
    description: "Building dynamic e-commerce websites using React JS and Tailwind for a seamless shopping experience.",
  },
  {
    id: 2,
    title: "Todo App Development",
    description: "Creating interactive todo applications with React JS, MongoDB, Node.js, and Express.js for efficient task management.",
  },
  {
    id: 3,
    title: "UI Design",
    description: "Developing visually appealing user interfaces for various applications, including a restaurant UI using Material UI.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills for robust web applications.",
  },
  {
    id: 5,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks.",
  },
  {
    id: 6,
    title: "Backend Development",
    description: "Developing server-side logic and managing databases for web applications.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
