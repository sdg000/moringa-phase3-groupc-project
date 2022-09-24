import React, {useState, useEffect} from "react";
import { BrowserRoute, Routes, Route } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainContent/MainComponent";
import Navbar from "./components/navbar/Navbar";
import RegStudent from "./components/RegStudent/RegStudent";
import CreateGrade from "./components/CreateGrade/CreateGrade";
import GetStudentResults from "./components/GetStudentResults/GetStudentResults"
import DisplayStudent from "./components/DisplayStudent/DisplayStudent";
import DisplayStudentResults from "./components/DisplayStudentResults/DisplayStudentResults";

function App() {
  // contain all student Instances
  const [students, setStudents] = useState([])
  const [singleStudentHeader, setSingleStudentHeader] = useState("")


  //contain all student Instances
  const [createStudentResults, setCreateStudentResults] = useState([])

  // conntains student results fetched by <GetStudentResults/> to be passed to <DisplayStudent/> to display student's term results.
  const [studentTermResults, setStudentTermResults ] = useState([])
  // console.log(studentTermResults, "from app")

  

  // pass createStudentResults to <ShowStudent/> component
  // console.log(createStudentResults, "live in app")
  // let index = `${createStudentResults.index_no}`

  //anytime system loads, fetch all Student Instances.
  //use useEffect to load and save all students in app, pass to <CreateGrade/>  to be mapped and provide Student subjects based on their
  useEffect(() =>{
    fetch("https://glacial-escarpment-22310.herokuapp.com/students")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      // console.log(data)
      // pass data as props to <CreateGrade/>
      setStudents(data)
      // console.log(students)
    })
  }, [])

  // console.log(students)

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainComponent/>}>
          </Route>

          <Route path="/register-students" element={<RegStudent setCreateStudentResults={setCreateStudentResults} createStudentResults={createStudentResults}/>}>
          </Route>

          <Route path="/grade-subject" element={<CreateGrade students={students}/>}>
          </Route>

          <Route path="/student-term-results" element={<GetStudentResults setStudentTermResults={setStudentTermResults}/>}>
          </Route>

          <Route path="/students/:index" element={<DisplayStudent createStudentResults={createStudentResults}/>}>
          </Route>

          <Route path="/term-grades/students/:index" element={<DisplayStudentResults studentTermResults={studentTermResults} />}>
          </Route>






          

        </Routes>
    </div>
  );
}

export default App;
