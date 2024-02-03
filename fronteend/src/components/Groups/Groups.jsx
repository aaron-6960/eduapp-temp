import React, { useState } from "react";
import "./Group.css";

function Groups({ grps, handleSelect, selectedGrp }) {
  const [selected, setSelected] = useState("");
  const setSelectGrp = (grp) => {
    handleSelect(grp);
  };
  return (
    <div className="grps_container">
      {grps.map((grp, index) => {
        return (
          <div
            className={`grp ${selectedGrp === grp ? "selected" : ""}`}
            key={index}
            onClick={() => setSelectGrp(grp)}
          >
            {grp}
          </div>
        );
      })}
    </div>
  );
}

export default Groups;
