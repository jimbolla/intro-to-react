import React from "react";
import { Heading, Link, ListItem, List, Slide } from "spectacle";

export default (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      More React Concepts
    </Heading>

    <List>
      <ListItem {...style.textProps}>
        Component lifecycle —{" "}
        <Link
          textColor={style.heading}
          target="_blank"
          href="https://reactjs.org/docs/react-component.html"
        >
          details
        </Link>
      </ListItem>
      <ListItem {...style.textProps}>
        Virtual DOM —{" "}
        <Link
          textColor={style.heading}
          target="_blank"
          href="https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
        >
          details
        </Link>
      </ListItem>
      <ListItem {...style.textProps}>
        React Developer Tools —{" "}
        <Link
          textColor={style.heading}
          target="_blank"
          href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
        >
          details
        </Link>
      </ListItem>
    </List>

  </Slide>
);
