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
  { id: 0, image: fish01, fishName: "황금니모", point: 0 },
  { id: 1, image: fish02, fishName: "아추어", point: 5 },
  { id: 2, image: fish03, fishName: "빨간도미", point: 10 },
  { id: 3, image: fish04, fishName: "파랑멸치", point: 15 },
  { id: 4, image: fish05, fishName: "망둥어", point: 20 },
  { id: 5, image: fish06, fishName: "잉어킹", point: 25 },
  { id: 6, image: fish07, fishName: "줄돔", point: 30 },
  { id: 7, image: fish08, fishName: "엔젤구피", point: 35 },
  { id: 8, image: fish09, fishName: "갸라도스", point: 40 },
  { id: 9, image: fish10, fishName: "레인보우잉어", point: 50 },
  { id: 10, image: fish11, fishName: "썽난우럭", point: 60 },
  { id: 11, image: fish12, fishName: "핑크메기", point: 7 },
  { id: 12, image: fish13, fishName: "챔치", point: 80 },
  { id: 13, image: fish14, fishName: "뽈라그", point: 90 },
  { id: 14, image: fish15, fishName: "까매기", point: 100 },
  { id: 15, image: fish16, fishName: "초록매실", point: 120 },
  { id: 16, image: fish17, fishName: "알비노어", point: 140 },
  { id: 17, image: fish18, fishName: "흰동가리", point: 160 },
  { id: 18, image: fish19, fishName: "얼룩범붕어", point: 180 },
  { id: 19, image: fish20, fishName: "기여어", point: 200 },
  { id: 20, image: fish21, fishName: "지그러", point: 220 },
  { id: 21, image: fish22, fishName: "블루구라미", point: 240 },
  { id: 22, image: fish23, fishName: "쏨뱅이", point: 260 },
  {
    id: 23,
    fishName: "레인보우열대어",
    image: fish24,
    point: 280,
  },
  { id: 24, fishName: "장미금붕어", image: fish25, point: 400 },
];

export default fishImages;
