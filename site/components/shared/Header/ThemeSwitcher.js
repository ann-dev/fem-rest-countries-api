function ThemeSwitcher({ onChange }) {
  return (
    <button onClick={onChange}>
      <img
        src="/icons/moon-outline.svg"
        className="inline-block w-4 h-4 mr-2 -mt-1"
        alt=""
        role="presentation"
      />
      <span className="text-sm md:text-base">Dark Mode</span>
    </button>
  );
}

export default ThemeSwitcher;
