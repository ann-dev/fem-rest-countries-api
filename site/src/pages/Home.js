import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import Card from 'components/common/Card';

function Home() {
  // TODO: refactor state
  // maybe change state to [state, setState] = useState({ isLoading: false, countries: []})?
  // const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  //TODO: pagination (2 on mobile, 6 on bigger), make cards smaller on mobile

  //TODO: separate hooks in hooks folder

  useEffect(() => {
    setIsLoading(true);
    //TODO: split API URL to params
    //TODO: add error messages
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

  //TODO: export to another component
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

  //TODO: add loader on loading items
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
