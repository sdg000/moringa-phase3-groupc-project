import React, {useEffect} from "react";
import "./maincomponent.css"

function MainComponent(){

    function onClick(){
        fetch("http://localhost:9292/students/3/2019-20/2/grades")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })

        fetch("http://localhost:9292/students/3")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
    }


    return(
        <div className="task">
            <ul id="tasks">
                <li> <a href="/register-students">REGISTER STUDENT</a> </li>
                <li><a href="/grade-subject">GRADE SUBJECT</a></li>
                <li>VIEW STUDENT GRADE</li>
            </ul>

            <p>Display stuff here</p>

        </div>

    )
}
export default MainComponent