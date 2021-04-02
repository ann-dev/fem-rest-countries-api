import PropTypes from 'prop-types';

const Searchbar = ({ onChange }) => (
  <input
    className="searchbar"
    type="search"
    placeholder="Search for a country..."
    onChange={onChange}
    role="search"
    aria-label="Search"
  />
);

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Searchbar;
