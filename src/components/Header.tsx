import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>TypeScript, Bootstrap and React Notes App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
