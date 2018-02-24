import React from "react";
import { CodePane, Heading, Text, Slide } from "spectacle";

const code = `class HelloWorld extends React.Component {
  render() {
    return (<div>Hello {this.props.name}!</div>);
  }
}
ReactDOM.render(<HelloWorld name="Jim" />, document.getElementById('appRoot'));`;

export default (style) => (
  <Slide transition={["spin"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      What does React do?
    </Heading>

    <Text {...style.textProps}>
      React allows developers to express their UI as a function of app state. It
      provides an abstraction higher than direct DOM manipulation.
    </Text>

    <Text {...style.textProps}>
      Display logic is modularized into <b>components</b>. A component's main
      function is <b>render()</b>, which returns the desired markup to be
      applied to the browser's DOM.
    </Text>

    <Heading size={6} textColor={style.heading}>
      DOM = ComponentTree(AppState);
    </Heading>

    <CodePane
      source={code}
      theme="light"
      lang="jsx"
      textSize="20"
      margin="1em 0"
    />

  </Slide>
);
