import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const CaptionInput = ({ onAddCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleAddCaption = () => {
    if (text && start && end) {
      onAddCaption({id:uuidv4(), text, start: parseFloat(start), end: parseFloat(end) });
      setText("");
      setStart("");
      setEnd("");
    }
  };

  return (
    <div className="caption-form">
      <input
        type="text"
        placeholder="Caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Start time (in seconds)"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="number"
        placeholder="End time (in seconds)"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button 
        className="add-caption-button"
        disabled={(text==="" || start===null || end===null) || (Number(start) > Number(end))} 
        onClick={handleAddCaption}>Add Caption</button>
    </div>
  );
};

export default CaptionInput;
