import {Link} from "react-router-dom"
function Header() {
    return (
        <div className="header">
            <Link to="/">
             <div>Home</div>
            </Link>
            <Link to="/courses">
             <div>Courses</div>
            </Link>
            <Link to="/create">
             <div>Create-Course</div>
            </Link>
        </div>
    )
}
export default Header;