import React from "react";
import pen from "../assets/Pen 1.png";
import webIcon from "../assets/free-icon-startup-8605641 1.png";
import designIcon from "../assets/free-icon-poster-9286370 1.png";
import devIcon from "../assets/free-icon-artboard-9286351 1.png";
import marketingIcon from "../assets/free-icon-big-data-6908790 1.png";
import seoIcon from "../assets/free-icon-sitemap-8604956 1.png";
import advertisingIcon from "../assets/free-icon-megaphone-9249477 1.png";

function Services() {
  return (
    <section className="relative font-khula bg-whitesmoke py-16">
      <img
        src={pen}
        alt="Pen"
        className="absolute left-0 -top-12 mix-blend-overlay overflow-hidden"
      />
      <p className="flex justify-center uppercase text-[3rem] text-midnightblue-200">
        our services
      </p>
      <div className="flex justify-center">
        <div className="rounded bg-mediumvioletred w-[1.25rem] h-[1.25rem]" />
      </div>
      <div className="mx-80 mt-10 flex gap-5 justify-center">
        <div className="flex flex-col items-center gap-10 text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">web</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={webIcon}
              alt="Web_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 rounded-4xs text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">design</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white  rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={designIcon}
              alt="Design_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 rounded-4xs text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">dev</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white  rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={devIcon}
              alt="Dev_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 rounded-4xs text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">marketing</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white  rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={marketingIcon}
              alt="Marketing_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 rounded-4xs text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">seo</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white  rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={seoIcon}
              alt="SEO_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 rounded-4xs text-[1.5rem] text-midnightblue-200">
          <p className="uppercase">advertising</p>
          <div className="border-dashed border-2 border-mediumvioletred bg-white  rounded-4xs w-40 h-40 flex justify-center items-center">
            <img
              src={advertisingIcon}
              alt="advertising_icon"
              className="w-[8.06rem] h-[8.06rem] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-12">
        <div className="rounded bg-midnightblue-100 w-[1.25rem] h-[1.25rem]" />
        <div className="rounded bg-midnightblue-100 w-[1.25rem] h-[1.25rem]" />
        <div className="rounded bg-midnightblue-100 w-[1.25rem] h-[1.25rem]" />
        <div className="rounded bg-mediumvioletred w-[1.25rem] h-[1.25rem]" />
      </div>
    </section>
  );
}

export default Services;
