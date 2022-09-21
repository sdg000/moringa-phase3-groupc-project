import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// import ReactDOM from "react-dom";

function DisplayStudent ({createStudentResults})  {
  // const [lastStudentCreated, setLastStudentCreated] = useState([]);

  let navigate = useNavigate()


  // component fetches all students, use useParams() to to extract student index number from URL, 
  // fetch all students from students database
  // use student index number to find student from students database and display student information
  // and use to map t

  // let params = useParams()
  // let student_index = params.index
  // console.log(typeof student_index)

  
  // useEffect(() =>{
  //   fetch("http://localhost:9292/students")
  //   .then(function(response){
  //     return response.json()
  //   })
  //   .then(function(data){

  //     let student = data.find(item => item.index_no === parseInt(student_index))
  //     setLastStudentCreated(student)
  //   })
  // }, [params])

  // console.log("first call", createStudentResults)



  // function to handle delete student


  // function to handle delete student

  // function to handle create another student
  function createAnotherStudent(){
    navigate("/register-students")
  }


    
    return (
        <div className="container">
            <h1>Student Registration Details</h1>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Date Admitted</th>
                    <th>Course ID</th>
                    <th>Index No. </th>
                    <th>Level</th>
                </tr>
                </thead>
                <tbody>
                {
                  <tr>
                    <td>{createStudentResults.first_name}</td>
                    <td>{createStudentResults.last_name}</td>
                    <td>{createStudentResults.dob}</td>
                    <td>{createStudentResults.date_admitted}</td>
                    <td>{createStudentResults.level}</td>
                    <td>{createStudentResults.course_id}</td>
                    <td>{createStudentResults.index_no}</td>
                    <td/>
                  </tr>
                }
                    
                </tbody>
            </table>

            {/* <ul>{lastStudentCreated}</ul> */}
            {/* <h3>{lastStudentCreated.first_name}</h3>
            <h3>{lastStudentCreated.last_name}</h3>
            <h3>{lastStudentCreated.dob}</h3>
            <h3>{lastStudentCreated.date_admitted}</h3>
            <h3>{lastStudentCreated.level}</h3>
            <h3>{lastStudentCreated.course_id}</h3>
            <h3>{lastStudentCreated.index_no}</h3> */}


            <button>Delete Student</button>{""}
            <button>Edit Student Information</button>
            <button onClick={createAnotherStudent}>Register Another Student</button>



        </div>
    );
  }


export default DisplayStudent;
