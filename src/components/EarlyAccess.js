import React from 'react';

const EarlyAccess = () => {
  return (
    <section className="relative top-36 m-4 mx-auto rounded-lg bg-slate-700 px-4 py-6 text-slate-200 shadow-md shadow-black md:max-w-[800px] md:px-12">
      <h3 className="mx-auto my-2 w-fit text-xl font-bold">
        Get early access today
      </h3>
      <p className="mx-auto w-fit text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="my-6 md:flex md:gap-4">
        <input
          type="text"
          className="min-h-4 my-4 w-full rounded-full py-2 px-4 text-slate-800 md:basis-3/4"
          placeholder="email@example.com"
        />
        <button className="min-h-4 my-4 w-full rounded-full bg-sky-400 p-2 font-bold transition duration-150 ease-in hover:bg-sky-300 md:basis-1/4">
          Get Started For Free
        </button>
      </div>
    </section>
  );
};

export default EarlyAccess;
