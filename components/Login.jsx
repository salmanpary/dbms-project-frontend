import React, { use, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Login = (props) => {
  const router = useRouter();
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");
  const [loggedinuser, setloggedinuser] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
        username:num,
        password:pass
    })
    const res = await axios.post("http://localhost:5000/user/login", {
      username: num,
      password: pass,
    });
    setloggedinuser(res.data);
    if (res.data) {
      router.push("/menu");
    }
  };

  return (
    <div className="App auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Username</label>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="text"
          placeholder="Enter username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*******"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <button
        className="under-form"
        onClick={() => {
          router.push("/signup");
        }}
      >
        Don't have an account? Register here!
      </button>
    </div>
  );
};
export default Login;
