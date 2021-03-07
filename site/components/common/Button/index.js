import Link from 'next/link';

const Button = ({ className, text, children, buttonLink }) => (
  <Link href={buttonLink}>
    <button
      className={`button ${className}`}
    >
      {children}
      {text}
    </button>
  </Link>
);

export default Button;
