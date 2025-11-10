import './App.css';
import Acordian from './components/Acordian';
import Alert from './components/Alert';
import Sign from './components/Sign';
import Title from './components/Title';
import Contact from './components/Contact';
import {
  HashRouter as Router, Route,
  Routes,
} from "react-router-dom";
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light') // Dark and Light mode

  const [alert, setalert] = useState(null) // Alert

  const showalert = (message, type) => {   // Alert function
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode = () => {     // toggle switch dark and light mode
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert('Light mode is enabled', 'success')
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#313238'
      showalert('Dark mode is enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Title title='Blogy Vlogy' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<Acordian mode={mode} />}>
          </Route>
          <Route exact path='/blogyVlogy'
            element={<Sign heading='Enter the text here' mode={mode} showalert={showalert} />}>
          </Route>
        </Routes>

        <Routes>
          <Route exact path='/contact' element={<Contact mode={mode} />}>
          </Route>

        </Routes>



      </Router>
    </>

  );
}

export default App;
