import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/Nav';
import MainComponent from "./component/maincontert/MainComponent"

function App() {


  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<MainComponent/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
