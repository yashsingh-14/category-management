import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Login feature will be available soon!')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'linear-gradient(135deg, var(--success), var(--primary))',
            display: 'inline-grid', placeItems: 'center', color: '#fff', fontSize: '1.5rem'
          }}>
            <i className="bi bi-box-arrow-in-right"></i>
          </div>
        </div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-semibold shadow-sm py-2 mb-3">
            <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
          </button>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
