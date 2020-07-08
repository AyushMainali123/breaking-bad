import React, { useState } from "react";

const Search = ({ changeInput }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    changeInput(e.target.value);
  };
  return (
    <div className="Search">
      <input
        id="searchInput"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search character name here...."
      />
    </div>
  );
};

export default Search;
