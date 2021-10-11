import Head from 'next/head';
import { API_URL } from 'constants/index';
import Button from 'components/common/Button';

const CountryDetails = ({ country }) => {
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Rest Countries |{' '}
          {country[0]?.name.common || 'Unknown'}
        </title>
      </Head>

      <div className="details-page">
        <Button text="Back" className="px-8" buttonLink="/">
          <img
            src="/icons/arrow-back-outline.svg"
            className="inline-block w-5 mr-3"
            alt=""
            role="presentation"
          />
        </Button>
        <div className="details__wrapper">
          <div
            className="flag"
            style={{ minWidth: `calc((100% / 2) - 80px)`, maxHeight: 500 }}
          >
            <img
              className="object-cover h-full w-full"
              src={country[0]?.flags.svg || ''}
              alt={`${country[0]?.name.common} flag`}
            />
          </div>
          <div className="country-info">
            <h1 className="font-extrabold text-2xl lg:text-4xl">
              {country[0]?.name.common || 'Unknown'}
            </h1>
            <div className="country-info__details">
              <div className="mb-10 lg:mb-0 mr-20">
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Native name:</span>{' '}
                  {country[0]?.name.nativeName[
                    Object.keys(country[0]?.name.nativeName)[0]
                  ].official || 'Unknown'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Population:</span>{' '}
                  {country[0]?.population.toLocaleString('en-US') || 0}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Region:</span>{' '}
                  {country[0]?.region || 'None'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Sub Region:</span>{' '}
                  {country[0]?.subregion || 'None'}
                </p>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Capital:</span>{' '}
                  {country[0]?.capital || 'None'}
                </p>
              </div>
              <div>
                <p className="mb-3 lg:mb-2">
                  <span className="font-semibold">Top Level Domains:</span>{' '}
                  {country[0]?.tld.join(', ') || 'None'}
                </p>
                <p className="mb-3 lg:mb-2 w-64">
                  <span className="font-semibold">Currencies:</span>{' '}
                  <span>
                    {Object.entries(country[0]?.currencies)
                      .map((item) => item[1].name)
                      .join(', ') || 'None'}
                  </span>
                </p>
                <p className="mb-2 w-72">
                  <span className="font-semibold">Languages:</span>{' '}
                  {Object.entries(country[0].languages)
                    .map((item) => item[1])
                    .join(', ') || 'Unknown'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}all?fields=name,`);
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { name: country.name.common }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch(`${API_URL}name/${name}?fullText=true`);
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { country: data } };
};

export default CountryDetails;
