import React, { useEffect, useState } from 'react'
import { GetStudent } from "../../store/student";
import AddStudent from "../Addstudent/Addstudant";
import StudentDetails from '../StudentDetails/StudentDetails';


const CoursesList = () => {
    const [showAdd, setShowAdd] = useState(false)
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        GetStudent()
            .then(x => setCourse(x.data))
            .catch(() => setCourse(
                [
                    { Subject: "react ל", lessontype: "frontal lesson", },
                    { Subject: "java ר", lessontype: "frontal lesson", },
                    { Subject: "node.jsיה", lessontype: "house lesson", },
                    { Subject: "angular ה", lessontype: "house lesson", },
                    { Subject: "java script ה", lessontype: "house lesson", },


                ]

            )
            )
    }, [])

    const addStudent = (data) => {
        console.log(data)
        const courses = [...courses];
        courses.push(data)
        console.log(courses)
        setCourse(courses)
    }
    return (
        <div>

            <StudentDetails users={courses} />
            {showAdd ?
                <AddStudent setStudent={addStudent} cancel={() => setShowAdd(false)} /> :
                <button onClick={() => setShowAdd(true)}>+</button>
            }
        </div>

    );

};

export default CoursesList;
