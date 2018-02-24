import React from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import cover from "./slides/cover";
import outline from "./slides/outline";
import whatIsReact from "./slides/what-is-react";
import examples from "./slides/examples";
import whatDoesItDo from "./slides/what-does-it-do";
import vsAspnet, { vsAspnet2 } from "./slides/vs-aspnet";
import vsAngular, { vsAngular2 } from "./slides/vs-angular";
import concepts from "./slides/concepts";
import jsx, { jsx2 } from "./slides/jsx";
import components, { components2, components3 } from "./slides/components";
import state, { state2 } from "./slides/state";

import ecosystem, { ecosystem2 } from "./slides/ecosystem";
import nextSteps from "./slides/next-steps";
import thanks from "./slides/thanks";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#2C3037",
    tertiary: "#3DD9F8",
    quarternary: "#5F636A"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const textProps = {
  textAlign: "left",
  textSize: 28,
  margin: "1em 0"
};

const dark = {
  bgColor: "secondary",
  textColor: "tertiary",
  heading: "primary",
  textProps: { ...textProps, textColor: "tertiary" }
};

const alt = {
  bgColor: "primary",
  textColor: "secondary",
  heading: "tertiary",
  textProps: { ...textProps, textColor: "secondary" }
};

const main = {
  bgColor: "tertiary",
  textColor: "secondary",
  heading: "primary",
  textProps: { ...textProps, textColor: "secondary" }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="number"
      >
        {cover(dark)}
        {outline(alt)}
        {whatIsReact(main)}
        {whatDoesItDo(alt)}
        {vsAspnet(main)}
        {vsAspnet2(main)}
        {vsAngular(alt)}
        {vsAngular2(alt)}

        {examples(dark)}
        {jsx(alt)}
        {jsx2(alt)}
        {components(main)}
        {components2(main)}
        {components3(main)}
        {state(alt)}
        {state2(alt)}
        {concepts(main)}


        {ecosystem(alt)}
        {ecosystem2(alt)}
        {nextSteps(main)}
        {thanks(dark)}
      </Deck>
    );
  }
}
