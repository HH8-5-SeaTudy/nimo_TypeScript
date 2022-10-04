import styled from "styled-components";
import KaKaoLogoSrc from "../../assets/LoginSvg/kakaotalk_sharing_btn_small.png";
import NaverLogoSrc from "../../assets/LoginSvg/btnG_Naver.png";
import GoogleLogoSrc from "../../assets/LoginSvg/icon-google.png";

export const KaKaoLoginButtonContainer = styled.div`
  background-color: #ffeb00;
  border-radius: 5px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const KaKaoLogo = styled.div`
  box-shadow: 0.3px 0.3px 0.3px 0.3px lightgrey;
  background-image: url(${KaKaoLogoSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  margin: 0 20px;
`;
export const KaKaoKor = styled.div`
  width:50%;
  height: 30px;
  font-size: 36px;
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.x4l};
  margin-left: 30px;
`;

export const NaverLoginButtonContainer = styled.div`
  background-color: #03c75a;
  border-radius: 5px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;

`;

export const NaverLogo = styled.div`
  box-shadow: 0.3px 0.3px 0.3px 0.3px lightgrey;
  background-image: url(${NaverLogoSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  margin: 0 20px;
`;
export const NaverKor = styled.div`
  width:50%;
  height: 30px;
  font-size: 36px;
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.x4l};

  margin-left: 30px;
`;

export const GoogleLoginButtonContainer = styled.div`
  background-color: #dee2e6;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GoogleLogo = styled.div`
  background-image: url(${GoogleLogoSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  margin: 0 20px;
  box-shadow: 0.3px 0.3px 0.3px 0.3px darkgrey;
`;
export const GoogleKor = styled.div`
  width:50%;
  height: 30px;
  font-size: 36px;
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.x4l};

  margin-left: 30px;
`;
