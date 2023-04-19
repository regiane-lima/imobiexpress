import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:	gainsboro;

h2{
    font-size:30px;
}
p{
    font-size:1.2rem;
    margin-bottom:15px;
}
`
export const ContainerForm = styled.div`
padding:40px;
width:370px;
background-color:white;
border:solid 1px grey;
text-aling:center;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

`
export const Label = styled.div`
display:flex;
margin-bottom:15px;
`

export const Form = styled.div`
width:100%;
margin-bottom:15px;
font-weight:500;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
