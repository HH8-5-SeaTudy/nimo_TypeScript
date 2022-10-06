import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../../components/hooks/reduxHooks";
import { __deleteTodo, __doneTodo, __getDateTodo } from '../../redux/modules/dateTodos';
import { __getCheckOutTimer } from '../../redux/modules/timer';
import { __getUserProfile } from '../../redux/modules/userData';
import { deleteCookie, getCookie } from '../social/Cookie';

const ProfileHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [todoShow,setTodoShow] = useState(false)
  const [resData,setResData] = useState<any>([])
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const userProfile = useAppSelector(
    (state) => state.userData.userProfile);
  const todoData = resData?.filter((x:any)=> x.todoList.length === 0 ).length
  const totalTodo = resData?.map((x:any)=>x.categoryId).length

  //오늘 날짜
  const today = new Date();
  const year = today.getFullYear(); 
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month  + '-' + day;
  const token: string = getCookie("token") as string;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  
  const TodoData = async () => {
    return await axios
    .get(`${BASE_URL}/api/v1/todoCategories/dates?selectDate=${dateString}`,
      {
        headers: {
          Authorization: token,
        },
      })
    .then((res) => {
      setResData(res.data.data)
    })
  };

function onClickLogOut  ()  {
    dispatch(__getCheckOutTimer());
    deleteCookie("token");
    navigate("/login");
  };

  useEffect(()=> {
    if(token !== undefined) {
      TodoData()
    }
  },[token,dateTodos])

  useEffect(() => {
    if(token !== undefined) {
    dispatch(__getUserProfile());
    dispatch(__getDateTodo(dateString));
    }
  }, [token]);



  return (
    <Layer>
      <ProfileBox onClick={() => {navigate("/unlock")}}>
        <img src={userProfile.defaultFish} alt="" />
      </ProfileBox>
      <InfoBox>
        <ProfileName>{userProfile.nickname}</ProfileName>
        <ProfileTime>{userProfile.totalStudy}</ProfileTime>
        <ProfileGroup onClick={()=>setTodoShow(!todoShow)}>TODO</ProfileGroup>
      </InfoBox>
      <LogoutBtn onClick={onClickLogOut}>LOGOUT</LogoutBtn>
      <TodoBox style={{paddingTop: todoShow ? '70px' : '0px'}}>
        <TodoList style={{height: todoShow ? '40px' : '0px',backgroundColor:'#ff9100'}}><p>TODAY'S TODO</p></TodoList>
        <TodoListBox >
          {resData &&
            resData.map((list:any) => list.todoList.map((item:any)=> 
            <Todo key={item.todoId} style={{height: todoShow ? '30px' : '0px'}}>
              <Done>
                <div onClick={() =>dispatch(__doneTodo(item.todoId))}
                style={{backgroundColor:item.done === 1? "#32DE5D": "transparent" }}></div>
              </Done>
              <Title style={{fontSize:todoShow ? '10px' : '0px'}}><p>{item.content}</p></Title>
              <Delete onClick={() =>
              dispatch(__deleteTodo({todoId: item.todoId,categoryId: list.categoryId,}))}><div>x</div></Delete>
            </Todo>)
            )}
            {todoData === totalTodo ? <Todo style={{height: todoShow ? '30px' : '0px'}}>등록된 TODO가 없습니다.</Todo> : null}
        </TodoListBox>
      </TodoBox>
    </Layer>
  );
};

export default React.memo(ProfileHeader);

const Layer = styled.div`
   position: relative;
   width: 320px;
   height: 150px;
   display:flex;
   align-items: center;
   padding-top: 40px;
`

const ProfileBox = styled.div`
  width:115px;
  height:115px;
  border-radius: 50%;
  border: solid white 5px;
  background-color: #00D7FE;
  z-index:3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {  
    width: 80px;
    height: 70px;
    padding: 5px;
  }
`
const InfoBox = styled.div`
  width:230px;
  height:85px;
  position: absolute;
  left: 65px;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 45px;
  border: solid white 5px;
  z-index:2;
  text-align: center;
  background-color: #0096FE;
  color:white;
  font-size: 20px;
`
const LogoutBtn =styled.div`
border: solid white 3px;
position: absolute;
background-color: red;
border-radius: 10px 10px 0 0 ;
left: 64%;
top:20%;
width:25%;
height:30%;
color:white;
text-align:center;
font-size: 20px;
line-height: 19px;
cursor: pointer;
`
const ProfileName =styled.div`
  width: 70%;
  height: 30%;
  display:flex;
  justify-content: center;
  align-items: center;

`
const ProfileTime = styled.div`

  width: 80%;
  height: 30%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ProfileGroup = styled.div`
  border-top: solid white 3px;
  border-left: solid white 3px;
  border-right: solid white 3px;
  width: 70%;
  height: 30%;
  border-radius: 10px 10px 0 0 ;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9100;
  cursor: pointer;
`
const TodoBox = styled.div`
  width: 240px;
  position: absolute;
  left: 40px;
  top: 65px;
  transition: all  0.5s;
  z-index: 1;
`
const TodoListBox = styled.div`
  height: 100%;
  width: 100%;
`
const Todo = styled.div`
  border-radius:20px;
  height: 30px;
  width: 100%;
  display: flex;
  transition: all 0.5s;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: white;  
  border-bottom: solid black 1px;
`
const Done = styled.div`
    height: 100%;
    width: 13%;
    display:flex;
      justify-content: center;
    align-items: center;
    text-align:center;
    div{

      height:20px;
      width:20px;
      border-radius: 50%;
      border: solid black 1px;
      cursor: pointer;
    }
`
const Title = styled.div`
    height: 100%;
    width: 75%;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    p{
      width: 100%;
      font-size: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`
const Delete =styled.div`
  height: 100%;
  width: 13%;
  display:flex;
      justify-content: center;
    align-items: center;
    text-align:center;
  div {
    display:flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    border: solid red 1px;
    height:20px;
    width:20px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 15px;
    border: solid black 1px;
    font-family: sans-serif;
    cursor:pointer;
  }
`
const TodoList =styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  transition: all 0.5s;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: white;  
  border-radius: 0 0 6px 6px;
  p {
    width: 90%;
    border-bottom: solid black 2px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin-bottom:2px;
  }
`