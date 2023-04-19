import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
}
:root{
    --black: #333333;
    --secondary: #15181c;
    --gray: #D9D9D9;
    --blue: #4766FF;
    --white: #FFF
}

body{
    background-color: white; 
    color: var(--secondary);
    font-family: 'Dosis', sans-serif;
    font-size: 1.2rem;
        font-weight: 400;
}

ul, nav {list-style-type :none}
a{
    text-decoration: none;
}


`

