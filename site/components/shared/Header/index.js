import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => (
  <header className="z-10 relative shadow bg-white">
    <div className="header__container lg:px-12 md:px-6 xl:px-5 2xl:px-12">
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
