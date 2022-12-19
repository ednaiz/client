import React, { useEffect, useState } from "react";
import { GetStudent } from "../../store/student";
import AddStudent from "../Addstudent/Addstudant";
import StudentDetails from '../StudentDetails/StudentDetails'
import "./StudentList.css";


const StudentList = () => {

    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        GetStudent()
            .then(x => setStudent(x.data))
            .catch(err => setStudent(
                [
                    { FName: "טל", Email: "fHFHFFG", Phone: "055666666777", id: 0, LName: "holon", adress: "hadar", year: 2, nameuser: "tal", pass: "1238889843", status: 0 },
                    { FName: "עינבר", Email: "dGFGGF", Phone: "056667899996", id: 1, LName: "hederan", adress: "hnamaar", year: 2, nameuser: "telkl", pass: "123488883", status: 0 },
                    { FName: "הילה", Email: "bFGFGFG", Phone: "05256668777", id: 2, LName: "heifa", adress: "habarr", year: 2, nameuser: "tgghjl", pass: "1777773", status: 0 },
                ]
            )
            )
    }, [])
    const [student, setStudent] = useState([]);

    const addStudent = (data) => {
        console.log(data)
        const students = [...student];
        students.push(data)
        console.log(students)
        setStudent(students)
    }
    return (
        <div>

            <StudentDetails users={student} />

            {showAdd ? <AddStudent setStudent={addStudent} cancel={() => setShowAdd(false)} /> :

                <button onClick={() => setShowAdd(true)}>+</button>}
        </div>
    );
};

export default StudentList;