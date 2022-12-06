import {Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/home/Home';
import LoginRegister from './pages/login-register/LoginRegister';
import './App.css';
import NavBar from './components/navbar/NavBar';
import 'animate.css'
import './components/darkMode.scss'
import { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import SinglePost from "./components/singlepost/SinglePost";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
    }, [theme]);

  const location = useLocation(); //don't display navbar in loginpage

  return (
    <div className={`App ${theme}`}>
      {location.pathname === "/" ? null : <NavBar toggleTheme={toggleTheme}/>}
      <Routes>
      <Route  index exact path="/" element={<LoginRegister/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/singlepost" element={<SinglePost/>}/>

        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
       */}
    </Routes> 
    </div>   
    
  );
}

export default App;
