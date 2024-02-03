import React, { useState } from "react";
import axios from "axios";
import { login, signup } from "../../utils/APIRoutes";

export default function Login() {
  const [user, setUser] = useState("");
  const updateValue = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(login, { user });
      localStorage.setItem("currentUser", res.data.user);
      localStorage.setItem("activeGrps", res.data.chatgrps);
      window.alert("Logged In");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(signup, { user ,chatgrps: ['a','b']});
      localStorage.setItem("currentUser", res.data.user);
      localStorage.setItem("activeGrps", res.data.chatgrps);
      console.log(typeof(res.data.chatgrps), res.data.chatgrps)
      window.alert("New user created and logged in");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <form>
        <input value={user} onChange={updateValue}></input>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleSignup}>SignUp</button>
      </form>
    </div>
  );
}
