import React from "react";
import { CodePane, Fill, Fit, Heading, Layout, Slide, Text } from "spectacle";

const code1 = `class ClickDemo extends React.Component {
  state = { clicks: 0 } // initialize state

  // function bind syntax - binds "this" to component
  handleButtonClick = () => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + 1
      };
    });
  }

  render() {
    const style = { whiteSpace: "nowrap", margin: "1em" };
    return (
      <div style={style}>
        <button onClick={this.handleButtonClick}>Click me</button>
        <div>Clicks: {this.state.clicks}</div>
      </div>
    );
  }
}`;

class ClickDemo extends React.Component {
  state = { clicks: 0 };

  handleButtonClick = () => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + 1
      };
    });
  };

  render() {
    const style = { whiteSpace: "nowrap", margin: "1em" };
    return (
      <div style={style}>
        <button onClick={this.handleButtonClick}>Click me</button>
        <div>Clicks: {this.state.clicks}</div>
      </div>
    );
  }
}

export default (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      Component State
    </Heading>

    <Layout>

      <Fill>
        <CodePane
          source={code1}
          lang="jsx"
          textSize="17"
          margin="1em 0"
          theme="light"
        />
      </Fill>

      <Fit>
        <ClickDemo />
      </Fit>

    </Layout>

  </Slide>
);

const code2 = `class RedditDemo extends React.Component {
  state = { posts: [] };

  async componentDidMount() {
    const url = "https://www.reddit.com/r/reactjs.json";
    const response = await window.fetch(url, { method: "GET" });
    const json = await response.json();
    const posts = json.data.children.slice(0, 10);
    this.setState({ posts });
  }

  render() {
    return (
      <div style={{ fontSize: 16, width: 250, margin: "1em" }}>
        {this.state.posts.map((post) => (
          <p key={post.data.id}>
            <a href={post.data.url}>{post.data.title}</a>
          </p>
        ))}
      </div>
    );
  }
}`;

class RedditDemo extends React.Component {
  state = { posts: [] };

  async componentDidMount() {
    const url = "https://www.reddit.com/r/reactjs.json";
    const response = await window.fetch(url, { method: "GET" });
    const json = await response.json();
    const posts = json.data.children.slice(0, 10);
    this.setState({ posts });
  }

  render() {
    return (
      <div style={{ fontSize: 16, width: 250, margin: "1em" }}>
        {this.state.posts.map((post) => (
          <p key={post.data.id}>
            <a href={post.data.url}>{post.data.title}</a>
          </p>
        ))}
      </div>
    );
  }
}

export const state2 = (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading caps fit lineHeight={1} textColor={style.heading}>
      Component with AJAX
    </Heading>

    <Layout>

      <Fill>
        <CodePane
          source={code2}
          lang="jsx"
          textSize="17"
          margin="1em 0"
          theme="light"
        />
      </Fill>

      <Fit>
        <RedditDemo />
      </Fit>

    </Layout>

  </Slide>
);
