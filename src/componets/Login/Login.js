import { Fragment } from 'react';
import { useNavigate } from 'react-router';


function Login() {
    let nav = useNavigate();
    return (
        <Fragment>
            <h1>כניסה</h1>
            <form>
                <input type="text" name="name" placeholder="שם משתמש" /><br /><br />
                <input type="mail" name="email" placeholder="מייל" /><br /><br />
                <input type="password" name="password" placeholder="סיסמא" /><br /><br />
                <input type="button" value="כניסה" onClick={() => { nav("/homePage") }} />
            </form>
        </Fragment>
    )
}

export default Login;