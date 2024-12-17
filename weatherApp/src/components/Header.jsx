import { Link } from "react-router-dom";

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
              <Link to="/" className="hover:text-yellow-300 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/historical"
                className="hover:text-yellow-300 transition"
              >
                Historical Weather
              </Link>
            </li>
            <li>
              <Link
                to="/add-location"
                className="hover:text-yellow-300 transition"
              >
                Add Location
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
