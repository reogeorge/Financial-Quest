import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Achievements from './pages/Achievements/Achievements';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Learning from './pages/Learning/Learning';
import NotFound from './pages/NotFound/NotFound';
import SignUP from './pages/SignUp/SignUp';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;