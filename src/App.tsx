import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import HomePage from './pages/homePage';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path='*' element={<LoginPage />} />
        ) : (
          <><Route path='/login' element={<Navigate to='/' replace />} />
            <Route path='/' element={<HomePage />} /></>
        )}
      </Routes>
    </Router>
  );
}

export default App;
