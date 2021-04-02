import PropTypes from 'prop-types';
import Link from 'next/link';

import { useFetch } from 'hooks/useFetch';
import { API_URL } from 'constants/index';

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
    <div className="relative">
      <span className="taglist">{title}</span>
      {tagData?.length > 0 ? (
        tagData?.map((index) => (
          <>
            {alphaCodes
              .filter((code) => code.alpha3Code === index)
              .map((item) => (
                <Link key={`${index}`} href={`/${item.name}`}>
                  <div className="tag">
                    <span className="text-sm">{item.name}</span>
                  </div>
                </Link>
              ))}
          </>
        ))
      ) : (
        <span className="absolute top-1 left-36">None</span>
      )}
    </div>
  );
};

TagList.propTypes = {
  title: PropTypes.string,
  tagData: PropTypes.array,
  isLoading: PropTypes.bool
};

export default TagList;
