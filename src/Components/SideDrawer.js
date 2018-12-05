import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = ({ open, close }) => {
  const onSidebarClickHandler = (element, slideClose) => () => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    slideClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={close}>
      <List component="nav">
        <ListItem button onClick={onSidebarClickHandler("event_starts", close)}>
          Event Starts In
        </ListItem>
        <ListItem button onClick={onSidebarClickHandler("venue_info", close)}>
          Venue INFO
        </ListItem>
        <ListItem button onClick={onSidebarClickHandler("highlights", close)}>
          Highlights
        </ListItem>
        <ListItem button onClick={onSidebarClickHandler("pricing", close)}>
          Pricing
        </ListItem>
        <ListItem button onClick={onSidebarClickHandler("location", close)}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
