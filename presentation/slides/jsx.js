import React from "react";
import {
  BlockQuote,
  CodePane,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide
} from "spectacle";

import ew from "../../assets/ew.gif";

export default (style) => (
  <Slide transition={["spin"]} bgColor={style.bgColor}>

    <Layout>

      <Fill>

        <Heading caps lineHeight={1} textColor={style.heading}>
          JSX
        </Heading>

        <BlockQuote>
          <Quote textColor={style.textColor}>
            HTML in my JavaScript?!
          </Quote>
        </BlockQuote>
      </Fill>

      <Fill>
        <Image src={ew} />
      </Fill>

    </Layout>
  </Slide>
);

const code = `var items = [
  'Actually not "Ew!"',
  'Optional but recommended syntax'
  // etc...
];

var jsx = (
  <div>
    <h1>JSX — Declarative JavaScript</h1>
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

var root = document.getElementById('root');
ReactDOM.render(jsx, root);`;

export const jsx2 = (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      JSX — Declarative JavaScript
    </Heading>

    <Layout>

      <Fill>
        <List>
          <ListItem {...style.textProps}>
            Actually not "Ew!"
          </ListItem>
          <ListItem {...style.textProps}>
            Optional but recommended syntax
          </ListItem>
          <ListItem {...style.textProps}>
            Looks like HTML, but outputs JS objects (React elements)
          </ListItem>
          <ListItem {...style.textProps}>
            Allows React to detect changes to efficiently apply to the DOM
          </ListItem>
          <ListItem {...style.textProps}>
            Safe by default; prevent XSS attacks
          </ListItem>
        </List>
      </Fill>

      <Fill>
        <CodePane source={code} lang="jsx" textSize="18" margin="1em 0" />
      </Fill>

    </Layout>

  </Slide>
);
