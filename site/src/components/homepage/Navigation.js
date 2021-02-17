import React from 'react';
import Input from 'components/common/Input';

const Navigation = () => (
  <nav className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-10 pt-6 lg:pt-12 h-30">
    <div className="col-span-2 lg:col-span-3 xl:col-span-2">
      <Input />
    </div>
    <div className="hidden lg:block lg:col-span-1 xl:col-span-2"></div>
    <div className="xl:col-span-1">
      <Input />
    </div>
    <div className="xl:col-span-1">
      <Input />
    </div>
  </nav>
);

export default Navigation;
