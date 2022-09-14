import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ token, component: Component }) {
  return token 
  ? (Component) 
  : (<Navigate to="/login" {...alert("로그인이 필요한 페이지입니다.")} />);
}

export default PrivateRoute;