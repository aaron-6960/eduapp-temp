import React, { useEffect, useState } from "react";
import "./ChatSpace.css";
import Input from "../Input/Input";
import axios from "axios";
import { clctMsg } from "../../utils/APIRoutes";

export default function ChatSpace({ selectedGrp, user }) {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(clctMsg, {
          grp: selectedGrp,
        });
        if (msg != response.data) {
          setMsg(response.data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchData();
  }, [selectedGrp, msg]);
  return (
    <div className="ChatSpace">
      <div className="header">{selectedGrp}</div>
      <div className="msgbox">
        {msg.map((msg, index) => (
          <div key={index}>{msg.content}</div>
        ))}
      </div>
      <div className="input">
        <Input currentGrp={selectedGrp} user={user} />
      </div>
    </div>
  );
}
