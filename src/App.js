import React,{useState} from "react";
import Admin  from './components/Admin';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName)=>{
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      {currentForm==="Login"?<Login onFormSwitch ={toggleForm}/>:<Register onFormSwitch={toggleForm}/>}
    </div>
  );
}

export default App;
