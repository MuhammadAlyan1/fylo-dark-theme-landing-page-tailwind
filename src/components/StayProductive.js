import React from 'react';
import stayProductiveImage from '../assets/images/illustration-stay-productive.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const StayProductive = () => {
  return (
    <section className="p-4 text-slate-200 md:mx-auto md:flex md:max-w-[1320px] md:items-center md:gap-8">
      <div className="mx-auto w-fit md:basis-1/2">
        <img src={stayProductiveImage} alt="stay productive" />
      </div>
      <div className="h-fit md:basis-1/2">
        <h3 className="my-4 text-lg font-bold md:max-w-[400px] md:text-4xl">
          Stay productive, wherever you are
        </h3>
        <p className="my-2 md:my-4 md:max-w-[530px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="my-2 md:my-4 md:max-w-[530px]">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <p className="mt-6 flex w-fit cursor-pointer items-center gap-2 border-b-2 border-current pr-1 text-emerald-400 transition duration-150 ease-in hover:text-slate-200 md:mt-4">
          See how Fylo works
          <span className="text-sm">
            <BsFillArrowRightCircleFill />
          </span>
        </p>
      </div>
    </section>
  );
};

export default StayProductive;
