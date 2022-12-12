import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { faCircleHalfStroke, faSearch } from '@fortawesome/free-solid-svg-icons';
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
        {/*---Navbar toggler icon for smaller screens---- */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*---Brand name or logo goes here---- */}
        <Link className={`navbar-brand ${checkActive}`} to="/home"> Logo</Link>

        {/*---Main navbar---- */}
        <div
          className="collapse navbar-collapse"
          id="navbarCollapse">

          <ul className="navbar-nav d-flex mx-auto">
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

      {/*---Search icon---- */}
      <div class=" dropstart me-2">
        <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">
          <FontAwesomeIcon icon={faSearch} size="lg"/></a>
          <ul class="dropdown-menu ">
            <input type="text" className="form-control " placeholder='Search'/>
          </ul>
      </div>

      {/*---Dark mode toggler icon---- */}
      <FontAwesomeIcon title={`${props.theme.charAt(0).toUpperCase()+props.theme.slice(1)} Mode`} icon={faCircleHalfStroke} size="xl" onClick={props.toggleTheme} />
    </nav>) : <></>
  );
}
export default NavBar;