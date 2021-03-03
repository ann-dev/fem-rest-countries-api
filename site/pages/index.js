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

      <div className="mt-8 md:mt-14 md:px-2 xl:px-5">
        <div className="-mt-2 lg:-ml-1 md:px-12 lg:px-10 xl:px-0 2xl:px-8">
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
