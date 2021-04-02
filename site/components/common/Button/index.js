import PropTypes from 'prop-types';
import Link from 'next/link';

const Button = ({ className, text, children, buttonLink }) => (
  <Link href={buttonLink}>
    <button className={`button ${className}`}>
      {children}
      {text}
    </button>
  </Link>
);

Button.defaultProps = {
  className: 'button',
  text: 'Sample text',
  buttonLink: ''
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  buttonLink: PropTypes.string
};

export default Button;
