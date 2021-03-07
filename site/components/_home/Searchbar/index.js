const Searchbar = ({ onChange }) => (
  <input
    className="searchbar"
    type="text"
    placeholder="Search for a country..."
    onChange={onChange}
  />
);

export default Searchbar;
