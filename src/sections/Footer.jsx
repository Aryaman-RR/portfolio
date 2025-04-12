import React from "react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="bottom-0 w-full z-50 bg-black/90 c-space pt-1 pb-1 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
    >
      <div className="text-white-500 flex gap-2">
        <p>Let's Connect</p>
        {/* <p>|</p>
        <p>Privacy Policy</p> */}
      </div>
      <div className="flex gap-3">
        <div
          className="social-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://www.instagram.com/aryaman_ranjit_?utm_source=qr&igsh=ZmdxMWpvOGlxZW9p",
              "_blank"
            );
          }}
        >
          <img
            src="/assets/icons/instagram-icon.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
        <div
          className="social-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/aryaman-ryan-ranjit-b14826194/",
              "_blank"
            );
          }}
        >
          <img
            src="/assets/icons/linkedin-icon.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </div>

        {/* <div className="social-icon" onClick={() => {window.open('https://github.com/Aryaman-RR', '_blank')}}>
          <img
            src="/assets/icons/github-icon.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
