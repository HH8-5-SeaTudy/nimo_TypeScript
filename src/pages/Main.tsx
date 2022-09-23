import React from 'react';
import styled from 'styled-components';
import CalendarVer2 from '../components/calendar/CalendarVer2';
import SideBarVer2 from '../components/sidebar/SideBarVer2';
const Main = () => {
  return (
    <Layer>
      <CalendarVer2 />
    </Layer>
  );
};

export default Main;

const Layer = styled.div `
`