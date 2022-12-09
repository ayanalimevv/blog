import {Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/home/Home';
import LoginRegister from './pages/login-register/LoginRegister';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import Layout from "./components/Layout";
import 'animate.css'
import './components/darkMode.scss'
import { useEffect, useState } from "react";
import Profile from "./pages/profile/Profile";
import SinglePost from "./components/singlepost/SinglePost";
import Write from "./pages/write/Write";

function App() {
  const [theme, setTheme] = useState('dark');
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
      {/* {location.pathname === "/" ? null : <NavBar toggleTheme={toggleTheme}/>} */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/singlepost" element={<SinglePost/>}/>
          <Route exact path="/write" element={<Write/>}/>
        </Route>
      <Route index element={<LoginRegister/>}/>
      

        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
       */}
    </Routes> 
    {/* {location.pathname === "/" ? null : <Footer/>} */}

    </div>   
    
  );
}

export default App;
