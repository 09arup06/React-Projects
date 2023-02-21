import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState()

  const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#04302d';
      showAlert("Dark mode enabled","danger");
    }
    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#d1e3df';
      showAlert("Light mode enabled","warning");
    }

  }
  const newc=(clr)=>{   
    
     if(mode==='dark')
     {document.body.style.backgroundColor=clr; }
     else
     {
      showAlert("Enable Dark Mode to use this feature","warning")
     }
    }


  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type:type
    })
    setTimeout(() => {
      setAlert();
    }, 2500);
  }
  return (
    <>
    
    <Router>
<Navbar title='First React Page' mode={mode} toggle={toggle} newc={newc} showAlert={showAlert}/>
<Alert alert={alert}/>
<div className='container'>

<Routes>
          < Route path="/about"
            element={<About/>}
          />
          <Route path="/"
         element={ <TextForm showAlert={showAlert} head="Enter the text to analyze"/>}
          />
          </Routes>
          </div>
  </Router>
  


    </>
  );
}

export default App;
