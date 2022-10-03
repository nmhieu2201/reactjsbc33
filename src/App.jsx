import React from "react";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import DemoDataBinding from "./DataBinding/DemoDatabinding/DemoDataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import ProductList from "./Props/DemoProps/ProductList";
import RenderArrComponent from "./RenderArrayComponent/RenderArrComponent";
import HeaderLogin from "./StateDemo/HeaderLogin";
import StateDemo from "./StateDemo/StateDemo";
import StyleDemo from "./StyleDemo/StyleDemo";
import ShoesApp from "./Props/ShoesApp/ShoesApp";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import ExerciseCarStore from "./Props/ExserciseCarStore/ExerciseCarStore";
import DemoChildrenProps from "./Props/DemoChildrenProps/DemoChildrenProps";
import { Outlet } from "react-router-dom";
import HeaderHome from "./Components/HeaderHome/HeaderHome";
export default function App() {
  return (
    <div>
      <HeaderHome />
      {/** //Outlet là vị trí hiển thị Components Route con */}
      <div style={{ minHeight: "800px" }}>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
}
