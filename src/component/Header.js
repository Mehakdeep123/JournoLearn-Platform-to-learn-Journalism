import React from 'react'
import logo from "../assets/logo.png";
export default function Header() {
    const scrollToDiv = () => {
        const targetDivs = document.getElementsByClassName("line");
        if (targetDivs.length > 0) {
          const firstTargetDiv = targetDivs[0];
          firstTargetDiv.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
      <div className="header">
        <a href="/">
          <img className="logo-design" src={logo} alt="logo" />
        </a>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">News</a>
          <a href="/">Work</a>
          <a href="/">Contact</a>
          <a href="/">Courses</a>
        </div>
      </div>

      <div className="quoteliner">
        <p className="quote">Journalism is the first rough draft of history.</p>
        <p className="oneliner">Welcome! to my world of JOURNALISM....</p>
        <div>
          <button className="clickbutton" onClick={scrollToDiv}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
