import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import PrimaryButton from "./PrimaryButton";

class Highlights extends Component {
  state = {
    percentStarts: 0,
    percentEnds: 30
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      this.updatePercentage();
    }, 30);
  };

  updatePercentage = () => {
    if (this.state.percentStarts < this.state.percentEnds) {
      this.setState({
        percentStarts: this.state.percentStarts + 1
      });
    }
  };

  render() {
    return (
      <div className="highlight_wrapper">
        <Fade>
          <div className="center_wrapper">
            <h2>Highlights</h2>
            <div className="highlight_description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque officia ullam excepturi! Saepe, laborum molestias
              consequatur tempore vitae beatae, delectus laudantium, cupiditate
              nostrum blanditiis qui aliquid modi nihil aut consectetur dolorem
              fuga fugiat voluptatum. Illum autem fuga reprehenderit,
              accusantium illo, cupiditate dolore sit, aliquam ad voluptatibus
              adipisci praesentium quaerat libero.
            </div>
          </div>
        </Fade>

        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade onReveal={this.updatePercentage}>
              <div className="discount_porcentage">
                <span>{this.state.percentStarts}%</span>
                <span>OFF</span>
              </div>
            </Fade>

            <Slide right>
              <div className="discount_description">
                <h3>Purchase tickets before 20th JUNE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  quod doloremque doloribus assumenda officia culpa!
                </p>
                <div>
                  <PrimaryButton
                    text="Purchase tickets"
                    bck="#ffa800"
                    color="white"
                    link="https://google.com"
                  />
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlights;
