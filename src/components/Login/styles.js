import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:	white;


h2{
    font-size:30px;
}
p{
    font-size:1.2rem;
    margin-bottom:15px;
}
`
export const ContainerForm = styled.div`
padding:30px;
width:370px;
background-color:whitesmoke;
border:solid 1px grey;
text-align:center;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

`
export const Label = styled.div`
display:flex;
margin-bottom:10px;
margin-top:20px;
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
