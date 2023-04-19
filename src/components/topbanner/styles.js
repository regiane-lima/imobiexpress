import styled from "styled-components"

export const Container = styled.div`
padding:50px 150px ;
position: relative;
background-size: cover;
background-position:center;
background-image: url('https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

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


`

export const Text = styled.div`

width: 55%;
position:relative;
z-index:1;
h2{
   color:white; 
   font-size:62px;
   margin-bottom:15px;
}

p{
    color:white;
    font-size:1em;
}
`