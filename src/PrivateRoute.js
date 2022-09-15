import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from './components/social/Cookie';

function PrivateRoute({ component: Component }) {
  const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJobGltOTAyMkBuYXZlci5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYzNjUwNDQ1fQ.1g1W6xLDm_smLYVmRHi_KtR1aCbsDLTYqSH0BZ23ag8"
  return token 
  ? (Component) 
  : (<Navigate to="/login" {...alert("로그인이 필요한 페이지입니다.")} />);
}

export default PrivateRoute;