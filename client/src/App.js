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
      <NavBar toggleTheme={toggleTheme} />
      <Routes>
        <Route index exact path="/" element={<LoginRegister />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path='/blog'>
          <Route path=':id' element={<SinglePost />} />
        </Route>
        <Route exact path="/write" element={<Write />} />

        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
       */}
      </Routes>
      <Footer />

    </BrowserRouter >

  );
}

export default App;
