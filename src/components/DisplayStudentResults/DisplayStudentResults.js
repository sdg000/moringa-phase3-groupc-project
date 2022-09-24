import React, {useState} from "react"
import {  useNavigate, useParams } from "react-router-dom"

function DisplayStudentResults({studentTermResults}){
    let navigate = useNavigate()

    const [info, setInfo] = useState([])
    // console.log(studentTermResults)



    let params = useParams()
    let student_index = parseInt(params.index)

    // sending fetch requests to obtain header information on student with student_index

    fetch(`https://glacial-escarpment-22310.herokuapp.com/students/${student_index}`)
    .then(function(response){
        return response.json()
    })
    .then(function(res){
        setInfo(res)
    })    

    let results = studentTermResults.map((item) => (
        <li key={item.id}>
            {item.academic_year} 
            Term {item.term} 
            {item.subject.subject_name} | 
            {item.exams_score} 
            <button>Edit Grade</button>
            <button>Delete Grade</button>
        </li>  
    )
    )

    function viewOtherGrades(){
        navigate("/student-term-results")

    }

  

    
    return (
        <div>
        <h1>Term Results</h1>
        <h2>  Student Name: {info.first_name} {info.last_name}. Index Number: {info.index_no} </h2>
        <ul>{results}</ul>
        <button onClick={viewOtherGrades}> View Other Grades</button>

        </div>
    )

    
}
export default DisplayStudentResults