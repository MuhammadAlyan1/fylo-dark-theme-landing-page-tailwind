import React from 'react';
import fyloLogo from '../assets/images/logo.svg';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 p-4 text-xl md:p-12">
      <div className="mt-44 mb-8 max-w-[100px]">
        <img src={fyloLogo} alt="fylo logo" />
      </div>
      <section className="text-slate-200 md:gap-12 lg:flex">
        <div className="md:basis-1/5">
          <p className="mb-4 flex gap-4">
            <span className="mt-2 text-slate-200">
              <GoLocation />
            </span>
            3529 8th Ave Council Bluffs, Iowa(IA), 51501
          </p>
        </div>
        <div className="mb-12 md:basis-1/5">
          <p className="links flex items-center gap-3">
            <span>
              <FiPhoneCall />
            </span>
            +1-543-123-4567
          </p>
          <p className="links flex items-center gap-3">
            <span>
              <HiOutlineMail />
            </span>
            example@fylo.com
          </p>
        </div>
        <div className="mb-12 md:basis-1/5">
          <p className="links">About Us</p>
          <p className="links">Jobs</p>
          <p className="links">Press</p>
          <p className="links">Blog</p>
        </div>
        <div className="mb-12 md:basis-1/5">
          <p className="links"> Contact us</p>
          <p className="links">Terms</p>
          <p className="links">Privacy</p>
        </div>
        <div className="mx-auto flex max-w-[150px] justify-between md:basis-1/5">
          <p className="links text-2xl hover:text-sky-400">
            <FaFacebookF />
          </p>
          <p className="links text-2xl hover:text-sky-400">
            <FaTwitter />
          </p>
          <p className="links text-2xl hover:text-sky-400">
            <FaInstagram />
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
