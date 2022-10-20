import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="links">
        <a href="https://github.com/LEE012896" target="_blank" rel="noreferrer">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eunki-lee/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            alt="linkedin"
          />
        </a>
        <a href="mailto:dldmsrl1996@gmail.com">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/email.png"}
            alt="email"
          />
        </a>
      </div>
      <p>Created by Ethan Eunki Lee | © twentytwentytwo</p>
    </div>
  );
};

export default Footer;
