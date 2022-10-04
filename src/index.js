import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import ReactFormDemo from "./pages/ReactFormDemo";
import Student from "./pages/Student";
import HookUseState from "./pages/HookUseState";
import ReactLifecicle from "./pages/ReactLifecicle/ReactLifecicle";
import { Provider } from "react-redux";
import { store } from "./Components/redux/configStore";
import TangGiamFontSize from "./pages/DemoRedux/TangGiamFontSize/TangGiamFontSize";
import BaiTapChonXeRedux from "./pages/DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux";
import Products from "./pages/Products/Products";
import Cart from "./pages/Products/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="detail" element={<Detail />}></Route>
          <Route path="formdemo" element={<ReactFormDemo />}></Route>
          <Route path="student" element={<Student />}></Route>
          <Route path="hookstate" element={<HookUseState />}></Route>
          <Route path="reactlifecycle" element={<ReactLifecicle />}></Route>
          <Route path="baitapchonxe" element={<BaiTapChonXeRedux />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="tanggiamfont"
            element={<TangGiamFontSize />}
          ></Route>{" "}
          <Route path="*" element={<Navigate to="" />}></Route>
          {/* <Route path="*" element={<Page404 />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
