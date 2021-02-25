import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => (
  <header className="z-10 relative shadow">
    <div className="header__container">
      <Link href="/">
        <a>
          <h1 className="text-sm md:text-2xl font-extrabold">
            Where in the world?
          </h1>
        </a>
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);

export default Header;