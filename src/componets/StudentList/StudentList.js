import React, { Fragment } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const students = ["eren", "levi", "mikasa", "armin", "erwin"];
const StudentList = () => {
    return (
        <div>
            <ul>
                {students.map((student, i) => (
                    <li key={i}>
                        <Link to={`/StudentDetails/${student}`} >{student}</Link>
                    </li>
                )
                )}
            </ul>
        </div>

    );

};

export default StudentList;