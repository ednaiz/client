import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/user";

const UserNavBar = () => {
const dispatch=useDispatch();
    return (<nav className="nav">
        <Link to="coursesList" className="link"> רשימת הקורסים </Link>
        <Link to="Lecturers" className="link">רשימת המרצים </Link>
        <Link to="myprofil" className="link">פרופיל הסטודנט ם </Link>
        <Link to="Atendency" className="link">נוכחות ם </Link>
        <Link to="About" className="link"> דף אודות ם </Link>
        <Link to="exit" className="link" onClick={() => dispatch(login(null))}> יציאה </Link>
        <Link to="" className="link">ניות </Link>
    </nav>
    )
}
export default UserNavBar;