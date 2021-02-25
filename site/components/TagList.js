import Link from 'next/link';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants/index';

const TagList = ({ title, tagData, isLoading }) => {
  const fetchAlphaCodes = () => {
    const endpoint = `${API_URL}all?fields=name;alpha3Code;`;
    const { data } = useFetch(endpoint);

    return data;
  };

  const alphaCodes = fetchAlphaCodes();

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <span className="inline-block font-semibold mr-3">{title}</span>
      {tagData?.length > 0 ? (
        tagData?.map((index) => (
          <>
            {alphaCodes
              .filter((code) => code.alpha3Code === index)
              .map((item) => (
                <Link href={`/${item.name}`}>
                  <div className="cursor-pointer bg-white inline-block shadow text-center px-3 py-1 mr-4 mb-4">
                    <span className="text-sm">{item.name}</span>
                  </div>
                </Link>
              ))}
          </>
        ))
      ) : (
        <span className="-ml-2">None</span>
      )}
    </div>
  );
};

export default TagList;
