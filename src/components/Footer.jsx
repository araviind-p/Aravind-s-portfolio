import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  const iconStyle = { color: "white" };
  return (
    <div className="footer-container">
      <div className="copyright">
        <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      </div>
      <div className="footer-links">
        <a href="https://github.com/araviind-p" target="_blank">
          <FaGithub style={iconStyle} />
        </a>
        <a href="https://instagram.com/araviind_p" target="_blank">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="mailTo:aravindparavind10@gmail.com" target="_blank">
          <GrMail style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
