import React from 'react';

const Card = () => (
  <div className="bg-white shadow rounded-md mx-auto h-auto w-64 overflow-hidden">
    <img
      className="h-40"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
      alt="German flag"
    />
    <div className="h-44 px-5 pt-6">
      <h2 className="text-lg font-extrabold">Germany</h2>
      <ul className="mt-3">
        <li className="mt-1 text-sm">
          <span className="font-semibold">Population:</span> 81,770,900
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Region:</span> Europe
        </li>
        <li className="mt-1 text-sm">
          <span className="font-semibold">Capital:</span> Berlin
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
