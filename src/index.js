import React from "react";
import ReactDOM from "react-dom/client"; // React 18의 새 import 방식
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement); // createRoot 사용

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
);
