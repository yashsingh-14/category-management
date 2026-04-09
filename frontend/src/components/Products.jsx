import { useState } from 'react'

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'Aurora X-1 Laptop',
      category: 'Electronics',
      price: '$1,899',
      image: '/images/laptop.png?v=2',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Titanium Smartwatch Pro',
      category: 'Wearables',
      price: '$349',
      image: '/images/watch.png?v=2',
      badge: null
    },
    {
      id: 3,
      name: 'Acoustic Wave Headphones',
      category: 'Audio',
      price: '$299',
      image: '/images/headphones.png?v=2',
      badge: 'New Arrival'
    }
  ])

  return (
    <div className="container-fluid py-2">
      <div className="section-header text-center">
        <h2>Premium Collection</h2>
        <p>Discover our meticulously curated selection of next-generation gadgets.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {products.map(product => (
          <div key={product.id} className="col-lg-4 col-md-6 tilt-wrapper">
            <div className="card-custom card-3d h-100 border p-3">
              <div className="position-relative">
                {product.badge && (
                  <span className="position-absolute top-0 start-0 m-3 px-3 py-1 badge rounded-pill" style={{ background: 'var(--primary)', zIndex: 10 }}>
                    {product.badge}
                  </span>
                )}
                <div 
                  className="product-img-wrapper p-4 text-center rounded-top"
                  style={{ background: 'linear-gradient(to bottom, #f8fafc, #ffffff)' }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="img-fluid"
                    style={{ 
                      maxHeight: '220px', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))'
                    }}
                  />
                </div>
              </div>
              
              <div className="card-body-custom pt-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-secondary small fw-bold text-uppercase tracking-wider" style={{ color: 'var(--primary) !important' }}>{product.category}</span>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ fontSize: '1.4rem' }}>{product.name}</h4>
                
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <span className="fs-4 fw-bolder text-dark">{product.price}</span>
                  <button className="btn-primary rounded-circle" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                    <i className="bi bi-cart-plus fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
