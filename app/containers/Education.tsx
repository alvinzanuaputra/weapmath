import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="lg:px-24 py-20 pb-40 items-center bg-green-900"
      data-aos="slide-left"
      data-aos-duration="2000"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h1
          className="text-white text-3xl sm:text-5xl dark:text-gray-400 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 5)" }}
        >
          MEET OUR TEAM
        </h1>
        <br/>
      </div>

      <div className="bg-white p-4 text-center mx-28 sm:mx-124">
        <Image
          src="/images/anggota/syifaul.jpg"
          height={300}
          width={300}
          alt="Muhammad Syifa'ul Mufid"
          className="mx-auto"
          data-aos="flip-left"
          data-aos-duration="1500"
        />
        <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
          Muhammad Syifa&apos;ul Mufid, S.Si, M.Si, D.Phil
        </h2>
        <p className="text-[8px] sm:text-sm lg:text-lg">Co-lecturer</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mx-6 lg:mx-60 mt-8">
        <div className="bg-white p-4 text-center">
          <Image
            src="/images/anggota/daffa.jpg"
            height={300}
            width={300}
            alt="M.Rizky Daffa Fahrezzy"
            className="mx-auto"
            data-aos="flip-right"
            data-aos-duration="1500"
          />
          <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
            M.Rizky Daffa Fahrezzy
          </h2>
          <p className="text-[8px] sm:text-sm lg:text-lg">Chief Executive Officer</p>
        </div>

        <div className="bg-white p-4 text-center">
          <Image
            src="/images/anggota/alvin.jpg"
            height={300}
            width={300}
            alt="Alvin Zanua Putra"
            className="mx-auto"
            data-aos="flip-right"
            data-aos-duration="1500"
          />
          <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
            Alvin Zanua Putra
          </h2>
          <p className="text-[8px] sm:text-sm lg:text-lg">Chief Technology Officer</p>
        </div>

        <div className="bg-white p-4 text-center">
          <Image
            src="/images/anggota/cahya.jpg"
            height={300}
            width={300}
            alt="Cahyani Dini Setiowati"
            className="mx-auto"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
          <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
            Cahyani Dini Setiowati
          </h2>
          <p className="text-[8px] sm:text-sm lg:text-lg">Chief Operating Officer</p>
        </div>

        <div className="bg-white p-4 text-center">
          <Image
            src="/images/anggota/nisrina.jpg"
            height={300}
            width={300}
            alt="Nisrina Afifah Triasputri"
            className="mx-auto"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
          <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
            Nisrina Afifah Triasputri
          </h2>
          <p className="text-[8px] sm:text-sm lg:text-lg">Chief Financial Officer</p>
        </div>

        <div className="hidden sm:flex lg:flex">
          <div className="bg-white p-4 text-center">
            <Image
              src="/images/anggota/thifa.jpg"
              height={300}
              width={300}
              alt="Lathifah Sahda"
              className="mx-auto"
              data-aos="flip-right"
              data-aos-duration="1500"
            />
            <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
              Lathifah Sahda
            </h2>
            <p className="text-[8px] sm:text-sm lg:text-lg">Chief Marketing Officer</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:hidden mx-28 lg:hidden mt-8">
        <div className="bg-white p-4 text-center ">
          <Image
            src="/images/anggota/thifa.jpg"
            height={300}
            width={300}
            alt="Lathifah Sahda"
            className="mx-auto"
            data-aos="flip-right"
            data-aos-duration="1500"
          />
          <h2 className="mt-4 font-bold text-[8px] sm:text-sm lg:text-lg">
            Lathifah Sahda
          </h2>
          <p className="text-[8px] sm:text-sm lg:text-lg">Chief Marketing Officer</p>
        </div>
       
      </div>
      <div id="achievements"></div>
    </div>
  );
};

export default Education;
