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
          <div className="bg-white inline-block shadow text-center w-28 h-6 mr-4 mb-4">
            <span className="text-sm">
              {alphaCodes
                .filter((code) => code.alpha3Code === index)
                .map((item) => item.name)}
            </span>
          </div>
        ))
      ) : (
        <span className="-ml-2">None</span>
      )}
    </div>
  );
};

export default TagList;
