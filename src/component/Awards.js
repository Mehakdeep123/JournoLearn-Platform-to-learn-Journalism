import React from 'react'
import prize1 from"../assets/prize3.png";
import prize2 from"../assets/prize2.png";
import prize3 from"../assets/prize1.png";
import prize4 from"../assets/prize4.png";

export default function Awards() {
  return (
    <div>
      <div className="awards">
        <p className="awards-heading">ACHIEVEMENTS</p>
        <hr></hr>
        <div className="print-image">
          <img className="image-1" src={prize1} alt="prize"/>
          <img className="image-2" src={prize2} alt="prize"/>
          <img className="image-3" src={prize3} alt="prize"/>
          <img className="image-4" src={prize4} alt="prize"/>
        </div>
      </div>
    </div>
  )
}
