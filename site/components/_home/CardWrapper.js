import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from './Card';

const CardWrapper = ({ item }) => {
  return (
    <Link as={`/${item.name.common}`} href="/[name]">
      <a>
        <Card
          flagSrc={item.flags['svg']}
          countryName={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      </a>
    </Link>
  );
};

CardWrapper.propTypes = {
  item: PropTypes.object.isRequired
};

export default CardWrapper;
