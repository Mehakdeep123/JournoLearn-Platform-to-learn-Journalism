import React from 'react'
import photo2 from "../assets/exp.jpg";
export default function Experience() {
  return (
    <div>
      <div className="introduction2">
        <div className="left-intro2">
          <div className="para2">
            <p className="exp">Experience</p>
            <ul className="exper">
              <li>Investigative reporting at The New York Times, exposing political corruption and corporate malfeasance.</li>
              <li>Transitioning to new endeavors, leveraging expertise in communications and media relations.</li>
              <li>Feature writing, crafting compelling human interest stories and cultural phenomena profiles.</li>
              <li>Embracing multimedia journalism, producing immersive storytelling experiences.</li>
              <li>Award-winning journalist, recipient of Pulitzer Prizes for investigative reporting and feature writing.</li>
            </ul>
            <button className="knowmore2">Know More</button>
          </div>
        </div>
        <div className="right-intro2">
          <img src={photo2} className="dp2" alt="Arun kumar" />
        </div>
      </div>
    </div>
  )
}
