import Head from 'next/head';

import { API_URL } from 'constants/index';
import Searchbar from 'components/_home/Searchbar';
import CardGrid from 'components/_home/CardGrid';

const Home = ({ countries, error }) => {
  if (error) {
    return <div>An error occured: ${error.code}</div>;
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | REST Countries</title>
      </Head>

      <div className="mt-14 xl:px-5">
        <div className="-mt-2 -ml-1 2xl:px-8">
          <Searchbar />
        </div>
        <CardGrid data={countries} />
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
