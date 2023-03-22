import React from "react";
import brand1 from "../assets/2 1.png";
import brand2 from "../assets/3 1.png";
import brand3 from "../assets/4 1.png";
import brand4 from "../assets/5 1.png";
import brand5 from "../assets/6 1.png";
import brand6 from "../assets/7 1.png";
import brand7 from "../assets/8 1.png";
import brand8 from "../assets/9 1.png";
import brand9 from "../assets/11 1.png";
import brand10 from "../assets/19 1.png";
import brand11 from "../assets/12 1.png";
import brand12 from "../assets/biola-300x300 1.png";

function Clients() {
  return (
    <section className="relative font-khula bg-whitesmoke py-16">
      <p className="flex justify-center uppercase text-[3rem] text-midnightblue-200">
        our clients
      </p>
      <div className="left-circle absolute top-24 left-0 w-[35%] border-t border-mediumvioletred border-dashed" />
      <div className="right-circle absolute top-24 right-0 w-[35%] border-t border-mediumvioletred border-dashed" />
      <div className="flex justify-center">
        <div className="rounded bg-mediumvioletred w-[1.25rem] h-[1.25rem]" />
      </div>
      <div className="flex mt-24 mx-40 flex-wrap gap-5 justify-center">
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand1}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand2}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand3}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand4}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand5}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand6}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand7}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand8}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand9}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand10}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand11}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
        <div className="border-solid border-2 border-mediumvioletred bg-white rounded-4xs w-[179px] h-[154px] flex justify-center items-center">
          <img
            src={brand12}
            alt="Web_icon"
            className="w-[115px] h-[115px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
