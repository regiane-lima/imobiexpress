import styled from "styled-components"

export const Container = styled.div`
width:24%;
margin-bottom:12px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

`

export const Img = styled.div`
width:100%;
img{
    width:100%;
    height:auto;
}
`

export const Description = styled.div`
padding:12px;
a{
    display:flex;
    justify-content:space-between;
    aling-items:center;
}
h4{
    font-size:0.9rem;
    font-weight:600;
    margin-bottom:10px;

}
`
export const Itens = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;

span{
    margin-bottom:10px;
    
}
`

 export const Title = styled.div``