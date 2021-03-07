import { useRouter } from 'next/router';
import { useFetch } from 'hooks/useFetch';
import Head from 'next/head';

import { API_URL } from 'constants/index';
import TagList from 'components/_details/TagList';
import Button from 'components/common/Button';
import Spinner from 'components/common/Spinner';

const CountryDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  const endpoint = `${API_URL}name/${name}?fields=flag;name;nativeName;population;capital;region;subregion;topLevelDomain;currencies;languages;borders;`;
  const { data, isLoading } = useFetch(endpoint);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Head>
        <title>
          Frontend Mentor | Rest Countries: {data[0]?.name || 'Unknown'}
        </title>
      </Head>

      <div className="details-page">
        <Button text="Back" className="px-8" buttonLink="/">
          <img
            src="/icons/arrow-back-outline.svg"
            className="inline-block w-5 mr-3"
          />
        </Button>
        <div className="details__wrapper">
          <div
            className="flag"
            style={{ minWidth: `calc((100% / 2) - 80px)`, maxHeight: 500 }}
          >
            <img
              className="object-cover h-full w-full"
              src={data[0]?.flag || ''}
              alt="flag"
            />
          </div>
          <div className="country-info">
            <h1 className="font-extrabold text-2xl lg:text-4xl">
              {data[0]?.name || 'Unknown'}
            </h1>
            <div className="country-info__details">
              <div className="mb-10 lg:mb-0 mr-20">
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Native name:</span>{' '}
                  {data[0]?.nativeName || 'Unknown'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Population:</span>{' '}
                  {data[0]?.population.toLocaleString('en-US') || 0}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Region:</span>{' '}
                  {data[0]?.region || 'None'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Sub Region:</span>{' '}
                  {data[0]?.subregion || 'None'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Capital:</span>{' '}
                  {data[0]?.capital || 'None'}
                </p>
              </div>
              <div>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Top Level Domain:</span>{' '}
                  {data[0]?.topLevelDomain || 'None'}
                </p>
                <p className="mb-3 lg:mb-2 w-64">
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
