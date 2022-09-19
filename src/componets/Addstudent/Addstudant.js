import { useRef, useEffect, useState } from "react";
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


    const deletestudent = () => {
        // const todelet = promt("תרצה למחוק סטודנט זה כן /לא");
        // if (todelet == "כן")
        //     alert("התלמיד נמחק ")// את צריכה באמת למחוק את התלמיד ופה שמת רק הודעה בלי למחוק אותו
        // else
        //     alert("התלמיד נשאר")

    }
    const addStudent = () => {
        const part = {
            FName: nameInput.current.value,
            LName: nameInput.current.value,
            Email: emailInput.current.value,
            Phone: phoneInput.current.value
        }
        console.log(part)
        axios.post('lo/api/user', part)
            .then(x => {
                const fakeStudent = [...student, x.data];
                nameInput.current.value = "";
                emailInput.current.value = "";
                phoneInput.current.value = "";
                setStudent(fakeStudent)
                alert("הסטודנדט התווסף");
            })



    }


    return (

        <div>
            {/* <bottom> e</bottom>
            <bottom> a</bottom> */}
            <button onClick={deletestudent}>מחיקה </button>

            <h1>

            </h1>
            <form >
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