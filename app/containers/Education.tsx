import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div id="education" className="lg:px-24 py-10 items-center bg-green-900" >
      <div className="flex justify-center gap-4" data-aos="fade-up">
        <h1 className="text-white text-3xl sm:text-5xl dark:text-gray-400 font-bold lg:flex" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 5)" }}>
          ABOUT
        </h1>
        <h1 className="text-white text-3xl sm:text-5xl dark:text-gray-400 font-bold lg:flex" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 5)" }}>
          US
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-12 gap-8 mx-16 lg:mx-60">

        <Image
          src="/images/anggota/alvin.jpg"
          height={1500} width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-right"
          data-aos-duration="1500"
        />

        <Image
          src="/images/anggota/syifaul.jpg"
          height={1500} width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-left"
          data-aos-duration="1500"
        />

        <Image
          src="/images/anggota/daffa.jpg"
          height={1500}
          width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-right"
          data-aos-duration="1500"
        />

        <Image
          src="/images/anggota/nisrina.jpg"
          height={1500}
          width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-left"
          data-aos-duration="1500"
        />

        <Image
          src="/images/anggota/cahya.jpg"
          height={1500}
          width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-right"
          data-aos-duration="1500"
        />

        <Image
          src="/images/anggota/thifa.jpg"
          height={1500}
          width={1500}
          alt="WEAPMATH LOGO"
          className="rounded-md border-white shadow-md shadow-black border hover:scale-105 duration-400 transition-all"
          data-aos="flip-left"
          data-aos-duration="1500"
        />

      </div>
      <div id="achievements"></div>
    </div>
  );
};

export default Education;