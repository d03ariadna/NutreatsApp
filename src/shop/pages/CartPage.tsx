import React from 'react'
import { DropDownBtn, ItemsList, ProductList, Summary } from '../components'
import { useEffect, useState } from 'react'
import { Measure } from '../../types';
import { useCartStore } from '../../hooks/useCartStore';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {

    const { items, total } = useCartStore();

    const navigate = useNavigate();
    
    return (
        <div className='main-container'>
            <section className='flex justify-between items-center'>
                <div className='flex items-end gap-10  my-4'>
                        <h1 className='text-5xl'>Basket</h1>
                        <span className='font-light text-sm mb-1'>{ items.length } items</span>
                </div>
                {/* <DropDownBtn measure={ measure } setMeasure={ setMeasure }/> */}
            </section>
            <hr className='border-2 border-gray-200' />
            {
                items.length === 0
                    ? (
                        <section className='flex flex-col justify-center items-center h-[60vh]'>
                            <h1 className='text-xl mb-5 font-light'>No items in your basket</h1>
                            <button className='green-btn' onClick={() => navigate('/shop')}>Start adding items</button>
                        </section>
                    )
                    :
                    (
                        <section className='mt-12 flex justify-between items-start'>
                            <ItemsList items={items} total={total}/>
                            <Summary total={total} />
                        </section>

                    )
            }
        </div>
    )
}
