import PropTypes from 'prop-types';

import GridWrapper from './GridWrapper';
import NoResults from 'components/common/NoResults';

const CardGrid = ({ data, currentRegion, currentSearchData }) => {
  // helpers
  const regionData = data.filter((item) => item.region === currentRegion);

  const filterSearchData = (data) =>
    data.filter(
      (item) =>
        item.name.toLowerCase().indexOf(currentSearchData.toLowerCase()) !== -1
    );

  const renderDataInGrid = (gridData) =>
    gridData.map((item, index) => <GridWrapper item={item} index={index} />);

  // render
  if (currentSearchData && currentRegion !== 'Filter by Region') {
    const filteredRegionSearchData = filterSearchData(regionData);

    return filteredRegionSearchData.length > 0 ? (
      renderDataInGrid(filteredRegionSearchData)
    ) : (
      <NoResults />
    );
  }

  if (currentSearchData) {
    const filteredSearchData = filterSearchData(data);

    return filteredSearchData.length > 0 ? (
      renderDataInGrid(filterSearchData(data))
    ) : (
      <NoResults />
    );
  }

  if (currentRegion !== 'Filter by Region') {
    return renderDataInGrid(regionData);
  }

  return renderDataInGrid(data);
};

CardGrid.propTypes = {
  data: PropTypes.array.isRequired,
  currentRegion: PropTypes.string.isRequired,
  currentSearchData: PropTypes.string.isRequired
};

export default CardGrid;
