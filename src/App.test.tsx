import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// import React, { useEffect } from 'react';
// import Swiper, { EffectCards, Mousewheel } from 'swiper';
// import 'swiper/swiper-bundle.min.css';

// const Hero = () => {
//   useEffect(() => {
//     new Swiper('.swiper', {
//       effect: 'cards',
//       grabCursor: true,
//       initialSlide: 2,
//       speed: 500,
//       loop: true,
//       mousewheel: {
//         invert: false,
//       },
//       modules: [EffectCards, Mousewheel],
//     });
//   }, []);

//   return (
//     <section className="relative flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden">
//       {/* Content Section */}
//       <div className="content flex flex-col md:flex-row justify-center items-center gap-8 bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-lg z-10">
//         <div className="info text-white max-w-lg text-center md:text-left">
//           <p className="font-medium text-lg mb-4">
//             Join us for a fantastic{' '}
//             <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//               movie night
//             </span>{' '}
//             filled with popcorn, laughter, and great company! Whether you're a
//             fan of thrilling action, heartwarming dramas, or side-splitting
//             comedies, we've got a film lineup to cater to all tastes. Save the
//             date and bring your favorite snacks to make it a memorable evening.
//           </p>
//           <button className="btn bg-white text-purple-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-100 transition transform hover:scale-105">
//             Join
//           </button>
//         </div>

//         {/* Swiper Section */}
//         <div className="swiper w-60 h-96">
//           <div className="swiper-wrapper">
//             {[
//               {
//                 src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379',
//                 rating: '8.5',
//                 title: "The Queen's Gambit",
//               },
//               {
//                 src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd',
//                 rating: '9.5',
//                 title: 'Breaking Bad',
//               },
//               {
//                 src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e',
//                 rating: '8.1',
//                 title: 'Wednesday',
//               },
//               {
//                 src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082',
//                 rating: '8.7',
//                 title: 'Stranger Things',
//               },
//             ].map((slide, index) => (
//               <div className="swiper-slide relative" key={index}>
//                 <img
//                   src={slide.src}
//                   alt={slide.title}
//                   className="absolute inset-0 w-full h-full object-cover rounded-lg"
//                 />
//                 <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg">
//                   <span className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full px-3 py-1">
//                     {slide.rating}
//                   </span>
//                   <h2 className="absolute bottom-4 left-4 text-white font-bold text-lg">
//                     {slide.title}
//                   </h2>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Circles */}
//       <ul className="circles absolute inset-0 w-full h-full overflow-hidden z-0">
//         {Array(10)
//           .fill()
//           .map((_, i) => (
//             <li
//               key={i}
//               className="absolute bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full"
//               style={{
//                 width: `${Math.random() * 150 + 20}px`,
//                 height: `${Math.random() * 150 + 20}px`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 20}s`,
//                 animationDuration: `${Math.random() * 30 + 10}s`,
//                 animationName: 'floating',
//               }}
//             ></li>
//           ))}
//       </ul>
//     </section>
//   );
// };

// export default Hero;
