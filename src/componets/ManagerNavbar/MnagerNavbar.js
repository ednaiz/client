import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { saveLogin } from "../store/actions/user";
import "./NavBar.css";

const ManagerNavBar = () => {
    const dispatch = useDispatch();
    return (<nav className="nav">
        <Link to="StudentList" className="link"> רשימת תלמידים </Link>
        <Link to="addStudent" className="link">הוספת תלמיד ר </Link>
        <Link to="Atendecy" className="link">הוספת תלמיד ר </Link>
        <Link to="curseslist" className="link">הוספת תלמיד ר </Link>
        <Link to="studenttocors" className="link">הוספת תלמיד ר </Link>
        <Link to="studentdetails" className="link">הוספת תלמיד ר </Link>
        <Link to="lecturer" className="link">הוספת תלמיד ר </Link>
        <Link to="exit" className="link">הוספת תלמיד ר </Link>
        <Link to="exit" className="link" onClick={() => dispatch(saveLogin(null))}> יציאה </Link>
    </nav>
    )
}
export default ManagerNavBar;