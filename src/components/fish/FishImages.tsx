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
  id: number;
  fishName: string;
  image: string;
  point: number;
};

const fishImages: IFishImages[] = [
  { id: 0, fishName: "goldNimo.png", image: fish01, point: 0 },
  { id: 1, fishName: "아추어", image: fish02, point: 5 },
  { id: 2, fishName: "빨간도미", image: fish03, point: 10 },
  { id: 3, fishName: "파랑멸치", image: fish04, point: 15 },
  { id: 4, fishName: "망둥어", image: fish05, point: 20 },
  { id: 5, fishName: "잉어킹", image: fish06, point: 25 },
  { id: 6, fishName: "줄돔", image: fish07, point: 30 },
  { id: 7, fishName: "엔젤구피", image: fish08, point: 35 },
  { id: 8, fishName: "갸라도스", image: fish09, point: 40 },
  { id: 9, fishName: "레인보우잉어", image: fish10, point: 50 },
  { id: 10, fishName: "썽난우럭", image: fish11, point: 60 },
  { id: 11, fishName: "핑크메기", image: fish12, point: 7 },
  { id: 12, fishName: "챔치", image: fish13, point: 80 },
  { id: 13, fishName: "뽈라그", image: fish14, point: 90 },
  { id: 14, fishName: "까매기", image: fish15, point: 100 },
  { id: 15, fishName: "초록매실", image: fish16, point: 120 },
  { id: 16, fishName: "알비노어", image: fish17, point: 140 },
  { id: 17, fishName: "흰동가리", image: fish18, point: 160 },
  { id: 18, fishName: "얼룩범붕어", image: fish19, point: 180 },
  { id: 19, fishName: "기여어", image: fish20, point: 200 },
  { id: 20, fishName: "지그러", image: fish21, point: 220 },
  { id: 21, fishName: "블루구라미", image: fish22, point: 240 },
  { id: 22, fishName: "쏨뱅이", image: fish23, point: 260 },
  { id: 23, fishName: "레인보우열대어", image: fish24, point: 280 },
  { id: 24, fishName: "장미금붕어", image: fish25, point: 400 },
];

export default fishImages;
