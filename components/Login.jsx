import React, { use, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = (props) => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loggedinuser, setloggedinuser] = useState(null);
  const [submitted,setSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    // console.log({
    //     username:num,
    //     password:pass
    // })
    const res = await axios.post("http://localhost:5000/user/login", {
      username: user,
      password: pass,
    });
    setloggedinuser(res.data);
    if (res.data) {
      router.push("/menu");
    }
  };

  return (
    <div className="flex border border-width-2 items-center App auth-form-container">
      <div className="mt-3 mx-auto">
      <form className="p-4 mt-3 login-form" onSubmit={handleSubmit}>
        <label className=" font-bold text-gray-600" htmlFor="text">Username</label>
        <input
          className="ring-green-500 rounded focus:ring outline-none"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Enter username"
        />
        <label className="font-bold text-gray-600" htmlFor="password">Password</label>
        <input
          className="ring-green-500 rounded focus:ring outline-none"
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
        className="under-form hover:text-green-400"
        onClick={() => {
          router.push("/signup");
        }}
      >
        <p>Don't have an account? Register here!</p>
      </button>
      {(!loggedinuser&&submitted)?(
        <div>
        <p className="text-red-500 text-sm font-extralight">Username or password incorrect!Please try again.</p>
        </div>
      ):""}
      </div>
      </div>
  );
};
export default Login;
