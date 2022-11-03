import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from "./pages/Home/Home";
import Sidebar from './components/Sidebar';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {




    return (

      <BrowserRouter>
          <Sidebar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>

        </Routes>
          </Sidebar>
      </BrowserRouter>

  );
}

export default App;
