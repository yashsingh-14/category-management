import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <button className="mobile-nav-toggler" onClick={toggleSidebar}>
        <i className="bi bi-list fs-4 text-primary"></i>
      </button>

      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-header">
          <NavLink className="brand-link" to="/" onClick={() => setIsOpen(false)}>
            <span className="brand-icon-box">
              <i className="bi bi-layers-half"></i>
            </span>
            <span style={{color: 'var(--text)', fontWeight: 800}}>CategoryApp</span>
          </NavLink>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} end onClick={() => setIsOpen(false)}>
            <i className="bi bi-house"></i> Dashboard
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <i className="bi bi-grid-1x2"></i> Categories
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <i className="bi bi-box-seam"></i> Products
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <i className="bi bi-receipt"></i> Orders
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <i className="bi bi-cart3"></i> Cart
          </NavLink>
        </div>

        <div className="mt-auto">
          <NavLink to="/login" className="btn-primary w-100 d-flex justify-content-center align-items-center gap-2 text-decoration-none" onClick={() => setIsOpen(false)}>
            <i className="bi bi-person-circle"></i> User Login
          </NavLink>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-lg-none" 
          style={{zIndex: 999}}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Sidebar
