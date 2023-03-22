import React from "react";
import arrowRight from "../assets/Arrow, slider 1.png";
import man from "../assets/confident-attractive-caucasian-guy-in-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508 1.png";
import woman from "../assets/beautiful-young-sexy-woman-in-a-light-gray-dress-posing-against-a-white-wall_231208-6003 1.png";

function Hero() {
  return (
    <section className="relative bg-whitesmoke pt-16">
      <p className="flex justify-center uppercase font-khula text-[3rem] text-midnightblue-200">
        why we
      </p>
      <div className="left-circle absolute top-24 left-[20rem] w-[15%] border-t border-mediumvioletred border-dashed" />
      <div className="center-circle absolute top-0 left-[20rem] h-[17.5%] border-r border-mediumvioletred border-dashed" />
      <div className="right-circle absolute top-24 right-[16.9rem] w-[15%] border-t border-mediumvioletred border-dashed" />
      <div className="center-circle absolute top-0 right-[16.9rem] h-[17.5%] border-r border-mediumvioletred border-dashed" />
      <div className="flex justify-center">
        <div className="rounded bg-mediumvioletred w-[1.25rem] h-[1.25rem]" />
      </div>
      <div className="text-center mx-80 mt-10 font-inter font-medium text-midnightblue-200">
        <p>
          We are a experienced team of professionals for whom website
          development is not just a job, but a favorite thing. Each project is a
          separate story that we live with our client. We delve into the roots
          of the company, study its pros and cons. And only after that we begin
          to create what is really necessary for a successful existence.
        </p>
      </div>
      <div className="flex items-center mt-10 mx-80">
        <div className="flex gap-6">
          <div className="flex items-center gap-4">
            <img
              src={man}
              alt="Confident_Attractive_Guy"
              className="w-44 h-44 hover:-translate-y-2 duration-500 hover:border border-mediumvioletred border-solid rounded"
            />
            <div>
              <p>
                We are a experienced team of professionals for whom website
                development is not just a job, but a favorite thing.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={woman}
              alt="Confident_Attractive_Guy"
              className="w-44 h-44 hover:-translate-y-2 duration-500 hover:border border-mediumvioletred border-solid rounded"
            />
            <div>
              <p>
                We are a experienced team of professionals for whom website
                development is not just a job, but a favorite thing.
              </p>
            </div>
          </div>
        </div>
        <img src={arrowRight} alt="Arrow_Right" className="mix-blend-overlay" />
      </div>
      <div className="border-dashed border-2 border-mediumvioletred h-[100%] w-[100%] mt-16" />
    </section>
  );
}

export default Hero;
