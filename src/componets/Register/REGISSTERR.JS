import { useNavigate } from 'react-router';
import "./Register"
const Register = (props) => {
    let nav = useNavigate();
    let r = {
        name: "",
        passWord: "",
        phoneNumber: "",
        email: "",
        street: "",
        city: "",
        houseNum: 0,
        status: 2

    }
    const change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = +value;
        if (type === "password" && value.length === 8)
            value = +value;
        r[name] = value;
    }
    return (
        <>
            <h1>הרשמה</h1>
            <form>
                <input type="text" name="name" />   <label >שם משתמש</label><br /><br />
                <input type="password" name="password" /> <label >סיסמא</label><br /><br />
                <input type="password" name="password" /> <label >אימות סיסמא</label><br /><br />
                <input type="number" name="phoneNumber" /> <label>טלפון</label><br /><br />
                <input type="mail" name="email" onChange={change} /> <label>מייל</label><br /><br />
                <input type="button" value="הירשם" onClick={() => { nav("/homePage") }} /><br /><br />

            </form>
        </>
    )
}
export default Register;