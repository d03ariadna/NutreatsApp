import { ChevronDown } from 'lucide-react'
import { CloudinaryImage } from '.';
import { DropDownBtn } from './';
import { useEffect, useState } from 'react';
import { CartItem } from '../../types';

type Prices ={
  lb: number,
  kg: number,
  gr: number,
  oz: number
}

interface ProductCardProps {
    measure: 'lb' | 'kg' | 'gr' | 'oz';
    name: string;
    prices: Prices;
    img: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ measure, name, prices, img }) => {

    // const [price, setPrice] = useState(prices[measure]);

    // const initialPrice = (0.5*price).toFixed(2);
    const [quantity, setQuantity] = useState('');
    const [finalPrice, setFinalPrice] = useState((0.5*(prices[measure])).toFixed(2));
    
    const handleAddToCart = () => {
        console.log('Added to cart')

        let quantityFixed;
        //validate quantity is not empty
        if (quantity === '') {
            quantityFixed = 0.5;
            setQuantity('0.5');
        } else {
            quantityFixed = Number(Number(quantity).toFixed(2));
        }

        const productToAdd = {
            id: img,
            product: name,
            quantity: quantityFixed,
            measure: measure,
            price: prices[measure]
        } as CartItem;

        console.log(productToAdd);
    }

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {

        //validate input is a number integer or decimal
        const value = e.target.value;
        
        if (value === null || value === '') {
            setQuantity('');
            return;
            
        }else if (isNaN(Number(value))) {
            return;
        }

        
        // // const newPrice = Number(value) * prices[measure];
        setQuantity(value);
        // setFinalPrice(( Number(value) * prices[measure]).toFixed(2));
    }

    useEffect(() => {
        setFinalPrice(( Number(quantity) * prices[measure]).toFixed(2));
    }, [measure, quantity])


    return (
        <div className='min-w-56 max-w-56 bg-white rounded-xl p-4'>
            <div className='w-32 h-36 mx-auto flex items-center'>
                {/* <img src={img} alt="" className='w-full' /> */}
                <CloudinaryImage name={name} img={img} width={128} height={128} /> 
            </div>
        
            <section className='flex justify-between items-center my-3'>
            <p className=' font-semibold'>{name}</p>
            <p className='text-sm font-semibold text-quaternary'>${prices[measure]}<span className='font-light text-gray-400 text-xs'>/{measure}</span></p>
            </section>
            <section className='flex justify-between items-center'>
            <p className='text-gray-400 text-xs font-light'>Final Price</p>
            <p className='text-sm font-semibold text-primary'>${finalPrice}</p>
            </section>
            <section className='w-full flex justify-between items-center my-3'>
                <input
                    type="text"
                    name=""
                    placeholder='0.5'
                    value={quantity}
                    onChange={handleQuantity}
                    className='w-[70%] border-2 border-gray-200 text-sm font-semibold px-3 py-1 rounded-full focus:outline-none focus:border-primary' />
                <button className='w-[25%] bg-gray-300 text-white text-xs font-light py-1 rounded-full'>
                    clear
                </button>
            </section>
            <button
                onClick={handleAddToCart}
                className='green-btn hover:bg-[#39931A] w-full mt-1 transition-all ease-in-out'>Add to cart</button>
        </div>
    )
}
