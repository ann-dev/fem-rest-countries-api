import React from 'react';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import Card from 'components/common/Card';
import Data from 'fakeData.json';

const listCards = Data.map((item) => (
  <Card
    key={item.alpha2Code}
    flagSrc={item.flag}
    countryName={item.name}
    population={item.population}
    region={item.region}
    capital={item.capital}
  />
));

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Navigation />
        <div className="mt-8 grid gap-y-10 lg:grid-cols-2 xl:grid-cols-4">
          {listCards}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
