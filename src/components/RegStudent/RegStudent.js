import React, {useState} from "react";
import { GiMetalHand } from "react-icons/gi";

function RegStudent({setCreateStudentResults}){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [gpa, setGpa] = useState("")
    const [courseId, setCourseId] = useState("")
    const [indexNumber, setIndexNumber] = useState("")
    const [level, setLevel] = useState("")


    // takes props from App
    function formSubmit(e){
        e.preventDefault()
        const formdata = {
            firstname,
            lastname,
            dob,
            gpa,
            courseId,
            indexNumber,
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
            <input type="text" placeholder="enter first name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            <br/>
            <label>Last name: </label>
            <input type="text"  placeholder="enter last name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            <br/>
            <label>Date of birth: </label>
            <input type="date"  placeholder="enter date of birth" value={dob} onChange={(e) => setDob(e.target.value)}/>
            <br/>
            <label>Date Admitted: </label>
            <input type="date"  placeholder="enter date admitted" value={dob} onChange={(e) => setDob(e.target.value)}/>
            <br/>

            <label>GPA: </label>
            <input type="integer"  placeholder="leave empty" value={gpa} onChange={(e) => setGpa(e.target.value)}/>
            <br/>
            <label>Course id: </label>
            <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br/>
            <label>Index number: </label>
            <input type="integer"  placeholder="index_number" value={indexNumber} onChange={(e) => setIndexNumber(e.target.value)}/>
            <br/>
            <label>Level: </label>
            <input type="integer"  placeholder="level" value={level} onChange={(e) => setLevel(e.target.value)}/>

            <br/>
            <input type="submit" value="Register Student" />
        </form>
    )

}
export default RegStudent