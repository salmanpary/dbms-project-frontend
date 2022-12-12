import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";
const Register = (props) => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [num, setNum] = useState(null);
    const router=useRouter()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   const res= await axios.post("http://localhost:5000/user/signup",{
        username:name,
        password:pass,
        phonenumber:num
    })
    if(res.data){
        router.push("/login")
    }
  };

  return (
    <div className="App auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <label htmlFor="text">Number</label>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="Enter number"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*******"
        />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
      <button
        className="under-form"
        onClick={() => router.push("/login")}
      >
        Already have an account? Login here!
      </button>
    </div>
  );
};
export default Register;
