import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import './LoginRegister.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faLock, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../axios";
import { loginFail, loginStart, loginSuccess } from "../../redux/userSlice";

const Register = () => {
  let { user, loading } = useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => user && navigate('/home'), 2000);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginCred, setLoginCred] = useState({
    name: '',
    password: ''
  });

  const [registerCred, setRegisterCred] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleLoginInputChange = (e) => {
    setLoginCred(p => {
      return { ...p, [e.target.name]: e.target.value }
    });
  };

  const handleRegisterInputChange = (e) => {
    setRegisterCred(p => {
      return { ...p, [e.target.name]: e.target.value }
    });
  };

  const handleRegisterFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginStart());
      let res = await api.post('/auth/register',
        {
          username: registerCred.name,
          email: registerCred.email,
          password: registerCred.password
        });
      console.log(res.data);
      dispatch(loginSuccess(res.data.user));
      navigate('/home');
    } catch (err) {
      console.log(err);
      dispatch(loginFail(err.response.data.message));
    }
  }

  const handleLoginFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginStart());
      let res = await api.post('/auth/login',
        {
          username: loginCred.name,
          password: loginCred.password
        });
      dispatch(loginSuccess(res.data.user));
      navigate('/home');
    } catch (err) {
      dispatch(loginFail(err.response.data.message));
    }
  }

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

            <form className="p-4" onSubmit={handleLoginFormSubmit}>
              <h2 className="text-center mb-5 fw-bold">Welcome Back!</h2>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                <input onChange={handleLoginInputChange} type="text" name="name" id="loginName" className="form-control" placeholder="Email or username" />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                <input onChange={handleLoginInputChange} type="password" name="password" id="loginPassword" className="form-control" placeholder="Password" />
              </div>

              <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-end">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <button className="btn mb-4" disabled={loading}>Sign in</button>
              {/* --Use button onClick func to authorize user when backend completed-- 
      <button  className="btn  mb-4" onClick={navigate("/home")}>Sign in</button> */}

            </form>
          </div>

          {/* ----REGISTER FORM---- */}

          <div className="tab-pane fade show " id='pills-register' role='tabpanel' aria-labelledby="pills-register-tab">
            <form onSubmit={handleRegisterFormSubmit}>
              <h2 className="text-center mb-5 fw-bold">Create Account</h2>

              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                <input name="name" onChange={handleRegisterInputChange} type="text" id="registerUsername" className="form-control" placeholder="Username" />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></span>
                <input name="email" onChange={handleRegisterInputChange} type="email" id="registerEmail" className="form-control" placeholder="Email adress" />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                <input name="password" onChange={handleRegisterInputChange} type="password" id="registerPassword" className="form-control" placeholder="Password" />
              </div>

              <button type="submit" className="btn mb-4">Register</button>
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