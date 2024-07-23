import styled from "styled-components";





 export const Button=styled.button`
 background-color: white;
 border:1px solid black;
 color:black;
display: flex;
justify-content: center;
color: white;
padding: 10px 18px;
background-color: #000;
border-radius: 5px;
min-width: 220px;
border:none;
transition: 0.3s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border:1px solid #000;
    color:black;
    transition: 0.3s background ease-in;
}

`


;



export const OutlineButton=styled(Button)`

&:hover{
    background-color: black;
    border:1px solid transparent;
    color:white;
    transition: 0.3s background ease-in;
}

`
