import { useNavigate } from 'react-router-dom';
import { useRef,useEffect, useState  } from "react";
import axios from 'axios'

const AddStudent = () => {


    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);

    const [student, setStudent] = useState([
        { name: "טל", email: "fHFHFFG", phoneNumber: "055666666777", id: 0, city: "holon", adress: "hadar", year: 2, nameuser: "tal", pass: "1238889843", status: 0 }, ,
        { name: "עינבר", email: "dGFGGF", phoneNumber: "056667899996", id: 0, city: "hederan", adress: "hnamaar", year: 2, nameuser: "telkl", pass: "123488883", status: 0 },
        { name: "הילה", email: "bFGFGFG", phoneNumber: "05256668777", id: 0, city: "heifa", adress: "habarr", year: 2, nameuser: "tgghjl", pass: "1777773", status: 0 },

    ]
    );
    //add student לבדיקה
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = profileObj(nameuser, phoneNumber, city, stat, address);
        localStorage.setItem('studentProfile', JSON.stringify(student))
        let form_data = new FormData()//fk
        form_data.append('id', parseInt(JSON.parse(localStorage.getItem('data')).id, 10))
        form_data.append('name', student.nameuser)//change the name property in the db to one
        form_data.append('phone',student.phoneNumber)
        form_data.append('city',student.city)
        form_data.append('role',student.status)
        form_data.append('address',student.address)
        form_data.append('password',student.pass)
        form_data.append('cus_status',student.cus_status)
        
        fetch('http://localhost:8000/customer_apis/addCustomer/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            },
            body: form_data
        })
            .then(res => {
                console.log(res)
                console.log(res.status)
                if (res.status !== 200)
                    document.getElementById('text-error').innerHTML = res.statusText
                else {
                    navigate('/create_store')
                }
            })
    }

    const deletestudent=()=>{
        const todelet = promt("תרצה למחוק סטודנט זה כן /לא");
        if(todelet=="כן")
        alert("התלמיד נמחק ")// את צריכה באמת למחוק את התלמיד ופה שמת רק הודעה בלי למחוק אותו
        else
        alert("התלמיד נשאר")

    }
    const addStudent = () => {
        let part = { name: nameInput.current.value, email: emailInput.current.value, phoneNumber: phoneInput.current.value }
        const fakeStudent = [...student, part];
        nameInput.current.value = "";
        emailInput.current.value = "";
        phoneInput.current.value = "";
        setStudent(fakeStudent)
        alert("הסטודנדט התווסף");
    }

   
    return (
       
        <div>
             <bottom> e</bottom>
            <bottom> a</bottom>
            <bottom onClick={deletestudent}>d </bottom>

            

            <h1>

            </h1>
            <form>
                <input type="text" name="name" ref={nameInput} />   <label >שם משתמש</label><br /><br />
                <input type="mail" name="email" ref={emailInput} placeholder="מייל" required /> <label >מייל</label><br /><br />
                <input type="number" name="phoneNumber" ref={phoneInput} placeholder="טלפון" /> <label>טלפון</label><br /><br />
                <input type="button" value="+" onClick={addStudent} /><br /><br />
                {/* <input type="button" value="המשך" onClick={addParticipate2} /> */}

                   </form>
            </div>   
       )
}
export default AddStudent;