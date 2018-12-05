import React, { Component } from "react";
import { Element } from "react-scroll";

// Components
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import VenueInfo from "./Components/VenueInfo";
import Highlights from "./Components/Highlights";
import Pricing from "./Components/Pricing";
import Location from "./Components/Location";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Element name="event_starts">
          <Slider />
        </Element>
        <Element name="venue_info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
