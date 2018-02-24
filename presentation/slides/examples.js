import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export default (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Let's jump into some examples!
    </Heading>

    <Text textColor={style.textColor} margin="100px 0">
      <p>
        <Link
          href="https://reactjs.org/"
          target="_blank"
          textColor={style.textColor}
        >
          <i className="fa fa-external-link" /> reactjs.org
        </Link>
      </p>
    </Text>

    <Text {...style.textProps} textColor={style.heading}>
      Note: Most React code samples utilize ECMAScript 2015+ language features.
      React's API maximizes use of the JavaScript language to allow the cleanest
      possible code.
    </Text>

  </Slide>
);
