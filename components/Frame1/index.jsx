import "./Frame1.css"
import React from "react";

function Frame1(props) {
  const { rejoice, tonyAllenHughMas, className } = props;

  return (
    <div className={`frame-1-B7WdcB ${className || ""}`}>
      <div className="rejoice-2tGHxl border-class-1 wendyone-normal-white-20px">{rejoice}</div>
      <div className="tony-allen-hugh-mas-2tGHxl border-class-1 wendyone-normal-stack-14px">{tonyAllenHughMas}</div>
    </div>
  );
}

export default Frame1;
