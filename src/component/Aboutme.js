import React from "react";
import photo from "../assets/dp.jpg";
export default function Aboutme() {
  return (
    <div>
      <div className="hov"></div>
      <div className="line">
        <p className="aboutme">ABOUT ME</p>
        <hr></hr>
      </div>
      <div className="introduction">
        <div className="left-intro">
          <img className="dp" src={photo} alt="profile_pic" />
        </div>
        <div className="right-intro">
          <div className="wrapper">
            <div className="static-txt">
              I'm <span className="name">Arun Kumar</span>
            </div>
            <ul className="dynamic-txt">
              <li>
                <span>ex-Journalist</span>
              </li>
              <li>
                <span>Chief Editor</span>
              </li>
              <li>
                <span>Teacher</span>
              </li>
            </ul>
          </div>
          <div className="para">
            With over two decades in journalism, I've made a mark with
            insightful reporting and dedication to uncovering truth. Working for
            prestigious publications, I've covered topics from politics to human
            interest stories. With a keen eye for detail and a passion for
            storytelling, I've captivated readers with compelling narratives.
            Now, transitioning to new endeavors, I continue to inspire with my
            knowledge and commitment to excellence.As I embark on new ventures,
            I remain committed to upholding the highest standards of integrity
            and professionalism, and I look forward to continuing my journey of
            discovery and innovation in the ever-evolving world of media.
          </div>
          <button className="knowmore">Know More</button>
        </div>
      </div>
    </div>
  );
}
