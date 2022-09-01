import React from 'react';
import heroSectionImage from '../assets/images/illustration-intro.png';

const HeroSection = () => {
  return (
    <section className="p-4">
      <div className="mx-auto w-fit">
        <img src={heroSectionImage} alt="people celebrating" />
      </div>
      <div className="text-slate-200">
        <h1 className="my-4 mx-auto text-center text-2xl font-bold md:mb-8 md:max-w-2xl md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="my-4 mx-auto text-center md:mb-8 md:max-w-2xl">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="mx-auto block cursor-pointer rounded-full bg-sky-400 px-14 py-2 font-bold transition duration-150 ease-in hover:bg-sky-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
