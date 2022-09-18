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
    const deletestudent=()=>{
        const todelet = promt("תרצה למחוק סטודנט זה כן /לא");
        if(todelet=="כן")
        alert("התלמיד נמחק ")
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
                <input type="mail" name="email" ref={emailInput} placeolder="מייל" required /> <label >מייל</label><br /><br />
                <input type="number" name="phoneNumber" ref={phoneInput} placeolder="טלפון" /> <label>טלפון</label><br /><br />
                <input type="button" value="+" onClick={addStudent} /><br /><br />
                {/* <input type="button" value="המשך" onClick={addParticipate2} /> */}

                   </form>
            </div>   
       )
}
export default AddStudent;