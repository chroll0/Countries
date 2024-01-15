import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Category from "../components/Category";

interface CountryPageProps {
  currentTheme: string;
}

const CountryPage: React.FC<CountryPageProps> = ({ currentTheme }) => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from data.json
        const response = await fetch("data.json");
        const data = await response.json();

        // Update state with the fetched data
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // useEffect runs only once

  // Calculate the index range for the current page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Function to change the current page
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <Search />
        <Category />
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
    </div>
  );
};

export default CountryPage;
