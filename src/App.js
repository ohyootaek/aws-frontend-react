import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Main from "./pages/Main";
import BlogHeader from "./components/BlogHeader";
import Sidebar from "./components/SideBar";
import "./styles/common.css";

function App() {
  return (
    <div className="container">
      <BlogHeader />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
