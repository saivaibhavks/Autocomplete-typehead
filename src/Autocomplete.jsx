import { useState } from "react";

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState("");
  const fetchProducts = async (e) => {
    const json = await fetch("https://dummyjson.com/products/search?q=phone");
    const reps = json.json();
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
