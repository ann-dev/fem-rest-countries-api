import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { API_URL, FILTER_REGIONS } from 'constants/index';
import Searchbar from 'components/_home/Searchbar';
import Select from 'components/common/Select';
import CardGrid from 'components/_home/CardGrid';

const Home = ({ countries, error }) => {
  const [selectedRegion, setSelectedRegion] = useState(FILTER_REGIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // helper functions that eliminate passing setState function to child components for setting parent state (bad practice!!!)
  // emitting events from child component to parent component.
  // parent component do the sets of state.
  const onSearchChange = (event) => setSearchQuery(event.target.value);
  const onValueChanged = (value) => setSelectedRegion(value);

  if (error) {
    return <div>An error occured: ${error.code}</div>;
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries</title>
      </Head>

      <div className="mt-8 md:mt-14 md:px-2 xl:px-5">
        <div className="card-filters">
          <div className="w-full md:w-7/12 lg:w-3/5 xl:w-2/5">
            <Searchbar onChange={onSearchChange} />
          </div>
          <div className="mt-10 md:mt-0 w-1/2 md:w-1/3 xl:w-2/12">
            <Select
              regionData={FILTER_REGIONS}
              value={selectedRegion}
              onChange={onValueChanged}
            />
          </div>
        </div>
        <div className="card-grid relative">
          {!countries && <h1>Failed fetching data :(</h1>}
          {countries && (
            <CardGrid
              data={countries}
              currentRegion={selectedRegion}
              currentSearchData={searchQuery}
            />
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const response = await fetch(
    `${API_URL}all?fields=name,flags,population,region,capital,`
  );
  const countries = await response.json();

  if (!countries) {
    return {
      notFound: true
    };
  }

  return {
    props: { countries }
  };
}

Home.propTypes = {
  countries: PropTypes.array,
  error: PropTypes.object
};

export default Home;
