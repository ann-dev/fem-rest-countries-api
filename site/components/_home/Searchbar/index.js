import PropTypes from 'prop-types';

const Searchbar = ({ onChange }) => (
  <input
    className="searchbar"
    type="text"
    placeholder="Search for a country..."
    onChange={onChange}
    role="search"
  />
);

Searchbar.propTypes = {
  onChange: PropTypes.function
};

export default Searchbar;
