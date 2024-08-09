import { Navigate, Route, Routes } from "react-router-dom"
import { ShopLayout } from "../layout/ShopLayout";
import { AboutPage, AccountPage, CartPage, CheckoutPage, HomePage, OrdersPage, ProductsPage } from "../pages";

export const ShopRoutes = () => {
  return (
    <>
      <ShopLayout>

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ProductsPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="cart" element={<CartPage />} />
          
          <Route path="checkout" element={<CheckoutPage />} />
          
          <Route path="*" element={<Navigate to='/'/>} />
        </Routes>

      </ShopLayout>
    </>
  )
}


