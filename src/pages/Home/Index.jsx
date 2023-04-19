import React from 'react'
import Card from '../../components/Cards/Index'
import { Header, Wrapper } from './styles'

export default function Index() {
    let Cards = [];
    for (let i = 0; i < 3; i++) {
        Cards.push(<Card key={i} />)
    }
    return (
        <div>
            <Header>
                <h2>Seu sonho tem um endereço, e nós realizamos ele!</h2>
            </Header>
            <Wrapper>
                <Card />
                {Cards}
            </Wrapper>
        </div>
    )
}

