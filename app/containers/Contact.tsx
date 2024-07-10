import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";
import React from 'react';
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white text-center py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          
        </div>
        <p className="text-sm pb-2">
          Copyright © Weapmath. Trademarks belong to their respective
          owners. All rights reserved.
        </p>
        <div className="flex justify-center items-center mt-4 pb-2 gap-2">
          <BsInstagram className="text-xl hover:text-green-500 duration-500 transition-all" />
          <a href="#" className="text-sm hover:text-green-500 duration-500 transition-all ">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
