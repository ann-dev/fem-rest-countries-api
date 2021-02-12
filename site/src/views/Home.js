import React from 'react';

import Header from 'components/shared/Header';
import Navigation from 'components/homepage/Navigation';
import Card from 'components/common/Card';

const Home = () => (
  <>
    <Header />
    <main className="h-screen z-0 bg-gray-50 px-4">
      <Navigation />
      <div className="mt-8">
        <Card />
      </div>
    </main>
  </>
);

export default Home;
