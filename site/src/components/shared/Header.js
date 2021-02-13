import React from 'react';
import MoonIcon from 'assets/icons/moon-outline.svg';

const Header = () => (
  <header className="z-10 relative shadow">
    <div className="container mx-auto 2xl px-4 xl:px-0.5 py-8 lg:py-6 pb-7 flex flex-row flex-1 justify-between">
      <h1 className="text-sm lg:text-2xl font-extrabold">
        Where in the world?
      </h1>
      <button className="text-xs lg:text-base font-semibold tracking-wide lg:tracking-normal">
        <img
          src={MoonIcon}
          className="inline-block w-4 lg:w-5 h-4 lg:h-5 -mt-1 mr-2"
          alt=""
          role="presentation"
        />
        <span>Dark Mode</span>
      </button>
    </div>
  </header>
);

export default Header;
