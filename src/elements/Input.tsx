import styled from "styled-components";
import { IInputProps } from "../api";

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
  overflow,
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
  fontFamily,
  textOverflow,
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
      fontFamily={fontFamily}
      overflow={overflow}
      textOverflow={textOverflow}
    />
  );
};

export default Input;

const Inputs = styled.input<Partial<IInputProps>>`
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  outline: ${({ outline }) => outline};
  transition: ${({ transition }) => transition};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ cursor }) => cursor};
  font-family: ${({ fontFamily }) => fontFamily};
  overflow: ${({ overflow }) => overflow};
  text-overflow: ${({ textOverflow }) => textOverflow};
`;
