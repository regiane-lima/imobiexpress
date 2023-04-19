import React from 'react'
import Input from "../input"
import Button from "../button"
import { Container, ContainerForm, Form, Label } from './styles'

export default function Cadastro() {
    return (
        <Container>

          
            <ContainerForm>

            
            <h3>Crie a sua conta para acessar a plataforma </h3>
                <Form>
                    <Label> Nome</Label>
                    <Input type="text" placeholder="Informe o seu nome:" />
                    <Label> E-mail</Label>
                    <Input type="e-mail" placeholder="Informe o seu e-mail::" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Informe a sua senha:" />
                </Form>
                <Button>Cadastrar</Button>
            </ContainerForm>
        </Container>
    )
}
