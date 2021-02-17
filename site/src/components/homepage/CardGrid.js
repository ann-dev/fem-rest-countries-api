import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import ScaleLoader from 'react-spinners/ScaleLoader';
import Card from 'components/common/Card';

const override = {
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
};

const CardGrid = ({ hasMore, filteredData, onLoad }) => (
  <InfiniteScroll
    className="pb-16 mt-8 md:-mt-2 grid gap-y-10 xl:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    dataLength={filteredData.length}
    next={onLoad}
    hasMore={hasMore}
    loader={<ScaleLoader color="#9CA3AF" css={override} size={150} />}
  >
    {filteredData &&
      filteredData.map((country, index) => {
        return (
          <Card
            key={index}
            flagSrc={country.flag}
            countryName={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
  </InfiniteScroll>
);

CardGrid.propTypes = {
  hasMore: PropTypes.bool,
  filteredData: PropTypes.array,
  onLoad: PropTypes.func,
  loadingState: PropTypes.bool,
};

export default CardGrid;
