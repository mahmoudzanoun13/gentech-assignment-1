import React from "react";
import NavBar from "./NavBar";
import topLayout from "../assets/circle 3.png";
import computer from "../assets/Computer 1.png";
import bottomLayout from "../assets/circle 4.png";
import comma from "../assets/Comma 1.png";

function Header() {
  return (
    <header className="relative [background:linear-gradient(102.92deg,_#1b004e_16.54%,_#72068f_65.06%,_#4e0e8b_85.68%)]">
      <NavBar />
      <img
        src={topLayout}
        alt="Circles Layout"
        className="absolute left-28 top-24 z-10 w-[37.19rem] h-[16.63rem] overflow-hidden mix-blend-soft-light"
      />
      <img
        src={comma}
        alt="Comma Layout"
        className="absolute left-80 bottom-1/3 z-10 overflow-hidden opacity-[0.39] mix-blend-soft-light"
      />
      <img
        src={bottomLayout}
        alt="Circles Layout"
        className="absolute right-28 bottom-0 z-10 w-[37.19rem] h-[15.31rem] overflow-hidden opacity-[0.39] mix-blend-soft-light"
      />
      <div className="md:flex w-[80%]">
        <div className="md:relative left-72 md:text-sm z-30">
          <p className="text-[4rem] w-[42rem] font-khula text-white uppercase font-extrabold ml-8 mt-8 z-10 relative">
            web development studio
          </p>
          <div className="flex gap-4 flex-wrap z-30 mt-8 ml-8 font-roboto-condensed cursor-default">
            <div className="w-[79px] h-[84.5px] uppercase hover:translate-y-1 duration-500 text-white bg-mediumvioletred rounded-lg flex justify-center items-center text-xs">
              question
            </div>
            <div className="w-[79px] h-[84.5px] uppercase hover:translate-y-1 duration-500 text-white bg-palevioletred-200 rounded-lg flex justify-center items-center text-xs">
              price
            </div>
            <div className="w-[79px] h-[84.5px] uppercase hover:translate-y-1 duration-500 text-white bg-palevioletred-100 rounded-lg flex justify-center items-center text-xs">
              discounts
            </div>
            <div className="w-[79px] h-[84.5px] uppercase hover:translate-y-1 duration-500 text-white bg-lightcoral rounded-lg flex justify-center items-center text-xs">
              guarantees
            </div>
            <div className="w-[79px] h-[84.5px] uppercase hover:translate-y-1 duration-500 text-white bg-transparent border-2 border-solid border-white rounded-lg flex justify-center items-center text-xs">
              guarantees
            </div>
          </div>
          <div className="border-with-circles relative text-[1.13rem] leading-[136.02%] font-inter w-[29.06rem] ml-8 mt-20 py-12 px-4 text-white border border-white border-solid">
            <p>
              “ We are a experienced team of professionals for whom website
              development is not just a job, but a favorite thing. Each project
              is a separate story that we live with our client. We delve into
              the roots of the company, study its pros and cons.”
            </p>
            <div className="absolute -top-[1.5px] -left-[1.5px] w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute -top-[1.5px] -right-[1.5px] w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute -bottom-[1.5px] -right-[1.5px] w-1 h-1 bg-white rounded-full"></div>
          </div>
          <div className="text-[1rem] uppercase leading-[136.02%] font-khula w-[29.06rem] ml-8 -mt-[1px] py-12 px-4 text-white border border-white border-solid border-b-0">
            <p>
              website
              <span className="text-lightcoral"> development</span>
            </p>
            <div className="flex items-center w-full text-[1.25rem] font-roboto mt-8 cursor-default">
              <p className="p-4 rounded-4xs uppercase font-medium bg-lightcoral text-white">
                to get the consultation
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={computer} alt="Computer" />
          <div className="line-with-circle relative flex items-center justify-center gap-4 text-[1rem] uppercase leading-[136.02%] font-khula w-[29.06rem] ml-20 -mt-6 py-12 p-4 text-white border-r border-white border-solid">
            <p>
              website
              <span className="text-lightcoral"> design</span>
            </p>
            <div className="flex items-center text-[1.25rem] font-roboto cursor-default">
              <p className="p-4 rounded-4xs uppercase font-medium bg-lightcoral text-white">
                to get the consultation
              </p>
            </div>
            <div className="absolute -top-[1.5px] -right-[1.9px] w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
