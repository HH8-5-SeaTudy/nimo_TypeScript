import styled from "styled-components";
import { IGridProps } from "../api";

const Grid = ({
  width,
  height,
  margin,
  padding,

  display,
  alignItems,
  justifyContent,

  border,
  borderRadius,

  background,
  backgroundColor,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,

  fontColor,
  fontSize,

  ref,
  onClick,
  disabled = false,

  children,
  cursor,

  theme,

  ...props
}: Partial<IGridProps>) => {
  return (
    <GridContainer
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
      background={background}
      backgroundColor={backgroundColor}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
      cursor={cursor}
      onClick={onClick}
      children={children}
    ></GridContainer>
  );
};

const GridContainer = styled.div<Partial<IGridProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  color: ${({ fontColor }) => fontColor};

  background: ${({ background }) => background};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: ${({ backgroundPosition }) => backgroundPosition};

  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};

  cursor: ${({ cursor }) => cursor};
`;

export default Grid;

//  width: 60%;
//   height: 100%;
//   border: 13px solid yellow;
//   background: url(${fishbowl});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 50% 50%;
