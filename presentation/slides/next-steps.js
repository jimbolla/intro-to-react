import React from "react";
import { Heading, Link, ListItem, List, Slide } from "spectacle";

const links = [
  {
    href: "https://babeljs.io/learn-es2015",
    desc: "Learn the latest JavaScript language features"
  },
  {
    href: "https://reactjs.org",
    desc: "Learn the fundamentals of React via the 'Get Started' and 'Take the Tutorial' pages."
  },
  {
    href: "https://fullstackreact.com/30-days-of-react",
    desc: "Learn some intermediate and advanced React concepts."
  },
  {
    href: "https://github.com/facebook/create-react-app",
    desc: "Learn more about the React ecosystem and build pipeline via the User Guide."
  }
];

export default (style) => (
  <Slide transition={["slide"]} bgColor={style.bgColor}>

    <Heading fit caps lineHeight={1} textColor={style.heading}>
      Next steps: Learning React & Ecosystem
    </Heading>

    <List textColor={style.textColor}>

      {links.map((link) => (
        <ListItem key={link.href} textSize={28}>
          <Link
            href={link.href}
            target="_blank"
            textColor={style.heading}
          >
            {link.href}
          </Link>
          <p style={{ marginLeft: 37, marginTop: 5, marginBottom: 30 }}>
            {link.desc}
          </p>
        </ListItem>
      ))}

    </List>
  </Slide>
);
