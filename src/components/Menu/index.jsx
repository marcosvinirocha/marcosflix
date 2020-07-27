import React from "react";
import Logo from "../../assets/logo.png";
import "./Menu.css";
// import ButtonLink from "../ButtonLink";
import { Button } from "../Button";

// import { Container } from './styles';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
