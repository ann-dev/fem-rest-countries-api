const NoResults = () => (
  <div className="noresults">
    <img
      src="/satellite.svg"
      className="mx-auto w-40"
      alt=""
      role="presentation"
    />
    <h1 className="noresults__title">Sorry, no results found</h1>
    <span className="noresults__message">
      Your search did not match any of the countries of this planet
    </span>
  </div>
);

export default NoResults;
