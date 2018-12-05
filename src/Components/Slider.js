import React from "react";

import Carousal from "./Carousal";
import Countdown from "./Countdown";

const Slider = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousal />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <Countdown />
    </div>
  );
};

export default Slider;
