import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Category from "../components/Category";
import CountryDetails from "./CountryDetails";

interface CountryPageProps {
  currentTheme: string;
}
interface CountryProps {
  name: string;
  region: string;
}
const CountryPage: React.FC<CountryPageProps> = ({ currentTheme }) => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from data.json
        const response = await fetch("data.json");
        const data = await response.json();

        // Update state with the fetched data
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // useEffect runs only once

  // Calculate the index range for the current page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handleSearch = (query: string) => {
    // Filter countries based on the search query
    const filtered = countries.filter((country: CountryProps) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filtered countries state
    setFilteredCountries(filtered);

    // Reset the current page to 1 when performing a new search
    setCurrentPage(1);
  };
  const categoryFilter = (query: string) => {
    // Filter countries based on the search query
    const filtered = countries.filter((country: CountryProps) =>
      country.region.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filtered countries state
    setFilteredCountries(filtered);

    // Reset the current page to 1 when performing a new search
    setCurrentPage(1);
  };

  // Function to change the current page
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-6 sm:flex-row flex-col">
        <Search onSearch={handleSearch} currentTheme={currentTheme} />
        <Category
          onSelectCategory={categoryFilter}
          currentTheme={currentTheme}
        />
      </div>
      <div className="py-8 w-full grid items-center justify-items-center gap-12 grid-cols-auto-fill-minmax">
        {currentCountries.map((country, index) => (
          <CountryCard
            country={country}
            key={index}
            currentTheme={currentTheme}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={countries.length}
        itemsPerPage={countriesPerPage}
        onPageChange={handlePageChange}
      />
      <CountryDetails />
    </div>
  );
};

export default CountryPage;
