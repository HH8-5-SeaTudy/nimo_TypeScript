import styled from "styled-components";
import { IButtonProps } from "../api";

export const Button = ({
  width,
  height,
  margin,
  padding,

  display,
  alignItems,
  justifyContent,

  border,
  borderRadius,

  fontColor,
  fontSize,

  ref,

  children,
  onClick,
  disabled = false,

  theme,

  ...props
}: Partial<IButtonProps>) => {
  return (
    <BtnContainer
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      fontSize={fontSize}
      ref={ref}
      borderRadius={borderRadius}
      border={border}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Btn onClick={onClick}>{children}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div<Partial<IButtonProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
`;
const Btn = styled.button`
  cursor: pointer;
`;

export default Button;
