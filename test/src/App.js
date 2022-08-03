import './App.css';
import Navbar from './component/Navbar';
import Text from './component/Text';
import About from './component/About';
import React, {useState} from 'react';
import Alert from './component/Alert';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

const showAlert = (message, type)=> {
  setAlert({
  msg : message,
  type : type

})

}

  const togglemode = ()=> {
   if(mode === 'light'){
     setMode('dark')
     document.body.style.backgroundColor ='#042743';
     showAlert("dark mode has been enabled", "success") 
   }
   else
   {
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert("light mode has been enabled", "successful")
   }                      
  }
  return (
    <>
  <Router>
        <Navbar title="Notepad" Home="myhome" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <div className='container my-3'> 
        <Switch>
          <Route exactly path="/About">
          <About/>
          </Route>
        <Route exactly path="/"> 
        <Text heading= 'Enter your story' mode={mode} showAlert={showAlert}/>
        </Route>
        </Switch>  
       </div>
      </Router>    
  </>
  );
}
export default App;