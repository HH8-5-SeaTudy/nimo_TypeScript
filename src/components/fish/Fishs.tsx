import fish01 from "../../assets/fish/fish01.png";
import fish02 from "../../assets/fish/fish02.png";
import fish03 from "../../assets/fish/fish03.png";
import { EnumFishs } from "../../enum/EnumFishs";
import styled from "styled-components";

type Ifish = {
  type: EnumFishs;
};

const Fishs: any = ({ type, ...props }: Partial<Ifish>) => {
  // if (type === EnumFishs.Fish01) {
  //   return <Fish01 />;
  // } else if (type === EnumFishs.BigFish01) {
  //   return <BigFish01 />;
  // } else if (type === EnumFishs.Fish02) {
  //   return <Fish02 />;
  // } else if (type === EnumFishs.Fish03) return <Fish03 />;
  switch (type) {
    case EnumFishs.Fish01:
      return <Fish01 />;
    case EnumFishs.BigFish01:
      return <BigFish01 />;
    case EnumFishs.Fish02:
      return <Fish02 />;
    // case EnumFishs.Fish01:
    //   return <Fish01 />;
  }
};

export default Fishs;

const Fish01 = styled.div`
  width: 50px;
  height: 50px;
  background: url(${fish01});
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const BigFish01 = styled.div`
  width: 150px;
  height: 150px;
  background: url(${fish01});
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const Fish02 = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish02});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;

const Fish03 = styled.div`
  width: 50%;
  height: 50%;
  background: url(${fish03});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
`;
