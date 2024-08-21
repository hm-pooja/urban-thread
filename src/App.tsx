import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import HomePage from './pages/homePage';
import ProductDetailPage from './pages/productDetailPage';
import CategoryPage from './pages/categoryPage';
import CartPage from './pages/cartPage';
import SuccessPage from './pages/successPage';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path='*' element={<LoginPage />} />
        ) : (
          <>
          <Route path='/login' element={<Navigate to='/' replace />} />
            <Route path='/' element={<HomePage />} />
            <Route path = '/product/:productId' element={<ProductDetailPage />} />
            <Route path = '/category/:categoryName' element={<CategoryPage />} />
            <Route path = '/cart' element={<CartPage />} />
            <Route path = '/success' element={<SuccessPage />} />
            </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
