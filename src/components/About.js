import React from "react";
import Links from "./Links";

const mediaLinks = {
  github: "https://github.com/liza",
  linkedin: "https://www.linkedin.com/in/liza/",
};

function About(props) {
  if(!props.bio) {
    return null;
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={mediaLinks.github}/>
      <Links linkedin={mediaLinks.linkedin}/>
    </div>
  );
  }
}

export default About;
