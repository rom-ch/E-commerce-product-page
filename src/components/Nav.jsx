const navLinks = ["Collection", "Men", "Women", "About", "Contact"];

export function Nav({ setIsMenuOpen }) {
  return (
    <nav className="absolute top-0 left-0 z-100 h-full w-66 bg-white px-6 py-6 lg:static lg:z-auto lg:h-auto lg:w-auto lg:p-0">
      <button
        className="absolute top-8 left-6 cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <ul className="lg:text-secondary-200 mt-16 flex flex-col gap-6 text-lg font-bold lg:mt-auto lg:flex-row lg:text-base">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="decoration-primary-400 underline-offset-4 decoration-2 hover:underline lg:decoration-3 lg:underline-offset-40 lg:hover:underline"
          >
            <a onClick={() => setIsMenuOpen(false)} href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
