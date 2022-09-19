import React, {useState} from "react";
import { GiMetalHand } from "react-icons/gi";

function RegStudent({setCreateStudentResults}){
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [date_admitted, setDateadmitted] = useState("")
    const [gpa, setGpa] = useState("")
    const [course_id, setCourseId] = useState("")
    const [index_no, setIndexNumber] = useState("")
    const [level, setLevel] = useState("")


    // takes props from App
    function formSubmit(e){
        e.preventDefault()
        const formdata = {
            first_name,
            last_name,
            dob,
            date_admitted,
            gpa,
            course_id,
            index_no,
            level
        }
        console.log(formdata)
        
        fetch("http://localhost:9292/create-student", {
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
            setCreateStudentResults(data)
            console.log(data)
        })
    }

    return(
        <form onSubmit={formSubmit}>
            <h1>STUDENT REGISTRATION FORM</h1>
            <br/>
            <label>First name: </label>
            <input type="text" placeholder="enter first name" value={first_name} onChange={(e) => setFirstname(e.target.value)}/>
            <br/>
            <label>Last name: </label>
            <input type="text"  placeholder="enter last name" value={last_name} onChange={(e) => setLastname(e.target.value)}/>
            <br/>
            <label>Date of birth: </label>
            <input type="date"  placeholder="enter date of birth" value={dob} onChange={(e) => setDob(e.target.value)}/>
            <br/>
            <label>Date Admitted: </label>
            <input type="date"  placeholder="enter date admitted" value={date_admitted} onChange={(e) => setDateadmitted(e.target.value)}/>
            <br/>

            <label>GPA: </label>
            <input type="integer"  placeholder="leave empty" value={gpa} onChange={(e) => setGpa(e.target.value)}/>
            <br/>
            <label>Course id: </label>
            <select type="text" value={course_id} onChange={(e) => setCourseId(e.target.value)}>
                <option>Business</option>
                <option>Science</option>
                <option>Gen_Arts</option>
            </select>
            <br/>
            <label>Index number: </label>
            <input type="integer"  placeholder="index_number" value={index_no} onChange={(e) => setIndexNumber(e.target.value)}/>
            <br/>
            <label>Level: </label>
            <input type="integer"  placeholder="level" value={level} onChange={(e) => setLevel(e.target.value)}/>

            <br/>
            <input type="submit" value="Register Student" />
        </form>
    )

}
export default RegStudent