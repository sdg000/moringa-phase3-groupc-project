import React, {useState} from "react";
import { BrowserRoute, Routes, Route } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainContent/MainComponent";
import Navbar from "./components/navbar/Navbar";
import RegStudent from "./components/RegStudent/RegStudent";
import CreateGrade from "./components/CreateGrade/CreateGrade"

function App() {
  const [createStudentResults, setCreateStudentResults] = useState([])

  // pass createStudentResults to <ShowStudent/> component

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainComponent/>}>

          </Route>
          <Route path="/register-students" element={<RegStudent setCreateStudentResults={setCreateStudentResults}/>}>

          </Route>
          <Route path="//grade-subject" element={<CreateGrade/>}>

          </Route>

          

        </Routes>
    </div>
  );
}

export default App;
