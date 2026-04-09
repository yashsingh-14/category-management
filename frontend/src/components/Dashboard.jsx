import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [stats] = useState({
    totalCategories: 0,
    activeProducts: 3,
    cartItems: 0,
    totalOrders: 0
  })

  return (
    <div className="container-fluid py-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Dashboard</h2>
          <p className="text-secondary mb-0">Overview of your Enterprise System</p>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="stat-card">
            <div className="stat-icon blue">
              <i className="bi bi-grid-fill"></i>
            </div>
            <div className="stat-info">
              <h3>{stats.totalCategories}</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stat-card">
            <div className="stat-icon purple">
              <i className="bi bi-box-seam-fill"></i>
            </div>
            <div className="stat-info">
              <h3>{stats.activeProducts}</h3>
              <p>Products</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stat-card">
            <div className="stat-icon amber">
              <i className="bi bi-cart-fill"></i>
            </div>
            <div className="stat-info">
              <h3>{stats.cartItems}</h3>
              <p>Cart Items</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stat-card">
            <div className="stat-icon green">
              <i className="bi bi-bag-check-fill"></i>
            </div>
            <div className="stat-info">
              <h3>{stats.totalOrders}</h3>
              <p>Total Orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="card-custom">
            <div className="card-header-custom d-flex justify-content-between align-items-center bg-transparent">
              <span><i className="bi bi-star-fill me-2 text-warning"></i> Featured Premium Products</span>
              <Link to="/products" className="btn btn-sm btn-outline-primary rounded-pill px-3">View All</Link>
            </div>
            <div className="card-body-custom">
              <div className="row g-4">
                {/* 3D Hover Embedded Cards */}
                <div className="col-md-4 tilt-wrapper">
                  <div className="card-3d bg-white rounded-3 p-3 text-center border h-100" style={{cursor: 'pointer'}}>
                    <img src="/images/laptop.png?v=2" alt="Laptop" className="img-fluid mb-3" style={{height: '120px', objectFit: 'contain'}} />
                    <h6 className="fw-bold fs-5">Aurora X-1 Laptop</h6>
                    <p className="text-muted small">$1,899</p>
                  </div>
                </div>
                <div className="col-md-4 tilt-wrapper">
                  <div className="card-3d bg-white rounded-3 p-3 text-center border h-100" style={{cursor: 'pointer'}}>
                    <img src="/images/watch.png?v=2" alt="Watch" className="img-fluid mb-3" style={{height: '120px', objectFit: 'contain'}} />
                    <h6 className="fw-bold fs-5">Titanium Smartwatch Pro</h6>
                    <p className="text-muted small">$349</p>
                  </div>
                </div>
                <div className="col-md-4 tilt-wrapper">
                  <div className="card-3d bg-white rounded-3 p-3 text-center border h-100" style={{cursor: 'pointer'}}>
                    <img src="/images/headphones.png?v=2" alt="Headphones" className="img-fluid mb-3" style={{height: '120px', objectFit: 'contain'}} />
                    <h6 className="fw-bold fs-5">Acoustic Wave Headphones</h6>
                    <p className="text-muted small">$299</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
