import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { theme, setTheme } = useTheme('light');

  const checkTheme = () => {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme && localStorageTheme === 'dark') {
      setTheme('dark');
    }
  };

  const toggleTheme = () => {
    checkTheme();
    localStorage.setItem('theme', theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="relative shadow dark:bg-dark-600">
      <div className="header">
        <Link href="/">
          <a>
            <h1 className="text-sm md:text-2xl font-bold">
              Where in the world?
            </h1>
          </a>
        </Link>
        <ThemeSwitcher onChange={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
