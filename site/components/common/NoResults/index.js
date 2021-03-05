const NoResults = () => (
  <div className="w-full absolute top-16 lg:top-32 text-center">
    <img
      src="/satellite.svg"
      className="mx-auto w-40"
      alt=""
      role="presentation"
    />
    <h1 className="mt-8 text-xl font-semibold">Sorry, no results found</h1>
    <span className="mt-1 text-sm inline-block w-64">Your search did not match any of the countries of this planet</span>
  </div>
);

export default NoResults;
