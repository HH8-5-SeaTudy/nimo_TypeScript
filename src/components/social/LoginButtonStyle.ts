import styled from "styled-components";
import KaKaoLogoSrc from '../../assets/LoginSvg/kakaotalk_sharing_btn_small.png'
import NaverLogoSrc from '../../assets/LoginSvg/btnG_Naver.png'
import GoogleLogoSrc from '../../assets/LoginSvg/icon-google.png'

export const KaKaoLoginButtonContainer = styled.div`
    background-color : #ffeb00;
    border-radius : 5px;
    width : 300px;
    height : 50px;
    display : flex;
    align-items : center;
    cursor: pointer;
`;
export const KaKaoLogo = styled.div`
    background-image : url(${KaKaoLogoSrc});
    background-repeat : no-repeat;
    background-size : cover;
    width : 30px;
    height : 30px;
    margin : 0 20px;
`;
export const KaKaoKor = styled.div`
    width : 210px;
    height : 30px;
    font-size : 17px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`;

export const NaverLoginButtonContainer = styled.div`
    background-color : #03c75a;
    border-radius : 5px;
    width : 300px;
    height : 50px;
    display : flex;
    align-items : center;
    cursor: pointer;
`;

export const NaverLogo = styled.div`
    background-image : url(${NaverLogoSrc});
    background-repeat : no-repeat;
    background-size : cover;
    width : 45px;
    height : 45px;
    margin : 0 15px;
`;
export const NaverKor = styled.div`
    width : 210px;
    height : 30px;
    font-size : 17px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`;

export const GoogleLoginButtonContainer = styled.div`
    border : 1px solid #dee2e6;
    border-radius : 5px;
    width : 300px;
    height :50px;
    display : flex;
    align-items : center;
    cursor: pointer;
`;

export const GoogleLogo = styled.div`
    background-image : url(${GoogleLogoSrc});
    background-repeat : no-repeat;
    background-size : cover;
    width : 25px;
    height : 25px;
    margin : 0 20px;
`;
export const GoogleKor = styled.div`
    width : 210px;
    height : 30px;
    font-size : 17px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`;
