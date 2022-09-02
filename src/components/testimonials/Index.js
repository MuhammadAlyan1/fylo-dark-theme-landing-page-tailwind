import React from 'react';
import Testimony from './Testimony';
import { testimonialsData } from '../../data';

const Testimonials = () => {
  return (
    <section className="mx-auto my-8 md:flex md:max-w-[1320px] md:flex-wrap md:gap-2">
      {testimonialsData.map((testimony) => {
        return <Testimony {...testimony} />;
      })}
    </section>
  );
};

export default Testimonials;
