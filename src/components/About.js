import React from "react";

function About(props) {
   const { github, linkedin } = props.links || {};
   const bio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
       {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <h1>Links</h1>
    <a href={github}> {github || "GitHub Link"}</a>
<br/>
    <a href={linkedin}>{linkedin || "LinkedIn Link"}</a>
    <br/>
    
    </div>
  );
}

export default About;
