import React from "react";
// import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
