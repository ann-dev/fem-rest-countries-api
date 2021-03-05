import Link from 'next/link';
import Card from './Card';

const GridWrapper = ({item, index}) => {
  return (
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
  );
};

export default GridWrapper;
