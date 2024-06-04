import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white py-3 border-slate-100">
      <div className="container flex items-center justify-between">
        <h1>Header</h1>
        <div>
          <ul className="flex items-center justify-between gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
