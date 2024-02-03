import React from 'react';
import "./ChatSpace.css";
import Input from '../Input/Input';

export default function ChatSpace({selectedGrp}) {
  return (
    <div className="ChatSpace">
      <div className="header">{selectedGrp}</div>
      <div className="msgbox">Msgs Appear here</div>
      <div className="input">
        <Input currentGrp={selectedGrp} />
      </div>
    </div>
  );
}
