import React from "react";
import { Heading, List, ListItem, Slide } from "spectacle";

export default (style) => (
  <Slide transition={["zoom"]} bgColor={style.bgColor}>

    <Heading caps lineHeight={1} textColor={style.heading}>
      Outline
    </Heading>

    <List>

      <ListItem {...style.textProps}>
        High-level overview of React.
      </ListItem>

      <ListItem {...style.textProps}>
        Benefits over alternatives (ASP.NET MVC and Angular).
      </ListItem>

      <ListItem {...style.textProps}>
        Whirlwind tour of React; examples and core concepts.
      </ListItem>

      <ListItem {...style.textProps}>
        Introduction to important projects in React ecosystem.
      </ListItem>

    </List>

  </Slide>
);
