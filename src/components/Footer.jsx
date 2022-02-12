import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdEmail } from "react-icons/md";
import { BsTelephone, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <br></br>
      <hr></hr>
      <div id="get-intouch">
        <div id="getintouch-head">GET IN TOUCH</div>
        <div id="getintouch-txt">
          I'm looking forward for new opportunities in full-stack web
          development.
        </div>
        <div id="social-media">
          <a href="">
            <BsTelephone class="scl-type" />
          </a>
          <MdEmail class="scl-type" />
          <a href="https://github.com/AnanthuSuresh098" target="blank">
            <BsGithub class="scl-type" />
          </a>
          <a
            href="https://www.linkedin.com/in/ananthu-suresh-2a166921b/"
            target="blank"
          >
            <BsLinkedin class="scl-type" />
          </a>
          <a href="https://twitter.com/Ananthusuresh55" target="blank">
            {" "}
            <BsTwitter class="scl-type" />
          </a>
        </div>
      </div>
      <p className="footer-text">
        <br></br>
        <small>All rights reserved © 2021 Tejaswi</small>
        <br></br>
        <small>Illustrations by undraw.co</small>
      </p>
    </div>
  );
};

export default Footer;
