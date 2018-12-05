import React, { Component } from "react";
import { Zoom } from "react-reveal";

import PrimaryButton from "./PrimaryButton";

class Pricing extends Component {
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            <Zoom delay={500}>
              <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                    <span>$100</span>
                    <span>Balcony</span>
                  </div>
                  <div className="pricing_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque a quia fugiat soluta delectus eveniet sit facere optio
                    id necessitatibus.
                  </div>
                  <div className="pricing_buttons">
                    <PrimaryButton
                      text="Purchase"
                      bck="#ffa800"
                      color="white"
                      link="https://google.com"
                    />
                  </div>
                </div>
              </div>
            </Zoom>

            <Zoom>
              <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                    <span>$100</span>
                    <span>Balcony</span>
                  </div>
                  <div className="pricing_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque a quia fugiat soluta delectus eveniet sit facere optio
                    id necessitatibus.
                  </div>
                  <div className="pricing_buttons">
                    <PrimaryButton
                      text="Purchase"
                      bck="#ffa800"
                      color="white"
                      link="https://google.com"
                    />
                  </div>
                </div>
              </div>
            </Zoom>

            <Zoom delay={500}>
              <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                    <span>$100</span>
                    <span>Balcony</span>
                  </div>
                  <div className="pricing_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque a quia fugiat soluta delectus eveniet sit facere optio
                    id necessitatibus.
                  </div>
                  <div className="pricing_buttons">
                    <PrimaryButton
                      text="Purchase"
                      bck="#ffa800"
                      color="white"
                      link="https://google.com"
                    />
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
