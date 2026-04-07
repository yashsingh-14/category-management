import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../api/categoryApi'

function Dashboard() {
  const [totalCategories, setTotalCategories] = useState('—')
  const [systemStatus, setSystemStatus] = useState('Checking...')
  const [statusColor, setStatusColor] = useState('var(--text-muted)')

  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const res = await getAllCategories()
      setTotalCategories(res.data.length)
      setSystemStatus('Online')
      setStatusColor('var(--success)')
    } catch {
      setSystemStatus('Offline')
      setStatusColor('var(--danger)')
    }
  }

  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      {/* Page Title */}
      <div className="section-header" style={{ paddingTop: '2rem' }}>
        <h2><i className="bi bi-speedometer2 me-2" style={{ color: 'var(--primary)' }}></i>Dashboard</h2>
        <p>Overview of your Category Management System</p>
      </div>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-lg-3">
          <div className="stat-card">
            <div className="stat-icon blue">
              <i className="bi bi-bookmark-star-fill"></i>
            </div>
            <div className="stat-info">
              <h3>{totalCategories}</h3>
              <p>Total Categories</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="stat-card">
            <div className="stat-icon green">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className="stat-info">
              <h3 style={{ color: statusColor, fontSize: '1.2rem' }}>{systemStatus}</h3>
              <p>System Status</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="stat-card">
            <div className="stat-icon amber">
              <i className="bi bi-cart3"></i>
            </div>
            <div className="stat-info">
              <h3>0</h3>
              <p>Cart Items</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="stat-card">
            <div className="stat-icon purple">
              <i className="bi bi-bag-check-fill"></i>
            </div>
            <div className="stat-info">
              <h3>0</h3>
              <p>Total Orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card-custom">
        <div className="card-header-custom">
          <i className="bi bi-lightning-charge"></i>
          <span>Quick Actions</span>
        </div>
        <div className="card-body-custom">
          <div className="row g-3">
            <div className="col-sm-6 col-md-3">
              <Link to="/categories" className="btn btn-success w-100 fw-semibold shadow-sm py-2">
                <i className="bi bi-plus-lg me-1"></i> Add Category
              </Link>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="/categories" className="btn btn-primary w-100 fw-semibold shadow-sm py-2">
                <i className="bi bi-eye me-1"></i> View All
              </Link>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="/cart" className="btn btn-outline-secondary w-100 fw-semibold py-2">
                <i className="bi bi-cart3 me-1"></i> Cart
              </Link>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="/orders" className="btn btn-outline-secondary w-100 fw-semibold py-2">
                <i className="bi bi-bag-check me-1"></i> Orders
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="card-custom">
        <div className="card-header-custom">
          <i className="bi bi-info-circle"></i>
          <span>Welcome</span>
        </div>
        <div className="card-body-custom">
          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Category Management System</p>
          <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.7, fontSize: '0.93rem' }}>
            This is a full-stack ecommerce category management application built with <strong>ReactJS</strong> on the frontend 
            and <strong>Spring Boot</strong> on the backend. You can create, view, update, and delete product categories 
            using the Categories page. The system supports soft-delete to prevent accidental data loss.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
