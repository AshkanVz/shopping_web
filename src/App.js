import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Provider } from "react-redux/es/exports";
import { store } from "./app/store";
import Cart from "./pages/Cart";
import BlogDetailPage from "./pages/BlogDetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import WishListPage from "./pages/WishListPage";
import GoToTop from "./component/goToTop/GoToTop";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
import UserDashboard from "./pages/UserDashboard";
import ProtectedLogOutRoute from "./component/protectedLogOutRoute/ProtectedLogOutRoute";
import ProtectedLogInRoute from "./component/protectedLogInRoute/ProtectedLogInRoute";
import ForgetPass from "./pages/ForgetPass";
import ProtectedSignUpRoute from "./component/protectedSignUpRoute/ProtectedSignUpRoute";

const App = () => {
  return (
    <AuthContext>
      <Provider store={store}>
        <GoToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="shop" element={<Shop />} />
          <Route exact path="shop/:id" element={<ProductDetailPage />} />
          <Route exact path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart/checkout" element={<CheckOutPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route
            path="signup"
            element={
              <ProtectedSignUpRoute>
                <SignUp />
              </ProtectedSignUpRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedLogInRoute>
                <Login />
              </ProtectedLogInRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedLogOutRoute>
                <UserDashboard />
              </ProtectedLogOutRoute>
            }
          />
          <Route path="forget-password" element={<ForgetPass />} />
        </Routes>
      </Provider>
    </AuthContext>
  );
};

export default App;
