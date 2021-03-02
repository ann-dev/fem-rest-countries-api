import Link from 'next/link';

const Button = ({ className, text, children, buttonLink }) => (
  <Link href={buttonLink}>
    <button
      className={`bg-white shadow-md hover:shadow-lg transition duration-300 animate-fade-in py-2 rounded-md flex items-center ${className}`}
    >
      {children}
      {text}
    </button>
  </Link>
);

export default Button;
