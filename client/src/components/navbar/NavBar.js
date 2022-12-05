import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'

const NavBar = props => {
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-light px-4">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#"> social</a>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Profile</a>
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