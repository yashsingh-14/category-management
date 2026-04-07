import { useState, useEffect, useRef } from 'react'
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../api/categoryApi'

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ categoryName: '', description: '' })
  const [editId, setEditId] = useState(null)
  const [toast, setToast] = useState({ show: false, type: '', message: '' })
  const [saving, setSaving] = useState(false)
  const nameRef = useRef()
  const toastTimeout = useRef()

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    setLoading(true)
    try {
      const res = await getAllCategories()
      setCategories(res.data)
    } catch {
      showToast('error', 'Unable to load categories. Is the server running?')
    }
    setLoading(false)
  }

  function showToast(type, message) {
    clearTimeout(toastTimeout.current)
    setToast({ show: true, type, message })
    toastTimeout.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 3500)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formData.categoryName.trim()) {
      nameRef.current.classList.add('is-invalid')
      nameRef.current.focus()
      return
    }

    setSaving(true)
    try {
      if (editId) {
        await updateCategory(editId, formData)
        showToast('success', 'Category updated successfully!')
      } else {
        await createCategory(formData)
        showToast('success', 'Category created successfully!')
      }
      resetForm()
      loadCategories()
    } catch (err) {
      showToast('error', err.response?.data || 'Something went wrong.')
    }
    setSaving(false)
  }

  function handleEdit(cat) {
    setEditId(cat.categoryId)
    setFormData({ categoryName: cat.categoryName, description: cat.description || '' })
    nameRef.current?.focus()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this category?')) return

    try {
      await deleteCategory(id)
      showToast('success', 'Category deleted successfully!')
      loadCategories()
    } catch (err) {
      showToast('error', err.response?.data || 'Failed to delete category.')
    }
  }

  function resetForm() {
    setEditId(null)
    setFormData({ categoryName: '', description: '' })
    nameRef.current?.classList.remove('is-invalid')
  }

  function handleNameChange(e) {
    setFormData(f => ({ ...f, categoryName: e.target.value }))
    if (e.target.value.trim()) e.target.classList.remove('is-invalid')
  }

  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      {/* Toast */}
      <div className={`alert-toast ${toast.show ? 'show' : ''} ${toast.type}`}>
        <i className={`bi ${toast.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'}`}></i>
        <span>{toast.message}</span>
      </div>

      <div className="section-header">
        <h2>
          <i className="bi bi-bookmark-star me-2" style={{ color: 'var(--primary)' }}></i>
          Manage Categories
        </h2>
        <p>Add, edit, or remove product categories below</p>
      </div>

      {/* Form Card */}
      <div className="card-custom" style={{ marginBottom: '2rem' }}>
        <div className="card-header-custom">
          <i className={`bi ${editId ? 'bi-pencil-square' : 'bi-plus-circle'}`}></i>
          <span>{editId ? 'Update Category' : 'Add New Category'}</span>
        </div>
        <div className="card-body-custom">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
              <div className="col-md-5">
                <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>
                  Category Name <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  className="form-control"
                  placeholder="e.g. Electronics"
                  value={formData.categoryName}
                  onChange={handleNameChange}
                  style={{ borderRadius: 8 }}
                  required
                />
                <div className="invalid-feedback">Category name is required.</div>
              </div>
              <div className="col-md-5">
                <label className="form-label fw-medium" style={{ fontSize: '0.9rem' }}>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brief description"
                  value={formData.description}
                  onChange={e => setFormData(f => ({ ...f, description: e.target.value }))}
                  style={{ borderRadius: 8 }}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  type="submit"
                  className={`btn ${editId ? 'btn-primary' : 'btn-success'} w-100 fw-semibold shadow-sm`}
                  disabled={saving}
                >
                  <i className={`bi ${editId ? 'bi-check-lg' : 'bi-plus-lg'}`}></i>{' '}
                  {saving ? 'Saving...' : editId ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
            {editId && (
              <div className="mt-3 text-end">
                <button type="button" className="btn btn-outline-secondary btn-sm fw-semibold" onClick={resetForm}>
                  <i className="bi bi-x-lg"></i> Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Table Card */}
      <div className="card-custom" style={{ marginBottom: '2.5rem' }}>
        <div className="card-header-custom">
          <i className="bi bi-table"></i>
          <span>All Categories</span>
          <span className="count-badge">{categories.length}</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div className="spinner-wrapper">
              <div className="spinner-border text-primary" role="status" style={{ width: '2.25rem', height: '2.25rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="text-muted mt-2 fw-medium">Loading...</div>
            </div>
          ) : categories.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-box-seam"></i>
              <p>No categories available</p>
            </div>
          ) : (
            <table className="table mb-0">
              <thead>
                <tr>
                  <th style={{ width: 70 }}>#</th>
                  <th style={{ width: '30%' }}>Name</th>
                  <th>Description</th>
                  <th style={{ textAlign: 'center', width: 120 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, i) => (
                  <tr key={cat.categoryId}>
                    <td><strong>{i + 1}</strong></td>
                    <td className="fw-medium">{cat.categoryName}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{cat.description || '—'}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-sm btn-primary fw-semibold shadow-sm me-1"
                        title="Update"
                        onClick={() => handleEdit(cat)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-semibold shadow-sm"
                        title="Delete"
                        onClick={() => handleDelete(cat.categoryId)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories
