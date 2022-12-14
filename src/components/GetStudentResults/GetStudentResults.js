import React, {useState} from "react";
import "./GetStudentResults.css";
import { useNavigate } from "react-router-dom";


// takes in all student's data as prop from <Apps/>
function GetStudentResults({setStudentTermResults}){
    let navigate = useNavigate()
    const [academic_year, setAcademic_year] = useState("")
    const [term, setTerm] = useState("")
    const [index_no, setIndexNo] = useState("")
    const [level, setLevel] = useState("")


    // function to post grade to server
    function submitGrade(e){
        e.preventDefault()

        // const formdata = {
        //     academic_year: academic_year,
        //     term: term,
        //     index_no: index_no,
        //     level: level
        // }
        // console.log(formdata)
        // let url = new URL("https://glacial-escarpment-22310.herokuapp.com/getstudentgrades")
        // for (let i in formdata) {
        //     url.searchParams.append(i, formdata[i])
        // }
        // console.log(url)

        fetch(`https://glacial-escarpment-22310.herokuapp.com/getstudentgrades/${index_no}/${academic_year}/${level}/${term}`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)

            // send data back to <App/>
            setStudentTermResults(data)

            //extract current student's index_no from results, and use in navigation
            if (data){
                let index = (data[0].index_no)
                // console.log(index)
                navigate(`/term-grades/students/${index}`)
            }
    
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
            <input className="grade__btn" type="submit" value="Find Grades "/>
        </form>
    )

}
export default GetStudentResults;
