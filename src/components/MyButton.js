import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 10rem;
    color: ${(props) => (props.color? props.color : "#3498db")};
    font-size: 3rem;
    font-weight: 900;
    border: 5px solid ${(props) => (props.color? props.color : "#3498db")};
    padding : 1rem;
    border-radius: 1rem;
    margin-right: 10px;
    &:hover{
        background-color: ${(props) => (props.color? props.color : "#3498db")};
        color: white;
    }
`

const MyButton = ({text, color}) =>{
    return (
        <StyledButton text={text} color={color}>{text}</StyledButton>
    )
};

export default MyButton;

