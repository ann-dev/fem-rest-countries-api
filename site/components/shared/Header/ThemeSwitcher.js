import { useState } from 'react';
import { Switch } from '@headlessui/react';

function ThemeSwitcher() {
  const [switchValue, setSwitchValue] = useState(false);
  const onSwitch = (value) => setSwitchValue(value);

  return (
    <Switch.Group as="div" className="flex items-center space-x-4">
      <Switch.Label>
        <img
          src='/icons/moon-outline.svg'
          className="inline-block w-4 lg:w-5 h-4 lg:h-5"
          alt=""
          role="presentation"
        />
      </Switch.Label>
      <Switch
        as="button"
        checked={switchValue}
        onChange={onSwitch}
        className={`${
          switchValue ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-dark-700'
        } toggle-switch border-transparent focus:outline-none focus:shadow-outline`}
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
