import React from "react";
import { Appear, Heading, Image, Link, Slide, Text } from "spectacle";
import npmtrends from "../../assets/npmtrends.png";

export default (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Why use React instead of Angular?
    </Heading>

    <Text {...style.textProps}>
      <b>Simplicity</b> — "React is a library. Angular is a framework."
      React's learning curve is easier because it does less. Many features
      baked into Angular are instead provided by additional libraries. Less
      code to transfer to the browser.
    </Text>

    <Appear>
      <Text {...style.textProps}>
        <b>Flexibility</b> — Angular is more opinionated on how you should do
        things. React is less so, allowing the community to come up with best
        practices and options. Its narrower scope gives room for the community
        to innovate.
      </Text>
    </Appear>

    <Appear>
      <Text {...style.textProps}>
        <b>JavaScript focused</b> — Angular relies on TypeScript and
        special Angular-specific attributes in HTML templates; components are
        split into multiple files. React components focus on JS with JSX for
        markup, colocated in one file. It's easier to debug React because
        there's less "magic."
      </Text>
    </Appear>

  </Slide>
);

export const vsAngular2 = (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Why use React instead of Angular?
    </Heading>

    <Text {...style.textProps} margin="0.8em 0">
      <b>Popularity</b> — React's immense popularity provides a wealth of
      resources: add-on libraries, tools, and learning materials.
    </Text>

    <Link
      textColor={style.textColor}
      target="_blank"
      href="http://www.npmtrends.com/angular-vs-react-vs-vue-vs-@angular/core"
    >
      <Image src={npmtrends} />
    </Link>

    <Text textColor={style.textColor} textSize="24" margin="1em 0 0 0">
      For more info:{" "}
      <Link
        target="_blank"
        textColor={style.heading}
        href="https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176"
      >
        <b>Angular vs. React vs. Vue: A 2017 comparison</b>
      </Link>
    </Text>

  </Slide>
);
