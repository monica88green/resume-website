import React, { useState } from "react";

export default function AboutMe() {
let [ready, setReady] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setReady(true);
  }
  if (ready === false) {
    return (
      <div>
     <a href="/" onClick={handleClick}> + About Me </a>
    </div>
    )
     } else {
  return (
     <div className="AboutMe">
        <p>
          Originally from Southern California but I call beautiful Colorado home. I spend as much time as possible outdoors exploring trails and mountain sides. When I'm not outdoors I love cooking and working on various crafting projects. 
        </p>
      </div>
  )
} 
  }