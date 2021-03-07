import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => (
  <header className="relative shadow dark:bg-dark-600">
    <div className="header">
      <Link href="/">
        <a>
          <h1 className="text-sm md:text-2xl font-bold">
            Where in the world?
          </h1>
        </a>
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);

export default Header;
