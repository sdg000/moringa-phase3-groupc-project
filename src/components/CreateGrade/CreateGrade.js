import React, {useState, useEffect} from "react";
import "./CreateGrade.css";


// takes in all student's data as prop from <Apps/>
function CreateGrade({students}){
    const [subjects, setSubjects] = useState([])
    const [academic_year, setAcademic_year] = useState("")
    const [term, setTerm] = useState("")
    const [exams_score, setExamsScore] = useState("")
    const [subject_id, setSubject_id] = useState("") 
    const [index_no, setIndexNo] = useState("")
    const [level, setLevel] = useState("")

    // function to find student's subjects and prefill subject_id form
    function getSubjects(index){
        setIndexNo(index)
        let student = students.find(item => item.index_no === parseInt(index))
        
           let subjectLists = student.subjects.map((item) =>{
                return(
                    <option key={item.id}>{item.subject_name}</option>
                )
            })
            setSubjects(subjectLists)
        
    }

    // function to post grade to server
    function submitGrade(e){
        e.preventDefault()

        const formdata = {
            academic_year,
            term,
            exams_score,
            subject_id,
            index_no,
            level
        }
        console.log(formdata)
        
        fetch("http://localhost:9292/grade-subject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })

    }




    return(
        <form onSubmit={submitGrade}>
            <h2>SUBJECT GRADING FORM</h2>
            <br/>
            <label>Academic Year: </label>
            <select type="integer" value={academic_year} onChange={(e) => setAcademic_year(e.target.value)}>
                <option>2020-21</option>
                <option>2021-22</option>
                <option>2022-23</option>
                <option>2023-24</option>
                <option>2024-25</option>
                <option>2025-26</option>
                <option>2026-27</option>
                <option>2027-28</option>
                <option>2029-30</option>
            </select>
            <br/>
            <label>Term: </label>
            <select type="integer"  value={term} onChange={(e) => setTerm(e.target.value)} >
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/>
            <label>Index Number: </label>
            <input type="integer"  value={index_no} placeholder="Index number"  onChange={(e) => getSubjects(e.target.value)}/>
            <br/>
            <label>Level: </label>
            <select type="integer" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/>
            <label>Subject id: </label>
            <select type="text" value={subject_id} onChange={(e) => setSubject_id(e.target.value)}>
               {subjects}
            </select>
            <br/>
            <label>Exams score: </label>
            <input type="integer"  value={exams_score} placeholder="enter exams_score" onChange={(e) => setExamsScore(e.target.value)}/>
            <br/>
            <input className="grade__btn" type="submit" value="Grade Subject" />
        </form>
    )

}
export default CreateGrade;
