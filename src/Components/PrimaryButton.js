import React from "react";
import { Button } from "@material-ui/core";

import ticket from "../resources/images/icons/ticket.png";

const PrimaryButton = ({ text, bck, color, link }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background: bck, color: color }}
    >
      <img src={ticket} alt="icon_image" className="iconImage" /> {text}
    </Button>
  );
};

export default PrimaryButton;
