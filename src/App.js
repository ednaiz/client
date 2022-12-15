import './App.css';
import Register from './componets/Register/REGISSTERR';
import Lecturer from './componets/Lecturer/Lecturer';
import Login from './componets/Login/Login';
import Exit from './componets/EXSIT/EXSIT';
import Atendecy from './componets/Atendency/Atendecy';
import { Routes, Route } from 'react-router-dom';
import AddStudent from './componets/Addstudent/Addstudant';
import UserNavbar from './componets/UserNavbar/UserNavbar';
import Guestnavbar from './componets/Guestnavbar/Guestnavbar';
import CoursesList from './componets/courseslist/courseslist';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';




const App = () => {
  const navigaate = useNavigate();
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    if (currentUser) {
      navigaate("/home")
    }
    else {
      navigaate("/login")
    }
  }, [currentUser])

  return (
    <div className="App">
      <Routes>
        <Route path="register" element={<Register />} />
        {/* <Route path="studentList" element={<StudentList />} /> */}
        <Route path="lecturer" element={<Lecturer />} />
        <Route path="login" element={<Login />} />
        <Route path="exit" element={<Exit />} />
        <Route path="addStudent" element={<AddStudent />} />
        {/* <Route path="StodentToCores" element={<StudentToCourse />} /> */}
        <Route path="courseslist" element={<CoursesList />} />
        <Route path="Guestnavbar" element={<Guestnavbar />} />
        <Route path="UserNavbar" element={<UserNavbar />} />
        {/* <Route path="ManagerNavbar" element={<ManagertNavbar />} /> */}
        {/* <Route path="Studentmarks" element={<Studentmarks />} /> */}

        <Route path="Atendency" element={<Atendecy />} />




        <Route path="corseslist" element={<courseslist />} />

      </Routes>
    </div>
  );
}

//   const [user, setUser] = useState([])
//   let abc = 5;
//   //בקשה לקבל
//   axios.get('https://localhost:44340/api/customer')
//     .then(x => {
//       console.log(x)
//       setUser(x.data)
//       abc = x.data

//     }
//     )
//     .catch(x => console.log(x))

//   console.log(abc)
// //אורטל הוספתי פה את ה POST
//   var body = {
//     userName: 'ortal',
//     userEmail: 'ortal@gmail.com'
// }

// axios({
//     method: 'post',
//     url: '/addUser',
//     data: body
// })
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

//   //בקשה לקבל
//   axios.get('https://localhost:44340/api/customer?password=147&userName=saaa')
//     .then(x => console.log(x))
//     .catch(x => console.log(x))
//   //שליחת נתונים
//   const d = {
//     "Address": "react",
//     AllowingAccess: null,
//     BDate: null,
//     City: "reac",
//     Id: 5,
//     Email: "saraRea7802@gmail.com",
//     FName: "saraReac",
//     LName: null,
//     Phone: 556783732,
//     Status: true,
//     UserName: "saaa",
//     password: "147"
//   }

// axios.post('https://localhost:44340/api/customer',d)
// .then(x=>console.log(x))
// .catch(x=>console.log(x))





export default App;
