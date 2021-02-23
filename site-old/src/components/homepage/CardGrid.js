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
    dataLength={filteredData.length}
    next={onLoad}
    hasMore={hasMore}
    loader={<ScaleLoader color="#9CA3AF" css={override} size={150} />}
  >
    <div className="card-grid__wrapper">
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
    </div>
  </InfiniteScroll>
);

CardGrid.propTypes = {
  hasMore: PropTypes.bool,
  filteredData: PropTypes.array,
  onLoad: PropTypes.func,
  loadingState: PropTypes.bool,
};

export default CardGrid;
