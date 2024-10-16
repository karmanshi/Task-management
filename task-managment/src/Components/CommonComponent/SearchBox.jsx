import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="flex items-center bg-white shadow-md border border-gray-300 rounded-full overflow-hidden w-full max-w-sm">
    <span className="px-3 text-gray-500">
      <FontAwesomeIcon icon={faSearch} />
    </span>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      className="w-full py-2  text-gray-700 focus:outline-none"
      placeholder="Search..."
    />
  </div>
  );
};

export default SearchBox;
