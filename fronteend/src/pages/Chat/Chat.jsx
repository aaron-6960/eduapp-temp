import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import Groups from "../../components/Groups/Groups";
import Welcome from "../../components/Welcome/Welcome";
import ChatSpace from "../../components/ChatSpace/ChatSpace";

function Chat() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [chatgrps, setChatgrps] = useState([]);
  const [selectedGrp, setSelectedGrps] = useState(undefined);
  const changeSelected = (grp) => {
    setSelectedGrps(grp);
  };
  useEffect(() => {
    console.log(localStorage.getItem("currentUser"));
    if (!localStorage.getItem("currentUser")) {
      navigate("/login");
    } else {
      setUser(localStorage.getItem("currentUser"));
      setChatgrps(localStorage.getItem("activeGrps").split(","));
    }
  }, []);
  return (
      <div className="container">
        <Groups
          grps={chatgrps}
          handleSelect={changeSelected}
          selectedGrp={selectedGrp}
        ></Groups>
          {selectedGrp === undefined ? (
            <Welcome />
          ) : (
            <ChatSpace selectedGrp={selectedGrp} />
          )}
    </div>
  );
}

export default Chat;
