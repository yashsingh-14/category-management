import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Categories from './components/Categories'
import Products from './components/Products'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Orders from './components/Orders'
import Footer from './components/Footer'

function PageTransitionWrapper({ children }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition-inner">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <div className="main-content">
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </PageTransitionWrapper>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
