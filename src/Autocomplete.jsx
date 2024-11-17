import { useState } from "react";

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="container">
      <input type="text" placeholder="Enter input" />
    </div>
  );
};

export default Autocomplete;
