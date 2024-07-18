import logo from "../assets/logo.svg";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="flex flex-auto">
        <div className="footer-container-1" style={{ flexBasis: "20%"}}>
          <img
            src={logo}
            alt="footer-logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-container-2"></div>
        
      </div>

      <div className="flex flex-col flex-auto" style={{ flexBasis: "30%" }}>
        <div className="footer-container-3">
          <div className="p-8">
            <a
              href="https://www.youtube.com/channel/UC0RIlAnk_5jELvV8MclAvRg" target="_blank">

              <SlSocialYoutube
                size={35.5}
                className="footer-icon"/>
            </a>
          </div>

          <div className="p-8">
            <a href="https://www.instagram.com/cmf.tech/" target="_blank">
              <FaInstagram
                size={30}
                className="footer-icon"/>
            </a>
          </div>

          <div className="p-8">
            <a href="https://x.com/cmfbynothing" target="_blank">
              <FaXTwitter
                size={30}
                className="footer-icon"/>
            </a>
          </div>
        </div>

        <div className="footer-container-4">
          <ul className="flex flex-wrap">
            <li className="p-12">
              <a
                href="https://in.cmf.tech/pages/privacy-policy"
                className="footer-link"
              >
                PRIVACY POLICY
              </a>
            </li>

            <li className="p-12">
              <a
                href="https://in.cmf.tech/pages/user-agreement"
                className="footer-link"
              >
                USER AGREEMENT
              </a>
            </li>

            <li className="p-12">
              <a
                href="https://in.cmf.tech/pages/warranty-policy"
                className="footer-link"
              >
                WARRANTY POLICY
              </a>
            </li>

            <li className="pl-12">
              <a
                href="https://in.cmf.tech/pages/vulnerability-report"
                className="footer-link"
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
