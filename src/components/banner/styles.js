import styled from "styled-components"


export const Container = styled.div`
padding:200px 150px;
position: relative;
background-size:cover;
background-position: center;
background-image: url('https://images.unsplash.com/photo-1635108201018-94bbbfac4a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
:before{
    background-color:rgba(0,0,0,.6);
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
}
a:visited {
    color: white;
}
`

export const Text = styled.div`
width:55%;
position:relative;
z-index:1;
h2{
    color:white;
    font-size:2em;
    font-weight: 700;
    margin-bottom:35px;
    
}
p{
    color:white;
    font-size:1em;
    margin-bottom:45px;
}
span{
background-color: DarkBlue;
color:white;
width:3em;
padding:10px;
border-radius:15px 50px;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
margin-top:50px;
cursor:pointer;
}

span:hover{
    background-color: MediumBlue;
}
`