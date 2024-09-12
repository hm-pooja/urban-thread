import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import ProductDetailPage from "./pages/productDetailPage";
import CategoryPage from "./pages/categoryPage";
import CartPage from "./pages/cartPage";
import SuccessPage from "./pages/successPage";
import ProfilePage from "./pages/profilePage";
import LoginPage from "./pages/loginPage";
import { Box } from "@mui/material";

const AppContent: React.FC = () => {
  const location = useLocation();
  const showCartIcon = location.pathname !== "/cart";

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header showCartIcon={showCartIcon} />
        <Routes>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
    </Box>
  );
};

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      {!token ? (
        <Routes>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      ) : (
        <AppContent />
      )}
    </Router>
  );
};

export default App;
