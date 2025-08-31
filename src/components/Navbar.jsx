import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = ({ cartCount = 0, onCartClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-4">

        {/* Brand + Hamburger */}
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler me-2"
            type="button"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/" onClick={() => setExpanded(false)}>
            Store
          </Link>
        </div>

        {/* Cart Icon (ALWAYS visible) */}
        <div
          className="text-white position-relative d-lg-none"
          style={{ cursor: 'pointer' }}
          onClick={onCartClick}
        >
          <FaShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {cartCount}
            </span>
          )}
        </div>

        {/* Navigation and Cart for Desktop */}
        <div className={`collapse navbar-collapse justify-content-between ${expanded ? 'show' : ''}`}>
          {/* Left: Nav Links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setExpanded(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={() => setExpanded(false)}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>Contact Us</Link>
            </li>
          </ul>

          {/* Right: Cart Icon for Desktop */}
          <div
            className="text-white position-relative d-none d-lg-block"
            style={{ cursor: 'pointer' }}
            onClick={onCartClick}
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
