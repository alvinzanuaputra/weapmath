"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import HeaderButton from "@/app/components/HeaderButton";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      let offset;
      if (window.innerWidth < 768) {
        offset = element.getBoundingClientRect().top + window.scrollY - 66;
      } else if (window.innerWidth < 1280) {
        offset = element.getBoundingClientRect().top + window.scrollY - 74;
      } else {
        offset = element.getBoundingClientRect().top + window.scrollY - 90;
      }
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="fixed top-0 w-full z-50"
    >
      <div className="px-6 sm:px-16 pt-4 pb-4 flex items-center justify-between bg-black">
        <div className="flex items-center gap-4">
          <button onClick={() => handleClick("home")}>
            <div className="flex items-center gap-2">
              <Image
                src="/images/weapmath.png"
                height={80}
                width={80}
                alt="WEAPMATH LOGO"
                className="w-1/4 sm:w-1/3 md:w-5/6 mx-auto "
              />
              <h1 className="md:hidden lg:flex font-bold text-lg lg:text-2xl text-white hover:text-green-500 duration-400 transition-all">
                WEAPMATH
              </h1>
            </div>
          </button>
        </div>

        <div className="relative md:hidden">
          <button
            onClick={handleButtonClick}
            className="text-white dark:text-black text-3xl mt-1"
          >
            <IoMenu />
          </button>
          {isMenuOpen && (
            <div className="absolute top-10 right-0 bg-black border border-gray-300 p-7 rounded shadow text-xl">
              <ul>
                <HeaderButton
                  section="GAME"
                  onClick={() => handleClick("home")}
                />
                <HeaderButton
                  section="KARAKTER"
                  onClick={() => handleClick("about")}
                />
                <HeaderButton
                  section="ABOUT US"
                  onClick={() => handleClick("education")}
                />
                <HeaderButton
                  section="TUTORIAL"
                  onClick={() => handleClick("achievements")}
                />
                
              </ul>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-10 xl:gap-12">
          <HeaderButton
            section="GAME"
            onClick={() => handleClick("home")}
          />
          <HeaderButton
            section="KARAKTER"
            onClick={() => handleClick("about")}
          />
          <HeaderButton
            section="ABOUT US"
            onClick={() => handleClick("education")}
          />
          <HeaderButton
            section="TUTORIAL"
            onClick={() => handleClick("achievements")}
          />
          
        </div>

        <a href="#" className="hidden lg:block">
          <button className="bg-green-600 rounded-md px-5 py-1.5 text-white hover:bg-green-400 duration-500">
            MAINKAN GAME
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
