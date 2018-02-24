import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";

import Presentation from "./presentation";

const montserrat = document.createElement("link");
montserrat.href = "https://fonts.googleapis.com/css?family=Montserrat:400,700";
montserrat.rel = "stylesheet";
document.head.appendChild(montserrat);

const fontawesome = document.createElement("script");
fontawesome.src = "https://use.fontawesome.com/c7a704e5bd.js";
document.head.appendChild(fontawesome);

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
