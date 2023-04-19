import styled from "styled-components"

export const Container = styled.div`
padding: 25px 150px;
height: 100px;
display: flex;
justify-content:space-between;
align-items:center;
background-color:black;
a:visited {
    color: white;
}

`
export const Logo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;


Link{
    width:240px;
    height:130px;
    padding-bottom:60px;
    
}
`
export const Menu = styled.div`
ul{
    display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
background-color: DarkBlue;
color:white;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

}
li{
    padding: 9px;
    span{
        font-size:1.2 rem;
        font-weight:bold;
    }
    
    &:hover{
       background-color: MediumBlue;
       color: white;
       cursor:pointer;
       border-radius: 20px;
       box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
}
`