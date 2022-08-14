import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  
  

  const toggle = () =>{
    if(mode==='light'){
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      // document.textarea.style.color='white';
      // document.textarea.style.backgroundColor='white';
      setMode("dark")
      showAlert("Dark Mode enabled","success")
    }
    else{
      document.body.style.backgroundColor='white';
      document.body.style.color='#343a40';
      // document.textarea.style.color='white';
      // document.textarea.style.backgroundColor='gray';
      setMode("light")
      showAlert("Light Mode enabled","success")
    }
  }

  return (
    <BrowserRouter>
    <Navbar title="Text Analyzer" mode={mode} toggle={toggle}/>
    <Alert alert={alert} />
    <Routes>
      <Route path="/" element={<Main mode={mode} showAlert={showAlert}/>}></Route>
      <Route path="/About" element={<About></About>}/>
      <Route path="/Main" element={ <Main mode={mode} showAlert={showAlert}/>}/>
    </Routes>

    {/* <Navbar title="Text Analyzer" mode={mode} toggle={toggle}/>
    <Alert alert={alert} />
    <Main mode={mode} showAlert={showAlert}/> */}

    </BrowserRouter>

  );
}

export default App;
