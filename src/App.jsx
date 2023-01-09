import { useEffect, useState, Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContents from "./pages/MainContents";
import RenderGraph from "./pages/RenderGraph";
import CreatePage from "./pages/CreatePage/CreatePage";
import "./styles/global.css" 
import FrontPage from "./Components/FrontPage";
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/print" element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
