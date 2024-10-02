import React from 'react'
import { ProductList } from '..'
import { CartState } from '../../../types'

export const ItemsList: React.FC<CartState> = ({items}) => {
    return (
        <article className='w-[50%] bg-white rounded-xl p-5 flex flex-col gap-5'>
            {
                items.map((item) => (
                    <>
                        <ProductList key={item.product.name} {...item} />
                        <hr />
                    </>
                ))
            }
        </article>
    )
}
