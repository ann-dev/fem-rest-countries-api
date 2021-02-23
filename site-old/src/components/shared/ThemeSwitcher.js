import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import MoonIcon from 'assets/icons/moon-outline.svg';

function ThemeSwitcher() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <Switch.Group as="div" className="flex items-center space-x-4">
      <Switch.Label>
        <img
          src={MoonIcon}
          className="inline-block w-4 lg:w-5 h-4 lg:h-5"
          alt=""
          role="presentation"
        />
      </Switch.Label>
      <Switch
        as="button"
        checked={switchValue}
        onChange={setSwitchValue}
        className={`${
          switchValue ? 'bg-green-500' : 'bg-gray-200'
        } toggle-switch__wrapper focus:outline-none focus:shadow-outline`}
      >
        {({ checked }) => (
          <span
            className={`${
              checked ? 'translate-x-5' : 'translate-x-0'
            } toggle-switch__button`}
          />
        )}
      </Switch>
    </Switch.Group>
  );
}

export default ThemeSwitcher;
