import './App.css';
import Navbar from './Components/NavBar.js'
import Alert from './Components/Alert.js'
import Textarea from './Components/Textarea.js'
import About from './Components/About.js'
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [text,setText] = useState('Enable Dark Mode');
  const [alert,setAlert] = useState(null)
  
  const showAlert = (message,type) =>
  {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglemode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark')
      setText("Enable light Mode")
      document.body.style.backgroundColor = '#040436'
      showAlert("Dark mode has been enabled","success")
    } 
    else
    {
      setMode('light')
      setText("Enable dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success")

    }
  }


  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" About="About Textutils" mode={mode} text={text} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className = "container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/"
            element= {<Textarea showAlert={showAlert} heading="Try TextUtils - Word counter,character counter,lowercase to uppercase,uppercase to lowercase" mode={mode}/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
