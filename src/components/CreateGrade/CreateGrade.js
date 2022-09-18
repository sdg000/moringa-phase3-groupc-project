import React, {useState} from "react";

function CreateGrade(){
    // const [firstname, setFirstname] = useState("")
    // const [lastname, setLastname] = useState("")
    // const [dob, setDob] = useState("")
    // const [gpa, setGpa] = useState("")
    // const [courseId, setCourseId] = useState("")
    // const [indexNumber, setIndexNumber] = useState("")
    // const [level, setLevel] = useState("")


    // takes props from App
    // function formSubmit(e){
        
    //     fetch("http://localhost:9292/create-student", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             FormData
    //         }),
    //     })
    //     .then(function(response){
    //         return response.json()
    //     })
    //     .then(function(data){
    //         setCreateStudentResults(data)
    //         console.log(data)
    //     })
    // }

    return(
        <form>
            <h1>SUBJECT GRADING FORM</h1>
            <br/>
            <select type="integer">
                <option value="1">2020-21</option>
                <option value="1">2021-22</option>
                <option value="1">2022-23</option>
                <option value="1">2023-24</option>
                <option value="1">2024-25</option>
                <option value="1">2025-26</option>
                <option value="1">2026-27</option>
                <option value="1">2027-28</option>
                <option value="1">2029-30</option>
            </select>
            <br/>
            <select type="integer" >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
            </select>
            <br/>
            <label>Exams score: </label>
            <input type="integer"  placeholder="enter exams_score" />
            <br/>
            <label>Index Number: </label>
            <input type="integer"  placeholder="Index number" />
            <br/>

            <label>Level: </label>
            <select type="integer" >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
            </select>
            <br/>

            <input type="submit" value="Register Student" />
        </form>
    )

}
export default CreateGrade