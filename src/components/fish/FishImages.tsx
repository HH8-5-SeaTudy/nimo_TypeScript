import fish01 from "../../assets/fish/fish01.png";
import fish02 from "../../assets/fish/fish02.png";
import fish03 from "../../assets/fish/fish03.png";
import fish04 from "../../assets/fish/fish04.png";
import fish05 from "../../assets/fish/fish05.png";
import fish06 from "../../assets/fish/fish06.png";
import fish07 from "../../assets/fish/fish07.png";
import fish08 from "../../assets/fish/fish08.png";
import fish09 from "../../assets/fish/fish09.png";
import fish10 from "../../assets/fish/fish10.png";
import fish11 from "../../assets/fish/fish11.png";
import fish12 from "../../assets/fish/fish12.png";
import fish13 from "../../assets/fish/fish13.png";
import fish14 from "../../assets/fish/fish14.png";
import fish15 from "../../assets/fish/fish15.png";
import fish16 from "../../assets/fish/fish16.png";
import fish17 from "../../assets/fish/fish17.png";
import fish18 from "../../assets/fish/fish18.png";
import fish19 from "../../assets/fish/fish19.png";
import fish20 from "../../assets/fish/fish20.png";
import fish21 from "../../assets/fish/fish21.png";
import fish22 from "../../assets/fish/fish22.png";
import fish23 from "../../assets/fish/fish23.png";
import fish24 from "../../assets/fish/fish24.png";
import fish25 from "../../assets/fish/fish25.png";

export type IFishImages = {
  fishName: string;
  image: string;
  point: number;
};

const fishImages: IFishImages[] = [
  { fishName: "황금니모", image: fish01, point: 0 },
  { fishName: "아추어", image: fish02, point: 5 },
  { fishName: "빨간도미", image: fish03, point: 10 },
  { fishName: "파랑멸치", image: fish04, point: 15 },
  { fishName: "망둥어", image: fish05, point: 20 },
  { fishName: "잉어킹", image: fish06, point: 25 },
  { fishName: "줄돔", image: fish07, point: 30 },
  { fishName: "엔젤구피", image: fish08, point: 35 },
  { fishName: "갸라도스", image: fish09, point: 40 },
  { fishName: "레인보우잉어", image: fish10, point: 50 },
  { fishName: "썽난우럭", image: fish11, point: 60 },
  { fishName: "핑크움파룸파인척하는메기", image: fish12, point: 7 },
  { fishName: "챔치", image: fish13, point: 80 },
  { fishName: "뽈라그", image: fish14, point: 90 },
  { fishName: "까매기", image: fish15, point: 100 },
  { fishName: "초록매실", image: fish16, point: 120 },
  { fishName: "알비노어", image: fish17, point: 140 },
  { fishName: "흰동가리", image: fish18, point: 160 },
  { fishName: "얼룩범붕어", image: fish19, point: 180 },
  { fishName: "기여어", image: fish20, point: 200 },
  { fishName: "지그러", image: fish21, point: 220 },
  { fishName: "블루구라미", image: fish22, point: 240 },
  { fishName: "쏨뱅이", image: fish23, point: 260 },
  { fishName: "레인보우열대어", image: fish24, point: 280 },
  { fishName: "장미금붕어", image: fish25, point: 400 },
];

export default fishImages;
