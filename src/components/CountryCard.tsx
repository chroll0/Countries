// CountryCard.tsx
import React from "react";

interface Country {
  name: string;
  flags: {
    png: string;
  };
  population: string;
  region: string;
  capital: string;
}

interface CountryCardProps {
  country: Country;
  currentTheme: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, currentTheme }) => {
  return (
    <div
      className={`flex items-start flex-col h-full w-full max-w-[310px] hover:card-hover transition-all duration-300 ${
        currentTheme === "dark" ? "dark-elements" : "light-elements"
      }`}
    >
      <img
        src={country.flags.png}
        alt={country.name}
        className="w-full h-[200px]"
      />
      <div className="py-10 px-8 w-full">
        <h2 className="text-[20px] font-[800] capitalize tracking-wide mb-4">
          {country.name}
        </h2>
        <p className="text-md font-[300]">
          <span className="font-[600]">Population: </span>
          {country.population}
        </p>
        <p className="text-md font-[300] my-1">
          <span className="font-[600]">Region: </span>
          {country.region}
        </p>
        <p className="text-md font-[300]">
          <span className="font-[600]">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
