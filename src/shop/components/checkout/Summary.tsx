import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SummaryProps {
    total: number
}

export const Summary: React.FC<SummaryProps> = ({ total }) => {
    
    const navigate = useNavigate();

    return (
        <aside className='w-[28%] h-auto bg-white rounded-xl p-9'>
            <h2 className='text-lg font-semibold'>Order Summary</h2>
            <section className='flex justify-between items-center text-sm font-light my-6'>
                <div className='flex flex-col gap-3'>
                    <p>Subtotal</p>
                    <p>Delivery</p>
                    <p>Tax</p>
                    <p className='font-medium'>Total</p>
                </div>
                <div className='flex flex-col items-end gap-3'>
                    <p>$ 50.00</p>
                    <p>$ 10.00</p>
                    <p>$ 5.00</p>
                    <p className='font-medium'>$ {total}</p>
                </div>
            </section>
            <button className='w-full green-btn' onClick={() => navigate('/checkout')}>Checkout</button>
        </aside>
    )
}
