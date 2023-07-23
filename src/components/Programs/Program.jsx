import React from "react";
import "./Program.css";
import programData from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Expolre our</span>
        <span>Programs</span>
        <span className="stroke-text">to Shape You</span>
      </div>
      <div className="program-category">
        {programData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
