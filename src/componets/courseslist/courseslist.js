
import { GetStudent } from "../../store/student";
import AddStudent from "../Addstudent/Addstudant";
import StudentDetails from '../StudentDetails/StudentDetails';


const coursesList = () => {
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        GetStudent()
            .then(x => setCourse(x.data))
            .catch(err => setCours(
                [
                    { Subject: "react ל", lessontype: "frontal lesson",  },
                    { Subject: "java ר", lessontype: "frontal lesson",   },
                    { Subject: "node.jsיה", lessontype: "house lesson",  },
                    { Subject: "angular ה", lessontype: "house lesson",  },
                    { Subject: "java script ה", lessontype: "house lesson",},
                    

                ]
                
            )
            )
    }, [])
    const [courses, setCourses] = useState([]);

    const lecturer = (data) => {
        console.log(data)
        const courses = [...courses];
        courses.push(data)
        console.log(courses)
        setStudent(courses)
    }
    return (
        <div>

            <StudentDetails users={student} />

            {showAdd ? <AddStudent setStudent={addStudent} cancel={() => setShowAdd(false)} /> :

                <button onClick={() => setShowAdd(true)}>+</button>}




        </div>

    );

};

export default Atendecy;
