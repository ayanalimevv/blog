import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../axios';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const NavBar = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Logout on Clicking Logout Button
  const handleLogout = async () => {
    try {
      await api.delete('/auth/logout');
      dispatch(logout());
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }
  //Hightlight currently active nav item
  const checkActive = ({ isActive }) => (isActive ? "active" : "");
  const location = useLocation();

  return (
    location.pathname != '/' ? (<nav className="navbar navbar-expand-sm fixed-top navbar-light px-4">
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
        <Link className={`navbar-brand ${checkActive}`} to="/home"> Logo</Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCollapse">

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink title='Home' className={`nav-link ${checkActive}`} aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink title='Write' className={`nav-link ${checkActive}`} to="/write">Write</NavLink>
            </li>
            <li className="nav-item">
              <NavLink title='Profile' className={`nav-link ${checkActive}`} to="/profile" tabIndex="-1" aria-disabled="true">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink title='Log Out' onClick={handleLogout} className={`nav-link ${checkActive}`} to="/" tabIndex="-1" aria-disabled="true">Log Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <FontAwesomeIcon title={`${props.theme.charAt(0).toUpperCase()+props.theme.slice(1)} Mode`} icon={faCircleHalfStroke} size="xl" onClick={props.toggleTheme} />
    </nav>) : <></>
  );
}
export default NavBar;