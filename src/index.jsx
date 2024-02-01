import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import { AlertComponent } from "./components/AlertComponent";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Header from "./components/HomeLayout/Header";
import Databinding from "./components/Databinding/Databinding";
import StyleComponent from "./components/StyleComponents/StyleComponent";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import StateDemoComponent from "./components/StateDemoComponent/StateDemoComponent";
import ChangeColor from "./components/StateDemoComponent/ChangeColor";
import ChangeAvatar from "./components/StateDemoComponent/ChangeAvatar";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại : function component, class component
root.render(
  <div>
    {/* <AlertComponent/> */}
    {/* <Card/>  */}
    {/* <HomeLayout />  */}
    {/* <Databinding /> */}
    {/* <StyleComponent /> */}
    {/* <HandleEvent /> */}
    {/* <StateDemoComponent /> */}
    {/* <ChangeColor /> */}
    <ChangeAvatar />
  </div>
);
  