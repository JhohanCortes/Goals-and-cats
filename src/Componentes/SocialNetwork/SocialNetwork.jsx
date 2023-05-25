import React from "react";
import gitHub from "./recourses/gitHub.png";
import linkedin from "./recourses/linkedin.png";
import "./SocialNetwork.css"

const SocialNetwork = () => {
  return (
    <div id="networks">
        <a href="https://github.com/JhohanCortes" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jhohan-cortes-a314a8213/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
    </div>
  );
};

export default SocialNetwork;
