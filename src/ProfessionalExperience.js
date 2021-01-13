import React, { useState } from "react";

export default function ProfessionalExperience() {
let [ready, setReady] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setReady(true);
  }
  if (ready === false) {
    return (
      <div>
     <a href="/" onClick={handleClick}> + Professional Experience </a>
    </div>
    )
     } else {
  return (
     <div className="ProfessionalExperience">
        <h4>
          Assistant Director of Banquets, Omni Interlocken 
        </h4>
        <h6>October 2018 - March 2020</h6>
        <ul>
          <li>
            Oversee all daily operations of the Banquet Department
          </li>
          <li>
            Create and administer reviews
          </li>
          <li>
            Collaborate with all departments to ensure guest satisfaction
          </li>
        </ul>
        <h4>
          Banquet Captain, Omni Interlocken
        </h4>
        <h6>
          September 2014 - October 2018
        </h6>
        <h4>
          Banquet Server / Bartender, Omni Interlocken
        </h4>
        <h6>
          June 2010 - September 2014
        </h6>
      </div>
  )
} 
  }