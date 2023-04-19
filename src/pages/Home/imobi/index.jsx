import React, { Fragment } from 'react'
import Input from "../../../components/input"
import Button from "../../../components/button"
import TextArea from '../../../components/TextArea/Index'
import TopBanner from '../../../components/topbanner'
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileForm, ProfileImg, Right, Thumb } from './styles'

export default function Imobi() {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </Thumb>
          <Description>
            <h2>Apartamento ImobiExpress</h2>
            <br></br>
            <p>A ImobiExpress oferece apartamentos de luxo com acabamentos e design sofisticados, localizados em áreas nobres das principais cidades do país. Esses imóveis possuem uma ampla gama de comodidades, como piscina, academia, segurança 24 horas, garagem privativa e uma vista panorâmica deslumbrante. Além disso, os apartamentos contam com espaços bem distribuídos e equipados, incluindo cozinhas modernas, banheiros elegantes e quartos espaçosos, garantindo o máximo conforto e bem-estar para os seus moradores.</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Regiane Lima</h3>
              <p>Descrição do usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>(11)90028922</p>
            <p>a-sábia.br@gmail.com</p>
          </ProfileContact>
          <ProfileForm>
            <h3>Contate o anunciante</h3>
            <form>
            <Input type="text" placeholder="Nome:" />
            <Input type="text" placeholder="E-mail" />
            <TextArea  placeholder="Mensagem" />
             <Button>Envie a sua mensagem</Button>
              
            </form>
          </ProfileForm>
        </Right>
      </Container>
    </Fragment>
  )
}
