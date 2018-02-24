import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export default (style) => (
  <Slide transition={["zoom"]} bgColor={style.bgColor}>

    <Heading caps lineHeight={1} textColor={style.heading}>
      Thanks
    </Heading>

    <Text textColor={style.heading} textSize="32">
      Source:{" "}
      <Link
        target="_blank"
        href="https://goo.gl/vrmUFZ"
        textColor={style.textColor}
      >
        https://goo.gl/vrmUFZ
      </Link>
    </Text>

    <Text margin="100px 0 0" textColor={style.textColor}>
      ——— Questions? ———
    </Text>

  </Slide>
);
