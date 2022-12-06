import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'

const NavBar = props => {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-light px-4">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand " to="/home"> Logo</Link> 
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCollapse">
            
            <ul className="navbar-nav">
              <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Write</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/dashboard" tabIndex="-1" aria-disabled="true">Dashboard</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
        <FontAwesomeIcon icon={faMoon} size="xl" onClick={props.toggleTheme}/>
      </nav>
    );
}
 
export default NavBar;