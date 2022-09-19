import './App.css';
import AddStudent from './componets/Addstudent/Addstudant';
import Test from './componets/test'
import axios from 'axios';
import { useState } from 'react';
 import Register from './componets/Register/Register';
 import StudenDetails from './componets/StudentDetails/StudentDetails';
 import StudentList from './componets/StudentList/StudentList';
 import AddStudent from './componets/AddStudent/AddStudent';
 import Lecturer from './componets/Lecturer/Lecturer';
 import Login from './componets/Login/Login';
 import Exit from './componets/Exit/Exit';
 import {Routes } from 'react-router-dom';
function App() {
  
 
  return (
    <div className="App">
    <Routes>
       <Route path = "StudentDetails" element={<StudenDetails/>}/>
       <Route path = "register" element={<Register/>}/>
       <Route path = "studentlist" element={<StudentList/>}/>
       <Route path = "StudentDetails" element={<StudenDetails/>}/>
       <Route path = "AddStudent" element={<AddStuden/>}/>
       <Route path = "lecturer" element={<Lecturer/>}/>
       <Route path = "login" element={<Login/>}/>
       <Route path = "exit" element={<Exit/>}/>
       <Route path = "addStudent" element={<AddStudent/>}/>
       
     
     



    </Routes>
    </div>
  );
}

  const [user, setUser] = useState([])
  let abc = 5;
  //בקשה לקבל
  axios.get('https://localhost:44340/api/customer')
    .then(x => {
      console.log(x)
      setUser(x.data)
      abc = x.data

    }
    )
    .catch(x => console.log(x))

  console.log(abc)
//אורטל הוספתי פה את ה POST
  var body = {
    userName: 'ortal',
    userEmail: 'ortal@gmail.com'
}

axios({
    method: 'post',
    url: '/addUser',
    data: body
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

  //בקשה לקבל
  axios.get('https://localhost:44340/api/customer?password=147&userName=saaa')
    .then(x => console.log(x))
    .catch(x => console.log(x))
  //שליחת נתונים
  const d = {
    "Address": "react",
    AllowingAccess: null,
    BDate: null,
    City: "reac",
    Id: 5,
    Email: "saraRea7802@gmail.com",
    FName: "saraReac",
    LName: null,
    Phone: 556783732,
    Status: true,
    UserName: "saaa",
    password: "147"
  }

  // axios.post('https://localhost:44340/api/customer',d)
  // .then(x=>console.log(x))
  // .catch(x=>console.log(x))


 


export default App;
