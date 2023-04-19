import React from 'react'
import { Fragment } from 'react'
import { Container, Item, Copy } from './styles'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoimg from "../../assets/logo.png"
export default function Footer() {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={logoimg} alt="" />
                    <p>CONTATOS E INFORMAÇÕES:</p>
                    <nav>
                        <li>
                            <span><FaFacebook size={32} /></span>
                            <span><FaInstagram size={32} /></span>
                            <span><FaWhatsapp size={32} /></span>
                        </li>
                    </nav>
                </Item>
                <Item>
                    <h3>Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Serviços</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>Copyright 2023 - Workiside Tecnologia All Rights Reserved</p>
                <ul>
                    <li><span>Termos de uso</span></li>
                    <li><span>Política de privacidade</span></li>
                    <li><span>Política de Cookies</span></li>

                </ul>

            </Copy>
        </Fragment>
    )
}
