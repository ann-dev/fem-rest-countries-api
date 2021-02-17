import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ flagSrc, countryName, population, region, capital }) => (
  <div className="bg-white transition duration-300 animate-fade-in shadow hover:shadow-xl cursor-pointer rounded-md mx-auto h-auto w-64 overflow-hidden">
    <div className="h-40">
      <img
        className="h-full w-full object-cover"
        src={flagSrc}
        alt=""
        role="presentation"
        style={{ minHeight: 160 }}
      />
    </div>
    <div className="h-44 px-5 pt-6">
      <h2
        className={
          countryName.length > 25
            ? 'text-sm font-bold'
            : 'text-lg font-extrabold'
        }
      >
        {' '}
        {countryName}
      </h2>
      <ul className="mt-3">
        <li className="mt-1 text-sm">
          <span className="font-semibold">Population:</span>{' '}
          {population.toLocaleString('en-US')}
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Region:</span>{' '}
          {region ? region : 'None'}
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Capital:</span>{' '}
          {capital ? capital : 'None'}
        </li>
      </ul>
    </div>
  </div>
);

Card.defaultProps = {
  flagSrc: 'https://picsum.photos/300/200',
  countryName: 'Unknown Country',
  population: 1,
  region: 'None',
  capital: 'None',
};

Card.propTypes = {
  flagSrc: PropTypes.string,
  countryName: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
};

export default Card;
