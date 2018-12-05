import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    isSideDrawerOpen: false,
    isHeaderOnTheTop: true
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({ isHeaderOnTheTop: false });
      } else {
        this.setState({ isHeaderOnTheTop: true });
      }
    });
  };

  openSideDrawer = () => this.setState({ isSideDrawerOpen: true });
  closeSideDrawer = () => this.setState({ isSideDrawerOpen: false });

  render() {
    const { isSideDrawerOpen, isHeaderOnTheTop } = this.state;
    return (
      <AppBar
        position="fixed"
        style={{
          background: !isHeaderOnTheTop ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.openSideDrawer}
          >
            <Menu />
          </IconButton>
          <SideDrawer open={isSideDrawerOpen} close={this.closeSideDrawer} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
