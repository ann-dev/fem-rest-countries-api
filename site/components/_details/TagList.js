import PropTypes from 'prop-types';
import Link from 'next/link';

const TagList = ({ title, tagData }) => {
  return (
    <div className="relative">
      <span className="taglist">{title}</span>
      {tagData?.length > 0 ? (
        tagData?.map((index) => (
          <>
            {alphaCodes
              .filter((code) => code.alpha3Code === index)
              .map((item) => (
                <Link key={`${index}`} href={`/${item.name}`} passHref>
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

TagList.defaultProps = {
  title: 'Sample title'
};

TagList.propTypes = {
  title: PropTypes.string,
  tagData: PropTypes.array.isRequired
};

export default TagList;
