import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

interface CountryPageProps {
  currentTheme: string;
}

const CountryPage: React.FC<CountryPageProps> = ({ currentTheme }) => {
  const [countries, setCountries] = useState([]);

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

  return (
    <div className="py-8 w-full grid items-center justify-items-center gap-12 grid-cols-auto-fill-minmax">
      {countries.map((country, index) => (
        <CountryCard
          country={country}
          key={index}
          currentTheme={currentTheme}
        />
      ))}
    </div>
  );
};

export default CountryPage;
