import { MdKeyboardBackspace } from "react-icons/md";

const CountryDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <MdKeyboardBackspace />
        Back
      </div>
      <div className="flex flex-col w-full">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1></h1>
          <p>Native Name: </p>
          <p>Population: </p>
          <p>Region: </p>
          <p>Sub Region: </p>
          <p>Capital: </p>
        </div>
        <div>
          <p>Top Level Domain:</p>
          <p>Currencies:</p>
          <p>Language:</p>
        </div>
        <div>Boarder Countries:</div>
      </div>
    </div>
  );
};

export default CountryDetails;
