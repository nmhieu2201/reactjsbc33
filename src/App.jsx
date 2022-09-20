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
export default function App() {
  return (
    <div>
      {/* <Home />
      <div className="d-flex">
        <div className="w-25">
          <Nav />
        </div>
        <div className="w-75">
          <Content />
        </div>
      </div>
      <Footer /> */}
      {/* <DemoDataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <HeaderLogin /> */}
      {/* <StyleDemo /> */}
      {/* <StateDemo /> */}
      {/* <RenderArrComponent /> */}
      {/* <ProductList /> */}
      <ShoesApp />
    </div>
  );
}
