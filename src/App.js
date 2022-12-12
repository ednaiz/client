import './App.css';
import Register from './componets/Register/REGISSTERR';
import StudentList from './componets/StudentList/StudentList';
import Lecturer from './componets/Lecturer/Lecturer';
import Login from './componets/Login/Login';
import Exit from './componets/EXSIT/EXSIT';
import Atendecy from './componets/Atendency/Atendecy';
import StudentToCourse from './componets/StudentToCouts/StudentToCours';
import { Routes, Route } from 'react-router-dom';
import AddStudent from './componets/Addstudent/Addstudant';
import UserNavbar from './componets/UserNavbar/UserNavbar';
import ManagerNavbar from './components/ManagerNavbar/ManagerNavbar';
import Guestnavbar from './componets/Guestnavbar/Guestnavbar';
import courseslist from './componets/courseslist/courseslist';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="studentList" element={<StudentList />} />
        <Route path="lecturer" element={<Lecturer />} />
        <Route path="login" element={<Login />} />
        <Route path="exit" element={<Exit />} />
        <Route path="addStudent" element={<AddStudent />} />
        <Route path="StodentToCores" element={<A StudentToCourse />} />
        <Route path="courseslist" element={<courseslist />} />
        <Route path="Guestnavbar" element={<Guestnavbar/>} />
        <Route path="UserNavbar" element={<UserNavbar />} />
        <Route path="ManagerNavbar" element={<ManagertNavbar />} />
        <Route path="Studentmarks" element={<Studentmarks />} />
       
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
