import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Registration feature will be available soon!')
  }

  function handleChange(field, value) {
    setForm(f => ({ ...f, [field]: value }))
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
            <i className="bi bi-person-plus"></i>
          </div>
        </div>
        <h2>Create Account</h2>
        <p className="subtitle">Join us and start managing your store</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
              value={form.name}
              onChange={e => handleChange('name', e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={form.email}
              onChange={e => handleChange('email', e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={form.password}
              onChange={e => handleChange('password', e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={e => handleChange('confirmPassword', e.target.value)}
              style={{ borderRadius: 8, padding: '0.65rem 0.85rem' }}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 fw-semibold shadow-sm py-2 mb-3">
            <i className="bi bi-person-plus me-1"></i> Create Account
          </button>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
