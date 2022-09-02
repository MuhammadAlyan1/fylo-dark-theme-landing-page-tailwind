import React from 'react';

const Testimony = ({ image, name, jobTitle, description }) => {
  if (!name) return;

  return (
    <article className="mx-auto mb-4 max-w-[425px] rounded-md bg-slate-700 p-6 text-slate-200">
      <p className="mb-6">{description}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 overflow-hidden rounded-full">
          <img src={image} alt={name} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">{jobTitle}</p>
        </div>
      </div>
    </article>
  );
};

export default Testimony;
