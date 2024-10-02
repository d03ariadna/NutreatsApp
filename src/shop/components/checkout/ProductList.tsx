import { ChevronDown, Pencil, Trash, Trash2 } from 'lucide-react'
import { CloudinaryImage } from '..';
import { DropDownBtn } from '..';
import { useEffect, useState } from 'react';
import { CartItem, ProductCardProps } from '../../../types';
import { useCartStore } from '../../../hooks/useCartStore';


export const ProductList: React.FC<CartItem> = (item) => {

    const { img, measure, name, prices } = item.product;
    // const [price, setPrice] = useState(prices[measure]);

    // const initialPrice = (0.5*price).toFixed(2);
    const [quantity, setQuantity] = useState(item.quantity.toString());
    const [finalPrice, setFinalPrice] = useState(item.price);
    
    

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {

        //validate input is a number integer or decimal
        const value = e.target.value;
        
        if (value === null || value === '') {
            setQuantity('');
            return;
            
        }else if (isNaN(Number(value))) {
            return;
        }

        setQuantity(value);
    }

    const handleEditItem = () => {
        console.log('to edit')
    }

    // useEffect(() => {
    //     setFinalPrice(Number(( Number(quantity) * prices[measure]).toFixed(2)));
    // }, [quantity])


    return (
        <div className='w-full flex gap-12 rounded-xl p-4'>

            <div className='w-28 h-28 flex items-center'>
                <CloudinaryImage name={name} img={img} width={128} height={128} /> 
            </div>
        
            <section className='flex-grow flex justify-between'>
                <section className='flex flex-col justify-between'>
                    <div>
                        <p className='text-lg font-medium mb-1'>{name}</p>
                        <p className='font-medium text-gray-400'>
                            ${prices[measure]}
                            <span className='text-sm'>/{measure}</span>
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <div className="relative w-24">
                            <input
                                type="text"
                                name=""
                                placeholder='0.5'
                                value={quantity}
                                onChange={handleQuantity}
                                className='w-full border-2 border-gray-200 text-sm font-semibold px-4 py-2 rounded-full focus:outline-none focus:border-primary'
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Pencil size={16} strokeWidth={1.5} className='text-gray-400'/>
                            </div>
                            </div>

                        <div className='border-2 border-gray-200 text-sm font-semibold px-4 py-2 rounded-full'>
                            {measure}
                        </div>
                    </div>
                </section>

                <section className='flex flex-col justify-between items-end'>
                    <p className='text-lg font-semibold text-secondary'>${finalPrice}</p>
                    <Trash2 size={20} strokeWidth={1.3} className='text-gray-500 cursor-pointer hover:text-red-500'/>
                </section>
            </section>
        </div>
    )
}