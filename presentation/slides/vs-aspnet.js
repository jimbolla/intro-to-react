import React from "react";
import { Appear, Heading, Text, Slide } from "spectacle";

export default (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Why use React over ASP.NET MVC?
    </Heading>

    <Text {...style.textProps}>
      <b>Richer user experience</b> — A JS-based single page app just feels
      better to a user than a vanilla MVC app using postbacks. Offloading
      state management and display logic onto the client allows servers to
      be more performant. MVC needs to be augmented with a JS library such as
      jQuery to add dynamic behavior.
    </Text>

    <Appear>
      <Text {...style.textProps}>
        <b>Cleaner code</b> — MVC plus jQuery often ends up being hard to
        maintain due to the view markup and the corresponding jQuery code not
        being well encapsulated. jQuery code works directly on the DOM which
        is effectively global state, making the code harder to change with
        confidence. React encapsulates application state and its display logic
        into components.
      </Text>
    </Appear>

  </Slide>
);

export const vsAspnet2 = (style) => (
  <Slide transition={["fade"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Why use React over ASP.NET MVC?
    </Heading>

    <Text {...style.textProps}>
      <b>Testability</b> — Automated testing of ASP.NET MVC views requires
      spinning up a web server and a testing automation tool. React has a
      strong automated testing story. Lightweight tools like Jest and Enzyme
      allow developers to write fast-running tests.
    </Text>

    <Appear>
      <Text {...style.textProps}>
        <b>Popularity</b> — React is extremely popular and because of that,
        it has a large and growing ecosystem of libraries and tools that can be
        leveraged by app developers.
      </Text>
    </Appear>

    <Appear>
      <Text {...style.textProps}>
        <b>Code Separation</b> — Client vs Server. React makes it easier to
        change one w/o changing the other. Example uses: One UI consuming
        multiple microservices; supporting specialized developers; unique UI
        deploy for each tenant.
      </Text>
    </Appear>

  </Slide>
);
