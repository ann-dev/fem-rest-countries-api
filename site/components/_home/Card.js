import PropTypes from 'prop-types';

const Card = ({ flagSrc, countryName, population, region, capital }) => (
  <div className="card">
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
  flagSrc: 'https://via.placeholder.com/600x400',
  countryName: 'Unknown Country',
  population: 1,
  region: 'None',
  capital: 'None'
};

Card.propTypes = {
  flagSrc: PropTypes.string,
  countryName: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.array
};

export default Card;
