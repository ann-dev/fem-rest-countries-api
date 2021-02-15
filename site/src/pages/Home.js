import React from 'react';

import DefaultLayout from 'pages/layouts/DefaultLayout';
import Navigation from 'components/homepage/Navigation';
import CardGrid from 'components/homepage/CardGrid';

const Home = () => (
  <>
    <DefaultLayout>
      <Navigation />
      <CardGrid />
    </DefaultLayout>
  </>
);

export default Home;
