import styled from "styled-components"
import React from "react";

export type IButtonProps = {
    width : number;
    height : number;
    margin : number;
    padding : number;

    fontColor : string;
    fontSize : number;

    ref : any;
    onClick : ()=> void;
    disabled : boolean;

    theme : any;
};

const Button : any = ({
    width,
    height,
    margin,
    padding,

    fontColor,
    fontSize,

    ref,
    onClick,
    disabled = false,

    theme,

    ...props
} : IButtonProps) => {
    
    return (
        <BtnContainer 
            width = {width} 
            height = {height}
            margin = {margin}
            padding = {padding}

            fontColor = {fontColor}
            fontSize = {fontSize}

            ref={ref}
            >
            <Btn
                onClick={onClick}
            />
        </BtnContainer>
    );
}

const BtnContainer = styled.div<Partial<IButtonProps>>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};

    color: ${({ fontColor }) => fontColor};
    font-size: ${({ fontSize }) => fontSize};
`;
const Btn = styled.button`
    cursor: pointer;
`;


export default Button;