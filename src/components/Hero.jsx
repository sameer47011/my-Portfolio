// import React from 'react'
// import HeroImage from '../assets/hero-image.png'

// const Hero = () => {
//   return (
//     <div className='bg-black text-white text-center py-16'>
//         <img src={HeroImage} alt="" 
//         className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
//         transition-transform duration-300 hover:scale-105'/>
//         <h1 className='text-4xl font-bold'>
//             I'm {" "}
//             <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sameer Ansari</span>
//             , Full-Stack Developer
//         </h1>
//         <p className='mt-4 text-lg text-gray-300'>
//             I specialize in building modern and responsive web applications.
//         </p>
//         <div className='mt-8 space-x-4'>
//             <button
//             className='bg-gradient-to-r from-green-400 to-blue-500 text-white
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
//             <button
//             className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
//         </div>

//     </div>
//   )
// }

// export default Hero






// Hero.js
// import React from 'react';
// import HeroImage from '../assets/hero-image.png'

// const Hero = ({ onContactClick }) => {
//   return (
//     <div className="bg-black text-white text-center py-16">
//       {/* <img src={HeroImage} alt="" 
//       className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
//       transition-transform duration-300 hover:scale-105'  
//       /> */}

//       <img
//         src={HeroImage}
//         alt=""
//         className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
//           transition-transform duration-300 hover:scale-110"
//         style={{
//           objectPosition: 'left center', // Image ko left align karne ke liye
//         }}
//       />
//       <h1 className="text-5xl font-bold">
//         I'm{' '}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//           Sameer Ansari
//         </span>
//         , Full-Stack Developer
//       </h1>
//       <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
//         I specialize in building modern and responsive web applications that solve real-world problems and provide seamless user experiences.
//       </p>
//       <div className="mt-8 space-x-4">
//         <button
//           onClick={onContactClick}
//           className="bg-gradient-to-r from-green-400 to-blue-500 text-white
//           transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full"
//         >
//           Contact Me
//         </button>
//         <button
//           onClick={() => window.open('https://drive.google.com/file/d/1AMhsePzj1uYZz-y8pXevaNKnOL89u8g1/view?usp=sharing')}
//           className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
//           transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full"
//         >
//           View Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16 px-4 md:px-8">
      <img
        src={HeroImage}
        alt="Hero"
        className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
        style={{ objectPosition: 'left center' }}
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Sameer Ansari
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
        I specialize in building modern and responsive web applications that solve real-world problems and provide seamless user experiences.
      </p>
      <div className="mt-6 sm:mt-8 space-x-2 sm:space-x-4 flex justify-center flex-wrap">
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 sm:px-6 sm:py-3 rounded-full"
        >
          Contact Me
        </a>
        <button
          onClick={() => window.open('https://drive.google.com/file/d/1AMhsePzj1uYZz-y8pXevaNKnOL89u8g1/view?usp=sharing')}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 sm:px-6 sm:py-3 rounded-full"
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;




