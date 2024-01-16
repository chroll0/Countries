import { IoMdSearch } from "react-icons/io";
import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
  currentTheme: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, currentTheme }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery); // Trigger search on each key change
  };
  return (
    <div className="flex items-center relative">
      <div
        className={`flex w-full sm:w-[450px] py-3 px-6 ${
          currentTheme === "dark" ? "dark-elements" : "light-elements"
        }`}
      >
        <IoMdSearch fontSize={24} className="mr-3" />
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          id="searchInput"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
