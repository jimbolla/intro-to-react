import React from "react";
import { Appear, Heading, ListItem, List, BlockQuote, Cite, Quote, Slide } from "spectacle";

export default (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      What is React?
    </Heading>

    <BlockQuote>
      <Quote {...style.textProps}>
        React is a declarative, efficient, and flexible JavaScript library
        for building user interfaces.
      </Quote>
      <Cite textColor={style.heading}>
        reactjs.org
      </Cite>
    </BlockQuote>

    <Appear>
      <List textColor={style.textColor}>

        <ListItem {...style.textProps}>
          Created by Facebook — powers facebook.com
        </ListItem>

        <ListItem {...style.textProps}>
          Licensed under MIT License — safe for commercial use
        </ListItem>

      </List>
    </Appear>

  </Slide>
);
