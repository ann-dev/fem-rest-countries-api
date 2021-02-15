import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from 'components/common/Card';

function CardGrid() {
  // TODO: refactor state
  // const [error, setError] = useState('');

  const [countries, setCountries] = useState([]);
  const [count, setCount] = useState({
    prev: 0,
    next: 8,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    countries.slice(count.prev, count.next)
  );

  useEffect(() => {
    //TODO: add error messages
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;alpha2Code;'
      )
      .then((countries) => {
        setCountries(countries.data);
        setHasMore(true);
        setCurrent(countries.data.slice(0, 8));
        setCount({ prev: 0, next: 8 });
      })
      .catch((err) => console.log('Error:', err));
  }, []);

  const loadMoreCards = () => {
    if (current.length === countries.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(countries.slice(count.prev + 8, count.next + 8))
      );
    }, 1500);
    setCount((prevState) => ({
      prev: prevState.prev + 8,
      next: prevState.next + 8,
    }));
  };

  //TODO: add loader on loading items

  return (
    <InfiniteScroll
      className="mt-8 md:-mt-2 grid gap-y-10 xl:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      dataLength={current.length}
      next={loadMoreCards}
      hasMore={hasMore}
      loader={<h2>Loading...</h2>}
    >
      {current &&
        current.map((country, index) => {
          return (
            <Card
              key={index}
              flagSrc={country.flag}
              countryName={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
    </InfiniteScroll>
  );
}

export default CardGrid;
