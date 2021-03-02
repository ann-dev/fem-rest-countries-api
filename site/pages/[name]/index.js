import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';
import Head from 'next/head';

import { API_URL } from '../../constants';
import TagList from '../../components/_details/TagList';
import Button from '../../components/common/Button';

const CountryDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  const endpoint = `${API_URL}name/${name}?fields=flag;name;nativeName;population;capital;region;subregion;topLevelDomain;currencies;languages;borders;`;
  const { data, isLoading } = useFetch(endpoint);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Head>
        <title>
          Frontend Mentor | Rest Countries: {data[0]?.name || 'Unknown'}
        </title>
      </Head>

      <div className="mt-20">
        <Button text="Back" className="px-8" buttonLink="/">
          <img
            src="/icons/arrow-back-outline.svg"
            className="inline-block w-5 mr-3"
          />
        </Button>
        <div className="flex flex-row mt-24">
          <div
            className="mr-16 overflow-hidden shadow-lg transition duration-300 animate-fade-in"
            style={{ minWidth: `calc((100% / 2) - 80px)`, maxHeight: 400 }}
          >
            <img
              className="object-cover h-full w-full"
              src={data[0]?.flag || 'https://picsum.photos/600/500'}
              alt="flag"
            />
          </div>
          <div className="ml-14 mt-10 w-full transition duration-300 animate-fade-in">
            <h1 className="font-extrabold text-4xl">
              {data[0]?.name || 'Unknown'}
            </h1>
            <div className="flex flex-row mt-8 mr-10 mb-14">
              <div className="mr-20">
                <p className="mb-2">
                  <span className="font-semibold">Native name:</span>{' '}
                  {data[0]?.nativeName || 'Unknown'}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Population:</span>{' '}
                  {data[0]?.population.toLocaleString('en-US') || 0}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Region:</span>{' '}
                  {data[0]?.region || 'None'}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Sub Region:</span>{' '}
                  {data[0]?.subregion || 'None'}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Capital:</span>{' '}
                  {data[0]?.capital || 'None'}
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Top Level Domain:</span>{' '}
                  {data[0]?.topLevelDomain || 'None'}
                </p>
                <p className="mb-2 w-64">
                  <span className="font-semibold">Currencies:</span>{' '}
                  <span>
                    {data[0]?.currencies
                      .filter((currency) => currency.name)
                      .map((currency) => `${currency.name} (${currency.code})`)
                      .join(', ') || 'None'}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Languages:</span>{' '}
                  {data[0]?.languages
                    .filter((language) => language.name)
                    .map((language) => `${language.name}`)
                    .join(', ') || 'Unknown'}
                </p>
              </div>
            </div>
            <TagList
              title="Border countries:"
              isLoading={isLoading}
              tagData={data[0]?.borders}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
