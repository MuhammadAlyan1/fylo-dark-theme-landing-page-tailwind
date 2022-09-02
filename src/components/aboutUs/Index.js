import React from 'react';
import Feature from './Feature';
import { features } from '../../data';

const AboutUs = () => {
  return (
    <section className="my-8 flex flex-col items-center gap-8 bg-main bg-contain bg-center bg-no-repeat sm:mx-auto sm:max-w-[850px] sm:flex-row sm:flex-wrap sm:justify-center md:justify-between">
      {features.map((feature) => {
        return <Feature {...feature} />;
      })}
    </section>
  );
};

export default AboutUs;
