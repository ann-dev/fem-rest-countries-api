import Link from 'next/link';
import Card from './Card';

const CardGrid = ({ data, currentRegion }) => {
  return (
    <div className="card-grid__wrapper">
      {currentRegion === 'Filter by Region'
        ? data.map((item, index) => (
            <Link as={`/${item.name}`} href="/[name]" key={index}>
              <a>
                <Card
                  flagSrc={item.flag}
                  countryName={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              </a>
            </Link>
          ))
        : data
            .filter((item) => item.region === currentRegion)
            .map((item, index) => (
              <Link as={`/${item.name}`} href="/[name]" key={index}>
                <a>
                  <Card
                    flagSrc={item.flag}
                    countryName={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                  />
                </a>
              </Link>
            ))}
    </div>
  );
};

export default CardGrid;
