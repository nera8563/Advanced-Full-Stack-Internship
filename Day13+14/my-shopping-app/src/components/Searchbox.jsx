import React from "react";

const SearchBox = ({ search, setSearch }) => {
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;