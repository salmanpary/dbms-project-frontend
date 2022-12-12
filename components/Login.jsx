import React,{useState} from "react";
import "../styles/login.css"
 const Login = (props) => {
    const [num,setNum] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    
    }

    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="text">Username</label>
            <input value={num} onChange = {(e)=> setNum(e.target.value)} type="text" placeholder="Enter number"/>
            <label htmlFor="password">Password</label>
            <input value= {pass} onChange = {(e)=> setPass(e.target.value)} type="password" placeholder="*******"/>
            <button className="login-btn" type ="submit" >Login</button>
            </form>
            <button className="under-form" onClick={()=>props.onFormSwitch('register')} >Don't have an account? Register here!</button>
        </div>
    )
}
export default Login