import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color:#1b1b1b;
    font-family: 'inter' ,sans-serif;
    margin-top:4rem;
    
}

button{
    font-size:bold;
    background-color:transparent;
    outline:none;
    color:white;
    cursor: pointer;
    border: 3px solid #23d997;
    padding: 0.8rem 1.8rem;
    transition: all 0.5s ease;
    &:hover{
        background-color:#23d997;
    }
}
h2{
    font-weight:lighter;
    font-size:3rem;
}
p{
    font-size:1.1rem;
    color: #ccc;
    line-height: 150%;

}

span{
    font-weight: bold;
    color:#23d997; 
}

`;

export default GlobalStyle;
