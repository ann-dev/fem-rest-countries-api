const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div>
        <p className="text-sm hover:text-gray-400">
          2021 | Made with <span>🔥</span>
        </p>
      </div>
      <div>
        <p className="text-sm">
          code by{' '}
          <a
            className="text-blue-500 hover:text-blue-300 transition duration-300"
            href="https://github.com/ann-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            ann-dev
          </a>
          , design by{' '}
          <a
            className="text-blue-500 hover:text-blue-300 transition duration-300"
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
