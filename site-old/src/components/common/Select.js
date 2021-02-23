import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/common/Input';

function Select() {
  return (
    <Input>
      <select value="Select">
        <option value="php">PHP</option>
        <option value="laravel">Laravel</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
    </Input>
  );
}

Select.propTypes = {
  options: PropTypes.array,
};

export default Select;
