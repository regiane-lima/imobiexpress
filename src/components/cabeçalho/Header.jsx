import React from "react";
import { Container } from "./styles"
import { Logo } from "./styles"
import { Menu } from "./styles"
import logoimg from "../../assets/logo.png"
const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logoimg}  alt="Logotipo imobiliaria IMOBIEXPRESS" />
      </Logo>
      <Menu>
        <ul>
          <li>
            <span>
              Cadastro/Login
            </span>
          </li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header
