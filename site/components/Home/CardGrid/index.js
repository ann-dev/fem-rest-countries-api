import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';

const CardGrid = ({ data, hasMore, onLoad }) => {
  return (
    <InfiniteScroll
      className="card-grid__wrapper"
      dataLength={data.length}
      next={onLoad}
      hasMore={hasMore}
      loader={<h1>Loading...</h1>}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          flagSrc={item.flag}
          countryName={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </InfiniteScroll>
  );
};

export default CardGrid;
