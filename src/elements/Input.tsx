import styled from "styled-components";
import { StringLiteral } from 'typescript';


export type IInputProps = {
  width : any;
  height : string;
  margin : string;
  padding : string;
  display: string;
  border : string;
  borderRadius : string;
  defaultValue : string;
  type:string;
  placeholder:string;
  ref : any;
  onChange : (e:any)=> void;
  onClick:(e:any)=> void;
  fontSize: string;
  outline: string;
  transition:string;
  readOnly:boolean;
  value:any;
  color:string;
  fontWeight:string;
  cursor:string;
  backgroundColor:string;
};

const Input = ({
    border,
    borderRadius,
    width,
    height, 
    margin,
    padding,
    display,
    defaultValue,
    type,
    placeholder,

    onChange,
    onClick,
    ref,
    fontSize,
    outline,
    transition,
    readOnly,
    value,
    color,
    fontWeight,
    cursor,
    backgroundColor,
    }: Partial<IInputProps>) => {

    return (
        <Inputs
        type={type} 
        onChange={onChange} 
        onClick={onClick}
        ref={ref} 
        placeholder={placeholder} 
        defaultValue={defaultValue}
        border={border}
        borderRadius={borderRadius}
        width={width}
        height={height}
        margin={margin}
        padding={padding}
        display={display}
        fontSize={fontSize}
        outline={outline}
        transition={transition}
        readOnly={readOnly}
        value={value}
        color={color}
        fontWeight={fontWeight}
        cursor={cursor}
        backgroundColor={backgroundColor}
        />
    );
}


export default Input;

const Inputs = styled.input<Partial<IInputProps>>`
        border: ${({ border }) => border};
        border-radius: ${({ borderRadius }) => borderRadius};
        width: ${({ width }) => width};
        height: ${({ height }) => height};
        margin: ${({ margin }) => margin};
        padding: ${({ padding }) => padding};
        display:${({ display }) => display};
        font-size:${({ fontSize }) => fontSize};
        outline:${({ outline }) => outline};
        transition:${({ transition }) => transition};
        color:${({ color }) => color};
        font-weight:${({ fontWeight }) => fontWeight};
        background-color:${({ backgroundColor }) => backgroundColor};
        cursor:${({ cursor }) => cursor};
`