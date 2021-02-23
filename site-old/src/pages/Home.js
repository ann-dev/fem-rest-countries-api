import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import CardGrid from 'components/homepage/CardGrid';

function Home() {
  const [countries, setCountries] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [count, setCount] = useState({
    prev: 0,
    next: 12,
  });
  const [currentData, setCurrent] = useState(
    countries.slice(count.prev, count.next)
  );

  //TODO: add error messages
  useEffect(() => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;alpha2Code;'
      )
      .catch((errorMessage) => setError(errorMessage))
      .then((countries) => {
        setCountries(countries.data);
        setHasMore(true);
        setCurrent(countries.data.slice(0, 12));
        setCount({ prev: 0, next: 12 });
        setIsLoading(false);
      });
  }, []);

  const loadMoreCards = () => {
    if (currentData.length === countries.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        currentData.concat(countries.slice(count.prev + 12, count.next + 12))
      );
    }, 1500);
    setCount((prevState) => ({
      prev: prevState.prev + 12,
      next: prevState.next + 12,
    }));
    setIsLoading(false);
  };

  return (
    <>
      <DefaultLayout>
        <Navigation />
        {error ? `<h2>An error has occured: </h2> + ${error}` : null}
        <CardGrid
          hasMore={hasMore}
          filteredData={currentData}
          onLoad={loadMoreCards}
          loadingState={isLoading}
        />
      </DefaultLayout>
    </>
  );
}

export default Home;
