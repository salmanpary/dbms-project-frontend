import React,{useState} from "react";

export const Register = (props) => {
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [num,setNum] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(num);
    }

    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="text">Name</label>
            <input value={name} onChange = {(e)=> setName(e.target.value)} type="text" placeholder="Enter name"/>
            <label htmlFor="text">Number</label>
            <input value={num} onChange = {(e)=> setNum(e.target.value)} type="text" placeholder="Enter number"/>
            <label htmlFor="password">Password</label>
            <input value= {pass} onChange = {(e)=> setPass(e.target.value)} type="password" placeholder="*******"/>
            <button className="register-btn" type ="submit" >Register</button>
            </form>
            <button className="under-form" onClick={()=>props.onFormSwitch('Login')} >Already have an account? Login here!</button>

        </div>
    )
}