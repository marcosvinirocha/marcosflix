import React from "react";
import Logo from "../../assets/logo.png";
import "./Menu.css";
import { Link } from "react-router-dom";
// import ButtonLink from "../ButtonLink";
import { Button } from "../Button";

// import { Container } from './styles';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
