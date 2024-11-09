import React from "react";
import Nike from "../assets/banner/Nike.png";

function Banner() {
  return (
    <div className="h-60%">
      <div className="h-[100%]">
        <img
          className="h-auto w-[100%] md:h-[60%] sm:h-[60%]"
          src={Nike}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Banner;
