import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "components/LandingPage";
import Home from "pages/Home";
import Category from "pages/Category";
import Cart from "pages/Cart";
import Advertise from "pages/Advertise";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/advertise/:categoryName" element={<Advertise />} />
          <Route path="/advertise" element={<Advertise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
