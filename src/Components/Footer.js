import React from "react";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <footer className="">
      <Fade delay={500}>
        <div className="font_righteous">The Venue</div>
        <div className="footer_copyright">&copy; 2018 All rights reserved.</div>
      </Fade>
    </footer>
  );
};

export default Footer;
