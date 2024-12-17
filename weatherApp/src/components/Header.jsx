const Header = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Weather Dashboard</div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/historical"
                className="hover:text-yellow-300 transition"
              >
                Historical Weather
              </a>
            </li>
            <li>
              <a
                href="/add-location"
                className="hover:text-yellow-300 transition"
              >
                Add Location
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
