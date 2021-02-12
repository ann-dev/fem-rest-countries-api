import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ flagSrc, countryName, population, region, capital }) => (
  <div className="bg-white shadow rounded-md mx-auto h-auto w-64 overflow-hidden">
    <div className="h-40 w-full bg-cover overflow-hidden">
      <img
        className="w-full"
        src={flagSrc}
        alt="German flag"
        style={{ minHeight: 160 }}
      />
    </div>
    <div className="h-44 px-5 pt-6">
      <h2 className="text-lg font-extrabold"> {countryName}</h2>
      <ul className="mt-3">
        <li className="mt-1 text-sm">
          <span className="font-semibold">Population:</span> {population}
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Region:</span> {region}
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Capital:</span> {capital}
        </li>
      </ul>
    </div>
  </div>
);

Card.defaultProps = {
  flacSrc: 'https://picsum.photos/300/200',
  countryName: 'Unknown Country',
  population: 1,
  region: '',
  capital: '',
};

Card.propTypes = {
  flagSrc: PropTypes.string,
  countryName: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
};

export default Card;
