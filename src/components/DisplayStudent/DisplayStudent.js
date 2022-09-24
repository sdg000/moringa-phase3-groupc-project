import React from "react";
import { useNavigate } from "react-router-dom";


// import ReactDOM from "react-dom";

function DisplayStudent ({createStudentResults})  {

  let navigate = useNavigate()



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
