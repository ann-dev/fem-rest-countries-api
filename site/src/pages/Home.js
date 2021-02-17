import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import CardGrid from 'components/homepage/CardGrid';

//TODO: add loader on loading items
function Home() {
  const [countries, setCountries] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // TODO: add errors
  const [error, setError] = useState('');
  const [count, setCount] = useState({
    prev: 0,
    next: 8,
  });
  const [currentData, setCurrent] = useState(
    countries.slice(count.prev, count.next)
  );

  //TODO: add error messages
  // possible separation of the API call from component?
  useEffect(() => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;alpha2Code;'
      )
      .catch((errorMessage) => setError(errorMessage))
      .then((countries) => {
        setCountries(countries.data);
        setHasMore(true);
        setCurrent(countries.data.slice(0, 8));
        setCount({ prev: 0, next: 8 });
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
        currentData.concat(countries.slice(count.prev + 8, count.next + 8))
      );
    }, 1500);
    setCount((prevState) => ({
      prev: prevState.prev + 8,
      next: prevState.next + 8,
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
