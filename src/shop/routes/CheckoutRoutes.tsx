import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Address, CheckoutPage, Confirmation, Payment, Shipping } from '../pages'

export const CheckoutRoutes = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<CheckoutPage />} />

                <Route path="shipping" element={<Shipping />} />
                <Route path="address" element={<Address />} />
                <Route path="payment" element={<Payment />} />
                <Route path="confirmation" element={<Confirmation />} />


            </Routes>   
        </>
    )
}
