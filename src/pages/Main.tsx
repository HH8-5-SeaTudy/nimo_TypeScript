import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __deleteTodo, __doneTodo, __getDateTodo } from '../redux/modules/dateTodos';
import { __getUserProfile } from '../redux/modules/userData';

const Main = () => {
  const dispatch = useAppDispatch();
  const [todoShow,setTodoShow] = useState(false)

  //오늘 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month  + '-' + day;


  useEffect(() => {
    dispatch(__getUserProfile());
    dispatch(__getDateTodo(dateString));
  }, []);

  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

  const userProfile = useAppSelector(
    (state) => state.userData.userProfile);
  
  console.log(dateTodos)
  

  return (
    <Layer>
      <ProfileBox><img src={userProfile.defaultFish} alt="" /></ProfileBox>
      <InfoBox>
        <ProfileName>{userProfile.nickname}</ProfileName>
        <ProfileTime>{userProfile.point}P</ProfileTime>
        <ProfileGroup onClick={()=>setTodoShow(!todoShow)}>Todo</ProfileGroup>
      </InfoBox>
      <TodoBox style={{paddingTop: todoShow ? '72px' : '0px'}}>
        <TodoListBox >
          <Todo style={{height: todoShow ? '30px' : '0px'}}>TODAY'S TODO</Todo>
          {dateTodos &&
            dateTodos.map((list) => list.todoList 
            ? list.todoList.map((item)=> 
            <Todo key={item.todoId} style={{height: todoShow ? '30px' : '0px'}}>
              <Done>
                <div onClick={() =>dispatch(__doneTodo(item.todoId))}
                style={{backgroundColor:item.done === 1? "#32de5d": "transparent" }}></div>
              </Done>
              <Title style={{fontSize:todoShow ? '10px' : '0px'}}>{item.content}</Title>
              <Delete onClick={() =>
              dispatch(__deleteTodo({todoId: item.todoId,categoryId: list.categoryId,}))}><div>+</div></Delete>
            </Todo>)
            : <Todo style={{height: todoShow ? '30px' : '0px'}}>등록된 TODO가 없습니다.</Todo> 
            )}
        </TodoListBox>
      </TodoBox>
    </Layer>
  );
};

export default Main;

const Layer = styled.div`
   border: solid red 1px;
   width: 250px;
   height: 150px;
   display:flex;
   align-items: center;
`

const ProfileBox = styled.div`
border: solid blue 1px;
  width:115px;
  height:115px;
  border-radius: 50%;
  border: solid white 3px;
  background-color: #0096FF;
  z-index:3;
  display: flex;
  align-items: center;
  justify-content: center;
  img {  
    width: 80px;
    height: 70px;
    padding: 5px;
  }
`
const InfoBox = styled.div`
  border: solid red 1px;
  width:170px;
  height:85px;
  position: absolute;
  left: 65px;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 45px;
  background-color: #ff9100;
  z-index:2;
  text-align: center;
`

const ProfileName =styled.div`
  border: solid red 1px;
  width: 70%;
  height: 30%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ProfileTime = styled.div`
  border: solid red 1px;
  width: 80%;
  height: 30%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ProfileGroup = styled.div`
  border: solid red 1px;
  width: 70%;
  height: 30%;
  border-radius: 10px 10px 0 0 ;
  display:flex;
  justify-content: center;
  align-items: center;
`
const TodoBox = styled.div`
  border: solid red 4px;
  width: 190px;
  position: absolute;
  left: 25px;
  top: 50px;
  transition: all  0.5s;
  z-index: 1;
`
const TodoListBox = styled.div`
  border: solid red 6px;
  height: 100%;
  width: 100%;
`
const Todo = styled.div`
  border: solid red 1px;
  height: 30px;
  width: 100%;
  display: flex;
  transition: all 0.5s;
`
const Done = styled.div`
    border: solid red 1px;
    height: 100%;
    width: 13%;
    display:flex;
    align-items: center;

    div{
      border: solid red 1px;
      height:20px;
      width:20px;
      border-radius: 50%;
      border: solid black 1px;
    }
`
const Title = styled.div`
     border: solid red 1px;
     height: 100%;
    width: 75%;
`
const Delete =styled.div`
  border: solid red 1px;
  height: 100%;
  width: 13%;
  display:flex;
    align-items: center;
  div {
    display:flex;
    align-items: center;
    justify-content:center;
    border: solid red 1px;
      height:20px;
      width:20px;
      border-radius: 50%;
      border: solid black 1px;
      transform: rotate(45deg);
  }
`