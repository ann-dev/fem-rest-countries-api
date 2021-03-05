const Searchbar = ({ onChange }) => (
  <input
    className="searchbar__wrapper"
    type="text"
    placeholder="Search for a country..."
    onChange={onChange}
  />
);

export default Searchbar;
