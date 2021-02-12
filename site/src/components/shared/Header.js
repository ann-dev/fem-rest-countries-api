import React from 'react';

const Header = () => (
  <header className="z-10 relative shadow">
    <div className="container mx-auto 2xl px-4 py-8 pb-7 flex flex-row flex-1 justify-between">
      <h1 className="text-sm font-extrabold">Where in the world?</h1>
      <button className="text-xs tracking-wide">Dark Mode</button>
    </div>
  </header>
);

export default Header;
