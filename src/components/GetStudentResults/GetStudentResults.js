import React, {useState, useEffect} from "react";
import "./GetStudentResults.css";


// takes in all student's data as prop from <Apps/>
function GetStudentResults({setStudentTermResults}){
    const [academic_year, setAcademic_year] = useState("")
    const [term, setTerm] = useState("")
    const [index_no, setIndexNo] = useState("")
    const [level, setLevel] = useState("")

    // function to find student's subjects and prefill subject_id form
    // function getSubjects(index){
    //     setIndexNo(index)
    //     let student = students.find(item => item.index_no === parseInt(index))
        
    //        let subjectLists = student.subjects.map((item) =>{
    //             return(
    //                 <option key={item.id}>{item.subject_name}</option>
    //             )
    //         })
    //         setSubjects(subjectLists)
        
    // }

    // function to post grade to server
    function submitGrade(e){
        e.preventDefault()

        const formdata = {
            academic_year: academic_year,
            term: term,
            index_no: index_no,
            level: level
        }
        console.log(formdata)
        let url = new URL("http://localhost:9292/getstudentgrades")
        for (let i in formdata) {
            url.searchParams.append(i, formdata[i])
        }
        // console.log(url)
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            setStudentTermResults(data)
        })

    }



    return(
        <form onSubmit={submitGrade}>
            <h2>FIND STUDENT GRADES</h2>
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
            <select type="integer" value={term} onChange={(e) => setTerm(e.target.value)} >
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/>
            <label>Index Number: </label>
            <input type="integer"  value={index_no} onChange={(e) => setIndexNo(e.target.value)}/>
            <br/>
            <label>Level: </label>
            <select type="integer" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/>
            <input className="grade__btn" type="submit" value="Find Grades " />
        </form>
    )

}
export default GetStudentResults;
