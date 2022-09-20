import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";

function DisplayStudent ()  {
  const [data, setData] = useState([]);
  

  // GET request function to your Mock API
  const fetchInventory = () => {
      fetch("http://localhost:9292/create-student")
          .then(res => res.json())
          .then(json => setData(json));
  }
  
  // Calling the function on component mount
  useEffect(() => {
      fetchInventory();
  }, []);

  // const [data, setData] = useState([]);
  // fetch("http://localhost:9292/create-student", {
  //           method: "GET",
  //           headers: {
  //               "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(formdata),
  //       })
  //       .then(function(response){
  //           return response.json()
  //       })
  //       .then(function(data){
  //           setDisplayStudent(data)
  //           console.log(data)
  //       })
    
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
                  data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.First_name}</td>
                    <td>{item.Last_name}</td>
                    <td>{item.Date_of_birth}</td>
                    <td>{item.Date_admitted}</td>
                    <td>{item.Course_id}</td>
                    <td>{item.Index_no}</td>
                    <td>{item.Level}</td> 
                    <td/>
                  </tr>
                  ))
                }
                    
                </tbody>
            </table>
        </div>
    );
  }


export default DisplayStudent;
