// import React from "react";
// import AboutImage from "../assets/aboutme-image.jpeg";

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-5">
//         <img
//             src={AboutImage}
//             alt="About Me"
//             className="w-72 h-auto rounded object-cover mb-8 md:mb-0"
//           />
//           <div className="flex-1 mb-8 md:mb-0">
//             <p className="text-lg mb-8">
//               I am a passionate full-stack developer with a focus on building
//               modern and responsive web applications. With a strong foundation
//               in both frontend and backend technologies, I strive to create
//               seamless and efficient user experiences. I have a year of experience in
//               React Native and four months as a frontend developer, having completed
//               three personal projects to sharpen my skills.
//             </p>
//           </div>

//         </div>
//         <div className="space-y-4">
//           {/* Skills section */}
//           {[
//             { name: "HTML & CSS", width: "11/12" },
//             { name: "React JS", width: "11/12" },
//             { name: "Node JS", width: "7/12" },
//             { name: "Express JS", width: "8/12" },
//             { name: "MongoDB", width: "7/12" },
//             { name: "JavaScript", width: "10/12" },
//             { name: "React Native", width: "8/12" },
//             { name: "Tailwind CSS", width: "9/12" },
//           ].map((skill) => (
//             <div className="flex items-center" key={skill.name}>
//               <label htmlFor={skill.name.toLowerCase()} className="w-2/12">
//                 {skill.name}
//               </label>
//               <div className="grow bg-gray-800 rounded-full h-2.5">
//                 <div
//                   className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-${skill.width}`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 flex justify-between text-center">
//           <div>
//             <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//               1+
//             </h3>
//             <p>Year Experience in React Native</p>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//               3+
//             </h3>
//             <p>Projects Completed</p>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//               0
//             </h3>
//             <p>Clients (Self-practice)</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import AboutImage from "../assets/aboutme-image.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-5">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-auto rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-base sm:text-lg md:text-xl mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences. I have a year of experience in
              React Native and four months as a frontend developer, having completed
              three personal projects to sharpen my skills.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {/* Skills section */}
          {[
            { name: "HTML & CSS", width: 11 },
            { name: "React JS", width: 11 },
            { name: "Node JS", width: 7 },
            { name: "Express JS", width: 8 },
            { name: "MongoDB", width: 7 },
            { name: "JavaScript", width: 10 },
            { name: "React Native", width: 8 },
            { name: "Tailwind CSS", width: 9 },
          ].map((skill) => (
            <div className="flex items-center" key={skill.name}>
              <label htmlFor={skill.name.toLowerCase()} className="w-2/12 text-sm sm:text-base md:text-lg">
                {skill.name}
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105"
                  style={{ width: `${(skill.width / 12) * 100}%` }} // Set dynamic width
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-between text-center space-y-8 sm:space-y-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
              1+
            </h3>
            <p className="text-sm sm:text-base md:text-lg">Year Experience in React Native</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
              3+
            </h3>
            <p className="text-sm sm:text-base md:text-lg">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
              0
            </h3>
            <p className="text-sm sm:text-base md:text-lg">Clients (Self-practice)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

