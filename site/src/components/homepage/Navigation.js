import React from 'react';
import Input from 'components/common/Input';

const Navigation = () => (
  <nav className="grid grid-cols-2 gap-4 gap-y-10 pt-6 h-40">
    <div className="col-span-2">
      <Input />
    </div>
    <div>
      <Input />
    </div>
    <div>
      <Input />
    </div>
  </nav>
);

export default Navigation;
