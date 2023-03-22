import React from "react";
import appleWebsite from "../assets/website-apple (1) 1.png";
import carmaxWebsite from "../assets/website-carmax 1.png";
import protestWebsite from "../assets/website-protest 1.png";
import simplyChocolateWebsite from "../assets/website-simplychocolate 1.png";
import sirinLabsWebsite from "../assets/website-sirinlabs 1.png";
import slackWebsite from "../assets/website-slack 1.png";
import effectsBackground from "../assets/Effects.png";

function Portfolio() {
  return (
    <section className="relative font-khula py-16 [background:linear-gradient(102.92deg,_#1b004e_16.54%,_#72068f_65.06%,_#4e0e8b_85.68%)]">
      <img
        src={effectsBackground}
        alt="Effects_Background"
        className="absolute left-0 top-0 right-0 bottom-0 w-full mt-28"
      />
      <p className="flex justify-center uppercase text-[3rem] text-white">
        our portfolio
      </p>
      <div className="flex justify-center">
        <div className="rounded bg-mediumvioletred w-[1.25rem] h-[1.25rem]" />
      </div>
      <div className="flex mt-8 mx-40 flex-wrap gap-5 justify-center z-30 relative">
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={appleWebsite}
            alt="appleWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={carmaxWebsite}
            alt="carmaxWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={protestWebsite}
            alt="protestWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={simplyChocolateWebsite}
            alt="simplyChocolateWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={sirinLabsWebsite}
            alt="sirinLabsWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
        <a
          href="/"
          className="bg-white rounded-3xl w-[23.81rem] h-[20.38rem] flex justify-center items-center hover:-translate-y-2 duration-500"
        >
          <img
            src={slackWebsite}
            alt="slackWebsite_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </a>
      </div>
      <div className="flex justify-center items-center w-full text-[1.25rem] font-roboto mt-12 cursor-default">
        <p className="flex justify-center p-4 rounded-4xs uppercase font-medium bg-lightcoral text-white">
          to get the consultation
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
