import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <div className="section-header" style={{ paddingTop: '2rem' }}>
        <h2><i className="bi bi-cart3 me-2" style={{ color: 'var(--primary)' }}></i>Shopping Cart</h2>
        <p>Review your selected items before checkout</p>
      </div>

      <div className="card-custom">
        <div className="card-header-custom">
          <i className="bi bi-cart3"></i>
          <span>Your Cart</span>
          <span className="count-badge">0</span>
        </div>
        <div className="card-body-custom">
          <div className="placeholder-page" style={{ padding: '3rem 1rem' }}>
            <i className="bi bi-cart-x icon-lg" style={{ fontSize: '3.5rem', color: '#cbd5e1' }}></i>
            <h2 style={{ fontSize: '1.3rem', marginTop: '0.75rem' }}>Your cart is empty</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 360, margin: '0.5rem auto 1.5rem' }}>
              Browse categories and add products to your cart to see them here.
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

export default Cart
