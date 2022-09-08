import { useNavigate } from 'react-router';

let nav = useNavigate();


return (
    <>
        <h1>כניסה</h1>
        <form>

            <input type="text" name="name" placeholder="שם משתמש" /><br /><br />
            <input type="mail" name="email" placeholder="מייל" /><br /><br />
            <input type="password" name="password" placeholder="סיסמא" /><br /><br />


            <input type="button" value="כניסה" onClick={() => { nav("/homePage") }} />

        </form>
    </>
)

export default Login;