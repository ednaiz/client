import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { saveLogin } from "../store/actions/user";
import './NavBar.css';
const UserNavBar = (props) => {
    return ( <nav className="nav">
        <Link to="coursesList" className="link"> רשימת הקורסים </Link>
        <Link to="LecturersList" className="link">רשימת המרצים </Link>
        <Link to="exit" className="link" onClick={() => {props.saveLogin(null)}}> יציאה </Link>
        <Link to="" className="link">ניות </Link>
    </nav>
    )
}
export default connect(null, saveLogin)(UserNavBar);