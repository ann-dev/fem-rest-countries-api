import Head from 'next/head';
import axios from 'axios';

import CardGrid from '../components/Home/CardGrid';

const Home = ({ countries, error }) => {

  if (error) {
    return <div>An error occured: ${error.code}</div>;
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries</title>
      </Head>

      <CardGrid data={countries} />
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
