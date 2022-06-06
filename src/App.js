import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

      <Navbar title="AtlanSQL" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div class="container my-3">
        <Home heading="Enter your SQL query" showAlert={showAlert} mode={mode} />
      </div>

    </>
  );
}

export default App;
