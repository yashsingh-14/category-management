import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-main">
      <div className="container">
        <NavLink className="brand-link" to="/">
          <span className="brand-icon-box">
            <i className="bi bi-grid-3x3-gap-fill"></i>
          </span>
          Category Management System
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <i className="bi bi-list fs-4"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} end>
                <i className="bi bi-house-door"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                <i className="bi bi-bookmark-star"></i> Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                <i className="bi bi-cart3"></i> Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                <i className="bi bi-bag-check"></i> Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                <i className="bi bi-box-arrow-in-right"></i> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
                <i className="bi bi-person-plus"></i> Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
