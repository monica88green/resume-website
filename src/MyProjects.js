import React, { useState } from "react";

export default function MyProjects() {
let [ready, setReady] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setReady(true);
  }
  if (ready === false) {
    return (
      <div>
     <a href="/" onClick={handleClick}> + My Projects </a>
    </div>
    )
     } else {
  return (
     <div className="MyProjects">
       <h4>
         Check out my latest<a href= "https://keen-sammet-47635f.netlify.app/" target="_blank" rel="noreferrer"> React Weather App  </a>
       </h4>
       <p>
         Or, check out my first <strong>Vanilla JS Project,</strong> <a href="https://loving-raman-d491d4.netlify.app/" target="_blank" rel="noreferrer">Here</a>
       </p>
       
      </div>
  )
} 
  }