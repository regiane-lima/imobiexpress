import { Link } from "react-router-dom"
import React from "react";
import { Container } from "./styles"
import { Logo } from "./styles"
import { Menu } from "./styles"
import logoImg from "../../assets/logo.png"
const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/"><img src={logoImg} alt="Logotipo imobiliaria IMOBIEXPRESS" /></Link>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link to="/Login">
              <span>
                Cadastro/Login
              </span>
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header
