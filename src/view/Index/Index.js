"use-strict";

import React from "react";
import View from "../View";
import ProgressBar from "../component/ProgressBar";
import AbsoluteView from "../component/AbsoluteView";
import Text from "../component/Text";

class Index extends View {
  /**
   * Method for Start the View
   * @returns none
   * @example
   * view.startView();
   */
  startView() {
    super.renderView();
    // setTimeoutWithCallback((_) => {}, this._navigateToHome, TIME_LONG);
  }

  /**
   * Generate string markup for rendering
   * @returns none
   */
  _generateMarkup() {}

  /**
   * Generate view or markup for rendering
   * @returns none
   */
  _generateMarkupView() {
    return (
      <>
        <AbsoluteView position="middlecenter" padding="0 0 99px 0">
          <Text
            text="BeeJs"
            fontSize="24px"
            margin="10px"
            textAlign="center"
            animation = "3s fade linear"
          />
          <Text
            text="Made By Bee Team"
            textAlign="center"
            fontSize="10px"
            animation = "fade 3s 3s linear forwards"
            opacity = "0"
          />
        </AbsoluteView>
      </>
    );
  }

  _navigateToHome() {
    window.location.href = "/home";
  }
}

export default new Index();
