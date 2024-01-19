import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router-dom";

interface CountryDetailsProps {
  currentTheme: string;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ currentTheme }) => {
  const { countryName } = useParams();
  const location = useLocation();
  const countryData = location.state?.countryData || {};

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
      <div className="flex flex-col lg:flex-row xl:gap-24 gap-10 w-full py-10">
        <div className="flex flex-[0.6]">
          <img
            src={countryData.flags.png}
            alt={countryData.name}
            className="lg:w-full xsm:w-[60%] w-[100%]"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <h1 className="text-2xl font-[800] capitalize tracking-wide">
            {countryName}
          </h1>
          <div className="flex flex-col sm:flex-row sm:gap-[22%] gap-8 w-full">
            <div className="flex gap-1 flex-col font-[600] text-[16px]">
              <p>
                Native Name:
                <span className="font-thin ml-2">{countryData.nativeName}</span>
              </p>
              <p>
                Population:
                <span className="font-thin ml-2">
                  {countryData.population.toLocaleString()}
                </span>
              </p>
              <p>
                Region:
                <span className="font-thin ml-2">{countryData.region}</span>
              </p>
              <p>
                Sub Region:
                <span className="font-thin ml-2">{countryData.subregion}</span>
              </p>
              <p>
                Capital:
                <span className="font-thin ml-2">{countryData.capital}</span>
              </p>
            </div>
            <div className="flex gap-1 flex-col font-[600] text-[16px]">
              <p>
                Timezones:
                <span className="font-thin ml-2">
                  {countryData.timezones[0]}
                </span>
              </p>
              <p>
                Top Level Domain:
                <span className="font-thin ml-2">
                  {countryData.topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:
                {countryData.borders ? (
                  <span className="font-thin ml-2">
                    {countryData.currencies[0].name} (
                    {countryData.currencies[0].symbol})
                  </span>
                ) : (
                  <span className="font-thin ml-2">no Currencies</span>
                )}
              </p>
              <p>
                Language:
                <span className="font-thin ml-2">
                  {countryData.languages[0].name}
                </span>
              </p>
            </div>
          </div>
          <div className="flex md:items-center items-start gap-6 mt-5 flex-col sm:flex-row">
            <div className="min-w-[130px]">Border Countries:</div>
            <div className="flex gap-6 w-full">
              {countryData.borders
                ? countryData.borders
                    .slice(0, 3)
                    .map((border: string, index: number) => (
                      <div
                        key={index}
                        className={`flex transition-all duration-300 px-4 py-2 items-center justify-center sm:w-28 w-[30%] tracking-wide ${
                          currentTheme === "dark"
                            ? "dark-elements"
                            : "light-elements"
                        }`}
                      >
                        {border}
                      </div>
                    ))
                : "no border countries"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
