import { useState } from "react";

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState("");
  const fetchProducts = (e) => {
    console.log("val", e.target.value);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => fetchProducts(e)}
      />
    </div>
  );
};

export default Autocomplete;
