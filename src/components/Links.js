// src/components/Links.js
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github || "GitHub Link"}</a>
      <br />
      <a href={linkedin}>{linkedin || "LinkedIn Link"}</a>
    </div>
  );
}

export default Links;
