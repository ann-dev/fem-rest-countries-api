import React from 'react';

import Input from 'components/common/Input';
import Select from 'components/common/Select';

// const filterOptions = [
//   'Filter by Region',
//   'Africa',
//   'America',
//   'Asia',
//   'Europe',
//   'Oceania',
// ];

const Navigation = () => (
  <nav className="navigation__wrapper">
    <div className="col-span-2 lg:col-span-3 xl:col-span-2">
      <Input />
    </div>
    <div className="hidden lg:block lg:col-span-1 xl:col-span-2"></div>
    <div className="xl:col-span-1">
      <Input />
    </div>
    <div className="xl:col-span-1">
      <Select />
    </div>
  </nav>
);

export default Navigation;
