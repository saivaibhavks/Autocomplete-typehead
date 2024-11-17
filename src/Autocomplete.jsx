import { useState } from "react";

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState("");
  const fetchProducts = async (e) => {
    console.log("val", e.target.value);
    const json = await fetch("https://dummyjson.com/products/search?q=phone");
    const reps = json.json();
    console.log("json", json);
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
