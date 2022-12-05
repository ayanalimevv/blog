import {Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/home/Home';
import './App.css';
import NavBar from './components/navbar/NavBar';
import './components/darkMode.scss'
import { useEffect, useState } from "react";

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
      <Route  index exact path="/" element={<Register/>}/>
      <Route exact path="/home" element={<Home/>}/>

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
