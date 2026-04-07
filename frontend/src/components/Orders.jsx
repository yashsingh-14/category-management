import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <div className="section-header" style={{ paddingTop: '2rem' }}>
        <h2><i className="bi bi-bag-check me-2" style={{ color: 'var(--primary)' }}></i>My Orders</h2>
        <p>Track and manage your order history</p>
      </div>

      <div className="card-custom">
        <div className="card-header-custom">
          <i className="bi bi-bag-check"></i>
          <span>Order History</span>
          <span className="count-badge">0</span>
        </div>
        <div className="card-body-custom">
          <div className="placeholder-page" style={{ padding: '3rem 1rem' }}>
            <i className="bi bi-bag-x icon-lg" style={{ fontSize: '3.5rem', color: '#cbd5e1' }}></i>
            <h2 style={{ fontSize: '1.3rem', marginTop: '0.75rem' }}>No orders yet</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 360, margin: '0.5rem auto 1.5rem' }}>
              Once you place an order, it will appear here for tracking.
            </p>
            <Link to="/categories" className="btn btn-primary fw-semibold shadow-sm px-4">
              <i className="bi bi-bookmark-star me-1"></i> Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
