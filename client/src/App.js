import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import LoginRegister from './pages/login-register/LoginRegister';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import 'animate.css'
import './components/darkMode.scss'
import { useEffect, useState } from "react";
import Profile from "./pages/profile/Profile";
import SinglePost from "./components/singlepost/SinglePost";
import User from "./pages/User/User";

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

  return (
    <BrowserRouter className={`App ${theme}`}>
      <NavBar toggleTheme={toggleTheme} theme={theme === 'dark' ? 'light' : 'dark'} />
      <Routes>
        <Route index exact path="/" element={<LoginRegister />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path='/blog'>
          <Route path=':id' element={<SinglePost />} />
        </Route>
        <Route exact path='/user'>
          <Route path=':id' element={<User />} />
        </Route>
        <Route exact path="/write" element={<Write />} />

      </Routes>
      <Footer />

    </BrowserRouter >

  );
}

export default App;
