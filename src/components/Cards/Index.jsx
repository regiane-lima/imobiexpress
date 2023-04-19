import React from 'react'
import { Container, Img, Description, Itens } from './styles'
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"
export default function Card() {
    return (
            <Container>
                <Img>
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </Img>
                <Description>
                    <h4>Apartamento</h4>
                    <Itens>
                        <span> <FaMapMarkerAlt /> Vila Buarque, São Paulo</span>
                        <span>R$ 3.700,00 /mês</span>
                        <span></span>
                    </Itens>
                    <a href="#">Detalhes<FaArrowRight /></a>
                </Description>
            </Container>
    )
}
