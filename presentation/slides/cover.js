import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export default (style) => (
  <Slide transition={["zoom"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Intro to React
    </Heading>

    <Heading fit lineHeight={1} textColor={style.heading}>
      "A JavaScript library for building user interfaces"
    </Heading>

    <Heading fit margin="50px 0 0" textColor={style.heading}>
      March 2018 — Source:&nbsp;
      <Link
        href="https://github.com/jimbolla/intro-to-react/"
        target="_blank"
        textColor={style.textColor}
      >
        https://github.com/jimbolla/intro-to-react/
      </Link>
    </Heading>

    <Heading size={5} margin="100px 0 0" textColor={style.heading}>
      Jim Bolla
    </Heading>

    <Text textColor={style.textColor}>

      <Link href="https://github.com/jimbolla" textColor={style.textColor}>
        <i className="fa fa-github" />
      </Link>

      <Link href="https://twitter.com/jimbolla" textColor={style.textColor}>
        <i className="fa fa-twitter" />
      </Link>

      @jimbolla

    </Text>

  </Slide>
);
