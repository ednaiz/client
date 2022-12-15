import { Link } from "react-router-dom";
const GuestNavBar = () => {
    return (<nav className="nav">
        <Link to="coursestList" className="link"> רשימת קורסים</Link>
        <Link to="About" className="link"> דף אודות ה </Link>
        <Link to="register" className="link"> הרשמה </Link>
        <Link to="lecturer" className="link">מרצים רשימת </Link>
        <Link to="exit" className="link"> יציאה הת </Link>
    </nav>
    )
}
export default GuestNavBar;