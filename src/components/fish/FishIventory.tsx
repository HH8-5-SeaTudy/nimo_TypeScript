import React,{useEffect,useState,useRef} from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import fishImages from "../fish/FishImages";
import { __getUserProfile } from '../../redux/modules/userData';



const FishIventory = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData.userProfile);
  const userPoint = userData.point;

  console.log(userPoint)
  useEffect(() => {
    dispatch(__getUserProfile());
  }, []);


  return (
    <InvenLayer>
      {fishImages.map((data:any, index:any)=>{
          return (
            <>
              <FishBox >
                {userPoint >= data.point  ? 
                <Box draggable src={data.image}></Box>
                :<>           
                <BoxCover readOnly></BoxCover>
                <Box src={data.image}></Box>
                </>
                }
              </FishBox>
            </>
          )
      })}
    </InvenLayer>
  );
};

export default FishIventory;

const InvenLayer = styled.div`
border: solid blue 1px;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5);
grid-template-rows: calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5);
`
const FishBox =styled.div`
box-sizing: border-box;
position: relative;
cursor: pointer;
`
const Box = styled.img`
border: solid blue 1px;
width: 100%;
height: 100%;
box-sizing: border-box;
`
const BoxCover =styled.input`
position: absolute;
background-color: rgba(0,0,0,0.4);
border: solid blue 1px;
width: 100%;
height: 100%;
box-sizing: border-box;
outline: none;
border: none;
cursor: pointer;
`