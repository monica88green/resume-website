import React , { useState } from "react";


export default function ContactMe() {

let [ready, setReady] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setReady(true);
  }
  if (ready === false) {
    return (
      <div>
     <a href="/" onClick={handleClick}> + Contact Me </a>
    </div>
    )
     } else {
  return (
     <div className="ContactMe">
        <p>
          I am seeking employment or a full time paid internship today. If you are interested in setting up an interview please  <a href= "mailto: monica88green@gmail.com">Email me</a> or message me on <a href="/">LinkedIn</a>
        </p>
      </div>
  )
  }
  }