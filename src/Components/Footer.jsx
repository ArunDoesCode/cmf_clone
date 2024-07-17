import React from "react";
import logo from "../assets/logo.svg";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      class="flex w-screen"
      style={{
        height: "60vh",
      }}
    >
      <div class="flex flex-auto">
        <div class="bg-green flex flex-col flex-auto items-center justify-end" style={{ flexBasis: "20%" , height: "100%"}}>
          <img
            src={logo}
            alt="footer-logo"
            class="object-scale-down h-20 w-auto mb-20 mr-20"
          />
        </div>

        <div class="bg-dark_grey flex-auto"></div>
      </div>

      <div class="flex flex-col flex-auto" style={{ flexBasis: "30%" }}>
        <div class="bg-green flex flex-auto h-1/2 items-center justify-end pr-28">
          <div class="p-8">
            <a
              href="https://www.youtube.com/channel/UC0RIlAnk_5jELvV8MclAvRg"
              target="_blank"
            >
              <SlSocialYoutube
                size={35.5}
                className="text-dark_grey hover:text-white transition-colors duration-200"
              />
            </a>
          </div>

          <div class="p-8">
            <a href="https://www.instagram.com/cmf.tech/" target="_blank">
              {" "}
              <FaInstagram
                size={30}
                className="text-dark_grey hover:text-white transition-colors duration-200"
              />
            </a>
          </div>

          <div class="p-8">
            <a href="https://x.com/cmfbynothing" target="_blank">
              {" "}
              <FaXTwitter
                size={30}
                className="text-dark_grey hover:text-white transition-colors duration-200"
              />
            </a>
          </div>
        </div>

        <div class="bg-half_white flex-auto h-1/2">
          <ul class="flex flex-wrap">
            <li class="p-12">
              <a
                href="https://in.cmf.tech/pages/privacy-policy"
                class="font-letteraMonoLL text-base hover:text-orange text-dark_grey"
              >
                PRIVACY POLICY
              </a>
            </li>

            <li class="p-12">
              <a
                href="https://in.cmf.tech/pages/user-agreement"
                class="font-letteraMonoLL text-base hover:text-orange text-dark_grey"
              >
                USER AGREEMENT
              </a>
            </li>

            <li class="p-12">
              <a
                href="https://in.cmf.tech/pages/warranty-policy"
                class="font-letteraMonoLL text-base hover:text-orange text-dark_grey"
              >
                WARRANTY POLICY
              </a>
            </li>

            <li class="pl-12">
              <a
                href="https://in.cmf.tech/pages/vulnerability-report"
                class="font-letteraMonoLL text-base hover:text-orange text-dark_grey"
              >
                VULNERABILITY REPORT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
