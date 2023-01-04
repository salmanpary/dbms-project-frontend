import React from "react";
import Header from "../components/Header";
import TempMenu from "../components/TempMenu";
const menu = () => {
  return (
    // <Menu/>
    <>
    <Header propAuth={false}/>
    <TempMenu/>
    </>
  );
};

export default menu;
