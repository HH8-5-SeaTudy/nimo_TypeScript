import React from "react";
import styled, { keyframes } from "styled-components";

import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";


export default function Login() {
  return (
      <Layer>
        <Left>
          <Image>이미지</Image>
        </Left>
        <Right>
          <TitleBox>
            <h1>
              로그인 로그아웃
            </h1>
          </TitleBox>
          <LoginBox>
            <LoginBtn>
                <Kakao />
              <Naver />
              <Google />
            </LoginBtn>
            
          </LoginBox>

        </Right>
        
      </Layer>

  );
}
const Layer = styled.section` 
border: solid red 1px;
width:100%;
height:100vh;
display:flex;

`
const Left = styled.div`
  border: solid red 3px;
  width:50%;
  padding-top: 15%;
`
const Image = styled.div`
  border: solid red 1px;
  width: 600px;
  height: 400px;
  margin: auto;
`
const Right = styled.div`
  border: solid red 1px;
  width:50%;
`
const TitleBox = styled.div`
  border: solid red 3px;
  height: 40%;
  padding-top: 200px;

  h1 {
    border: solid red 1px;
    font-size: 80px;
    text-align: center;
  }
`
const LoginBox = styled.div`
  border: solid red 3px;
  height: 60%;

`

const LoginBtn = styled.div`
  margin-top: 50px;
  border: solid red 1px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`