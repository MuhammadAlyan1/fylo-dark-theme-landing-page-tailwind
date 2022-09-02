import React from 'react';

const Feature = ({ image, title, description }) => {
  if (!title) return;

  return (
    <article className="mx-auto max-w-[400px] px-4">
      <div className="mx-auto my-4 w-fit">
        <img src={image} alt={title + ' image'} />
      </div>
      <div className="text-center text-slate-200">
        <h3 className="my-4 text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Feature;
