import { Link, NavLink, useNavigate } from "react-router-dom";
import './LoginRegister.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey, faLock, faPaperPlane, faUser} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  
    return ( 
      <div className="container-fluid d-flex align-items-center registerpage">
    <div className="container p-3">
      <ul className='nav nav-pills nav-justified mb-5' id='pills-tab' role='tablist'>
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id='pills-login-tab' data-bs-toggle="pill" data-bs-target='#pills-login' 
          type='button' role='tab' aria-controls='pills-login' aria-selected='true'>Login</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id='pills-register-tab' data-bs-toggle="pill" data-bs-target='#pills-register' 
          type='button' role='tab' aria-controls='pills-register' 
         aria-selected='false'>Register</button>
        </li>
      </ul>
      <div className="tab-content" id='pills-tabContent'>
        <div className="tab-pane fade show active" id='pills-login' role='tabpanel' aria-labelledby="pills-login-tab">
     
      {/* ----LOGIN FORM----- */}
     
        <form className="p-4">
          <h2 className="text-center mb-5 fw-bold">Welcome Back!</h2>
      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
        <input type="email" id="loginName" className="form-control" placeholder="Email or username" />
      </div>

      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
        <input type="password" id="loginPassword" className="form-control" placeholder="Password"/>
      </div>

      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-end">
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      <Link className="btn  mb-4" to="/home">Sign in</Link>
      {/* --Use button onClick func to authorize user when backend completed-- 
      <button  className="btn  mb-4" onClick={navigate("/home")}>Sign in</button> */}

    </form>
        </div>

      {/* ----REGISTER FORM---- */}

      <div className="tab-pane fade show " id='pills-register' role='tabpanel' aria-labelledby="pills-register-tab">
        <form>
        <h2 className="text-center mb-5 fw-bold">Create Account</h2>

      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
        <input type="text" id="registerUsername" className="form-control" placeholder="Username" />
      </div>

      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></span>
        <input type="email" id="registerEmail" className="form-control" placeholder="Email adress" />
      </div>

      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
        <input type="password" id="registerPassword" className="form-control" placeholder="Password"/>
      </div>

      <div className="input-group mb-4">
      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></span>
        <input type="password" id="registerRepeatPassword" className="form-control" placeholder="Confirm password"/>
      </div>

      <Link className="btn  mb-4" to="/home">Register</Link>
      {/* --Use button onClick func to authorize user when backend completed--
      <button type="submit" className="btn mt-4 mb-4">Register</button> */}
    </form>
        </div>
      </div>
    </div>
    </div>
);
}
 
export default Register;