import Head from 'next/head';
import { useState } from 'react';

import { API_URL } from 'constants/index';
import Searchbar from 'components/_home/Searchbar';
import Select from 'components/common/Select';
import CardGrid from 'components/_home/CardGrid';

const Home = ({ countries, error }) => {
  const regionData = [
    'Filter by Region',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ];
  const [selectedRegion, setSelectedRegion] = useState(regionData[0]);

  if (error) {
    return <div>An error occured: ${error.code}</div>;
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries</title>
      </Head>

      <div className="mt-8 md:mt-14 md:px-2 xl:px-5">
        <div className="card-filters__wrapper">
          <div className="w-full md:w-7/12 lg:w-3/5 xl:w-2/5">
            <Searchbar />
          </div>
          <div className="mt-10 md:mt-0 w-1/2 md:w-1/3 xl:w-2/12">
            <Select
              regionData={regionData}
              value={selectedRegion}
              onChange={setSelectedRegion}
            />
          </div>
        </div>
        <CardGrid data={countries} currentRegion={selectedRegion} />
      </div>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const response = await fetch(
      `${API_URL}all?fields=name;population;capital;flag;region;`
    );
    const countries = await response.json();
    return { countries };
  } catch (error) {
    return { error };
  }
};

export default Home;
