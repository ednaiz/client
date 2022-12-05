import {Link} from "react-router-dom";
import "./NavBar.css";
const GuestNavBar = () => {
    return ( <nav className="nav">
        <Link to="studenttList" className="link"> רשימת סטודנטים</Link>
        <Link to="login" className="link"> כניסה </Link>
        <Link to="register" className="link"> הרשמה </Link>
        <Link to="courses" className="link"> קורסים לצפייה ת </Link>
    </nav>
    )
}
export default GuestNavBar;