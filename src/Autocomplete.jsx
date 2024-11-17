import { useState } from "react";

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default Autocomplete;
