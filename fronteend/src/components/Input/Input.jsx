import React, { useState } from "react";
import "./Input.css";
import axios from "axios";
import { chat } from "../../utils/APIRoutes";

function Input({currentGrp}) {
  const [msg, setMsg] = useState("");
  const sendMsg = async (e) => {
      e.preventDefault();
      if (msg === "") return;
      try {
      const res = await axios.post(chat, { grp: currentGrp, msg: msg });
      console.log(res);
      
    } catch (err) {
      console.log(err);
    }
      console.log(msg);
      setMsg("");
  };
  return (
    <div>
      <form onSubmit={sendMsg}>
        <input
          type="text"
          placeholder="Enter your msg"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
