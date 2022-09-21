import styled from "styled-components";
import { StringLiteral } from 'typescript';


export type IInputProps = {
  width : string;
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
  onChange : ()=> void;

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
    ref,

    
    }: Partial<IInputProps>) => {

    return (
        <Inputs
        type={type} 
        onChange={onChange} 
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
`