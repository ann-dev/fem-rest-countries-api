import Head from 'next/head';
import axios from 'axios';
// import { useState } from 'react';

import CardGrid from '../components/Home/CardGrid';

const Home = ({ countries, error }) => {
  // const [modifiedData, setModifiedData] = useState(countries.slice(0, 12));
  // const [dataCount, setDataCount] = useState({
  //   first: 0,
  //   last: 12
  // });
  // const [errorCountries, setErrorCountries] = useState(null);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries</title>
      </Head>

      <CardGrid data={countries}/>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const response = await axios.get(
      'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;'
    );
    const countries = response.data;
    return { countries };
  } catch (error) {
    return { error };
  }
};

export default Home;
