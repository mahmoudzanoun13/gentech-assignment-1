import { useState } from "react";

export const DropDown = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left cursor-pointer z-50">
      <div className="group">
        <p>Services</p>
        <div
          className={`${
            open ? "block" : "hidden"
          } group-hover:block hover:block duration-500 origin-top-right absolute left-0 mt-2 p-2 w-56 rounded-md shadow-lg bg-thistle ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Calculator for the site
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Integration
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Site testing
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Site layout
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Parsing goods
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Articles
            </a>
            <a
              href="/"
              className="text-midnightblue-200 hover:text-white hover:[background:linear-gradient(90.29deg,_#1b004f,_#e33eaf_99.99%,_#c637a0)] rounded-3xl block px-4 py-2 text-sm duration-500"
            >
              Website improvement
            </a>
          </div>
        </div>
      </div>
      {open && (
        <div
          id="overlay"
          onClick={handleClick}
          className="fixed top-28 right-0 bottom-0 left-0 w-screen h-screen z-50 cursor-auto"
        ></div>
      )}
    </div>
  );
};

export default DropDown;
