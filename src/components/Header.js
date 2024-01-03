import { Link } from "react-router-dom"

const Header =()=>{
    return(
        <nav>
        <div>
          <ul>
            <li>
              <Link to ={{pathname: "/" }} >Task Form</Link>
            </li>
            <li>
              <Link to ={{pathname: "/chart" }} >Task Chart</Link>
            </li>
            <li>
            <Link to ={{pathname: "/task-list" }} >Task List</Link>
            </li>
          </ul>
        </div>
        </nav>
    )
}
export default Header;