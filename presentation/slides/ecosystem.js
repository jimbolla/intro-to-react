import React from "react";
import { Heading, Text, Slide } from "spectacle";

export default (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      The React Ecosystem
    </Heading>

    <Text {...style.textProps}>
      <b>Node</b> — A JavaScript runtime environment, in which the most JS
      tools will run.
    </Text>

    <Text {...style.textProps}>
      <b>Babel</b> — Transpiles modern JavaScript (ECMAScript 2015 and up)
      into browser compatible JavaScript. Includes polyfills.
    </Text>

    <Text {...style.textProps}>
      <b>Webpack</b> — Bundles JavaScript and other assets for efficient
      distribution over the web. Includes optimizations such as minification,
      unused code removal, and code splitting.
    </Text>

  </Slide>
);

export const ecosystem2 = (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      The React Ecosystem
    </Heading>

    <Text {...style.textProps}>
      <b>Jest + Enzyme</b> — Automated testing tools for Javascript and React.
    </Text>

    <Text {...style.textProps}>
      <b>Create React App</b> — A build tool for React apps that hides most of
      the dependencies and configuration work, including Babel, Webpack, Jest,
      Enzyme, and much more.
    </Text>

    <Text {...style.textProps}>
      <b>React Router</b> — A React library for creating Single Page
      Applications.
    </Text>

  </Slide>
);
