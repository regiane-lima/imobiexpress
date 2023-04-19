import styled from "styled-components"

export const Container = styled.div`
display:flex;
gap:3em;
margin-top:2em;
padding-top:20px;
background-color:black;
color:white;
a:visited {
    color: white;
}


`
export const Item = styled.div`
img{
  width:200px;  
}
margin-left:4em;
h3, p{
    margin-bottom:10px;
}
ul{
    li{
        padding:10px 0px;
    }
}
nav{
   span{
    padding:15px;
   }
}

span:hover{
    background-color:Darkblue;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    cursor:pointer;
}

`
export const Copy = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding:20px 150px;
border-top:1px solid rgba(0,0,0,0.1);


ul{
    display:flex;
    align-items:center;
    li{
        span{
            margin-left:15px;
        }
    }
}

`
