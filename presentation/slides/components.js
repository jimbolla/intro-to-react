import React from "react";
import {
  BlockQuote,
  Cite,
  CodePane,
  Heading,
  Quote,
  Slide,
  Text
} from "spectacle";

export default (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      Components
    </Heading>

    <BlockQuote>
      <Quote {...style.textProps}>
        Components let you split the UI into independent, reusable pieces, and
        think about each piece in isolation.<br /><br />
      </Quote>
      <Cite textColor={style.heading}>reactjs.org</Cite>
    </BlockQuote>

    <Text {...style.textProps}>
      Conceptually, components are like JavaScript functions. They accept
      arbitrary inputs (called “props”) and return React elements describing
      what should appear on the screen.
    </Text>

  </Slide>
);

const code1 = `class ProductView extends React.Component { // ← extend React.Component (ES2015 syntax)
  render() { // ← every component has a render() method.
    // ↓ properties passed into a component are accessible on "this.props"
    // ↓ code inside curly braces is full javascript.
    return (
      <div className="ProductView">
        <h3>{this.props.code + ' - ' + this.props.name}</h3>
        <div>Description: <b>{this.props.description}</b></div>
        <div>Price: <b>{this.props.price.toFixed(2)}</b></div>
      </div>
    );
    // ↑ return value is converted into React elements. React applies this to the DOM.
  }
}

var view = (
  <ProductView
    code="JMB-12345"
    name="Laptop"
    description="2018 edition"
    price={1599.98}
  />
);`;

export const components2 = (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      Anatomy of a (Class) Component
    </Heading>

    <CodePane
      source={code1}
      lang="jsx"
      textSize="17"
      margin="1em 0"
      theme="light"
    />

  </Slide>
);

const code2 = `// Prefer functional syntax for simple components that don't need a lifecycle:

// ↓ ES5 function syntax. "props" is function arg instead this.props
function ProductView(props) {
  return (
    <div className="ProductView">
      <h3>{props.code + ' - ' + props.name}</h3>
      <div>Description: <b>{props.description}</b></div>
      <div>Price: <b>{props.price.toFixed(2)}</b></div>
    </div>
  );
}
// ------------------------------------ OR ------------------------------------

// ↓ ES2015 function syntax. Slightly more terse version; no need for "return".
const ProductView = (props) => (
  <div className="ProductView">
    <h3>{props.code + ' - ' + props.name}</h3>
    <div>Description: <b>{props.description}</b></div>
    <div>Price: <b>{props.price.toFixed(2)}</b></div>
  </div>
);`;

export const components3 = (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      Anatomy of a (Functional) Component
    </Heading>

    <CodePane
      source={code2}
      lang="jsx"
      textSize="17"
      margin="1em 0"
      theme="light"
    />

  </Slide>
);
