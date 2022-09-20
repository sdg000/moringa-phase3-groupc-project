import React, {useState, useEffect} from "react";
import { BrowserRoute, Routes, Route } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainContent/MainComponent";
import Navbar from "./components/navbar/Navbar";
import RegStudent from "./components/RegStudent/RegStudent";
import CreateGrade from "./components/CreateGrade/CreateGrade";

function App() {
  // contain all student Instances
  const [students, setStudents] = useState([])

  const [createStudentResults, setCreateStudentResults] = useState([])

  

  // pass createStudentResults to <ShowStudent/> component
  console.log(createStudentResults, "live in app")

  //anytime system loads, fetch all Student Instances.
  //use useEffect to load and save all students in app, pass to <CreateGrade/>  to be mapped and provide Student subjects based on their
  useEffect(() =>{
    fetch("http://localhost:9292/students")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      // console.log(data)
      // pass data as props to <CreateGrade/>
      setStudents(data)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainComponent/>}>
          </Route>

          <Route path="/register-students" element={<RegStudent setCreateStudentResults={setCreateStudentResults}/>}>
          </Route>

          <Route path="/grade-subject" element={<CreateGrade students={students}/>}>
          </Route>



          

        </Routes>
    </div>
  );
}

export default App;
