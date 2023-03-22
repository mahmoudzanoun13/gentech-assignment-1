import React from "react";
import logo from "../assets/Logo 1.png";
import linkedinLogo from "../assets/508225.png";
import facebookLogo from "../assets/725397.png";
import instagramLogo from "../assets/instagram_logo_thin_icon_171701.png";
import topLayout from "../assets/circle 3.png";
import bottomLayout from "../assets/circle 4.png";

function Footer() {
  return (
    <footer className="relative [background:linear-gradient(102.92deg,_#1b004e_16.54%,_#72068f_65.06%,_#4e0e8b_85.68%)] text-white font-khula flex justify-center">
      <img
        src={topLayout}
        alt="Circles Layout"
        className="absolute left-0 top-0 z-10 w-[37.19rem] h-[16.63rem] overflow-hidden mix-blend-soft-light"
      />
      <img
        src={bottomLayout}
        alt="Circles Layout"
        className="absolute right-0 bottom-0 z-10 w-[37.19rem] h-[15.31rem] overflow-hidden opacity-[0.39] mix-blend-soft-light"
      />
      <div className="flex justify-between w-[80%] z-20">
        <div className="">
          <img src={logo} alt="Logo" className="mt-12" />
          <p className="mb-24">© 2023 CAD. All rights reserved</p>
        </div>
        <div className="flex gap-6 mt-12">
          <div className="text-sm">
            <strong className="text-[1rem] uppercase font-bold">
              order website
            </strong>
            <div className="capitalize mt-2 flex flex-col">
              <a href="/">framework</a>
              <a href="/">online store</a>
              <a href="/">business card site</a>
              <a href="/">corporate website</a>
              <a href="/">landing Page</a>
            </div>
          </div>
          <div className="text-sm">
            <strong className="text-[1rem] uppercase font-bold">
              marketing
            </strong>
            <div className="capitalize mt-2 flex flex-col">
              <a href="/">framework</a>
              <a href="/">online store</a>
              <a href="/">business card site</a>
              <a href="/">corporate website</a>
              <a href="/">landing Page</a>
            </div>
          </div>
          <div className="text-sm">
            <strong className="text-[1rem] uppercase font-bold">
              services
            </strong>
            <div className="capitalize mt-2 flex flex-col">
              <a href="/">framework</a>
              <a href="/">online store</a>
              <a href="/">business card site</a>
              <a href="/">corporate website</a>
              <a href="/">landing Page</a>
            </div>
          </div>
          <div className="text-sm text-right">
            <strong className="text-[1rem] uppercase font-bold">
              our contacts
            </strong>
            <div className="capitalize mt-2">
              <p>Schedule:</p>
              <p>Mon-Fri: 09:00 - 21:00</p>
              <p>Sat-Sun: 10:00 - 18:00</p>
              <p>&nbsp;</p>
              <p>SOCIAL NETWORKS</p>
              <div className="flex justify-end gap-3 items-center mt-1">
                <a href="/">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="w-[1.56rem] h-[1.56rem] object-cover"
                  />
                </a>
                <a href="/">
                  <img
                    src={facebookLogo}
                    alt="Facebook"
                    className="w-[1.56rem] h-[1.56rem] object-cover"
                  />
                </a>
                <a href="/">
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    className="w-[1.75rem] h-[1.75rem] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
