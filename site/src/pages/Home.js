import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import Card from 'components/common/Card';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const API_URL =
      'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;alpha2Code;';
    axios
      .get(API_URL)
      .then((countries) => {
        const allCountries = countries.data;
        setIsLoading(false);
        setCountries(allCountries);
      })
      .catch((err) => console.log('Error:', err));
  }, []);

  const listCards = countries.map((item) => (
    <Card
      key={item.alpha2Code}
      flagSrc={item.flag}
      countryName={item.name}
      population={item.population}
      region={item.region}
      capital={item.capital}
    />
  ));

  return (
    <>
      <DefaultLayout>
        <Navigation />
        <div className="mt-8 md:-mt-2 grid gap-y-10 xl:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!isLoading ? listCards : <h4>Loading...</h4>}
        </div>
      </DefaultLayout>
    </>
  );
}

export default Home;
