import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

interface CountryDetailsProps {
  currentTheme: string;
}
const CountryDetails: React.FC<CountryDetailsProps> = ({ currentTheme }) => {
  return (
    <div className="flex flex-col w-full">
      <Link to="/">
        <div
          className={`flex transition-all duration-300 px-4 py-2 items-center justify-center w-28 tracking-wide ${
            currentTheme === "dark" ? "dark-elements" : "light-elements"
          }`}
        >
          <MdKeyboardBackspace className="mr-3" />
          Back
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row gap-10 w-full py-10">
        <div>
          <img src="" alt="dada" />
        </div>
        <h1 className="text-2xl font-[800] capitalize tracking-wide">
          belgium
        </h1>
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <p>Native Name: </p>
            <p>Population: </p>
            <p>Region: </p>
            <p>Sub Region: </p>
            <p>Capital: </p>
          </div>
          <div className="">
            <p>Top Level Domain:</p>
            <p>Currencies:</p>
            <p>Language:</p>
          </div>
        </div>
        <div>Boarder Countries:</div>
        <div>
          <div
            className={`flex transition-all duration-300 px-4 py-2 items-center justify-center w-28 tracking-wide ${
              currentTheme === "dark" ? "dark-elements" : "light-elements"
            }`}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
