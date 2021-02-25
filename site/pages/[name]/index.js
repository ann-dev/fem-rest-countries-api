import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants/index';

const CountryDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  const endpoint = `${API_URL}${name}?fields=flag;name;nativeName;population;capital;region;subregion;topLevelDomain;currencies;languages;borders;`;
  console.log(endpoint);
  const { data, isLoading } = useFetch(endpoint);

  // data[0]?.languages.forEach((lang) => console.log(lang.name));

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="h-10 w-32 bg-red-300 mt-20"></div>
      <div className="flex flex-row mt-20">
        <div
          className="mr-16 overflow-hidden shadow-md"
          style={{ minWidth: `calc((100% / 2) - 80px)` }}
        >
          <img className="object-cover w-full" src={data[0]?.flag} alt="flag" />
        </div>
        <div className="ml-14 mt-10 w-full">
          <h1 className="font-extrabold text-4xl">
            {data[0]?.name}
          </h1>
          <div className="flex flex-row justify-between mt-8 mr-10">
            <div>
              <p className="mb-2">
                <span className="font-semibold">Native name:</span>{' '}
                {data[0]?.nativeName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Population:</span>{' '}
                {data[0]?.population.toLocaleString('en-US')}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Region:</span> {data[0]?.region}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Sub Region:</span>{' '}
                {data[0]?.subregion}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Capital:</span>{' '}
                {data[0]?.capital}
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold">Top Level Domain:</span>{' '}
                {data[0]?.topLevelDomain}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Currencies:</span>{' '}
                <span>
                  {data[0]?.currencies
                    .filter((currency) => currency.name)
                    .map((currency) => `${currency.name} (${currency.code})`)
                    .join(', ')}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Languages:</span>{' '}
                {data[0]?.languages
                  .filter((lang) => lang.name)
                  .map((lang) => `${lang.name}`)
                  .join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;

// 'https://restcountries.eu/rest/v2/all?fields=name;population;capital;flag;region;'
