import React from 'react'
import Input from "../input"
import Button from "../button"
import { Container, ContainerForm, Form, Label } from './styles'

export default function Logo() {
    return (
        <Container>

          
            <ContainerForm>

            
            <h3>Entre com o seu e-mail e a sua senha </h3>
                <Form>
                    <Label> E-mail</Label>
                    <Input type="text" placeholder="Informe o seu E-mail" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Informe a sua senha" />
                </Form>
                <Button>Fazer Login</Button>
            </ContainerForm>
        </Container>
    )
}
