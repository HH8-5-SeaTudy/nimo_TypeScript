import fish01 from "../../assets/fish/fish01.png";
import fish02 from "../../assets/fish/fish02.png";
import fish03 from "../../assets/fish/fish03.png";
import { EnumFishs } from "../../enum/EnumFishs";
import styled from "styled-components";

type Ifish = {
  type: EnumFishs;
};

const Fishs: any = ({ type, ...props }: Partial<Ifish>) => {
  console.log(type, EnumFishs.Nimo);
  if (type === EnumFishs.Nimo) {
    return <Nimo />;
  } else if (type === EnumFishs.BlowFish) {
    return <BlowFish />;
  } else if (type === EnumFishs.SunFish) return <SunFish />;
};

export default Fishs;

const Nimo = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const BlowFish = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish02});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const SunFish = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish03});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;
