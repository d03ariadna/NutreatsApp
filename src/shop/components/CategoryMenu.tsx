import { Beef, Carrot, Citrus, Fish, Milk, Nut } from 'lucide-react'
import React from 'react'

interface Props {
    activeProduct: "fruits" | "vegetables" | "nuts" | "meat" | "fish" | "dairy",
    setActiveProduct: React.Dispatch<React.SetStateAction<"fruits" | "vegetables" | "nuts" | "meat" | "fish" | "dairy">>
}

export const CategoryMenu: React.FC<Props> = ({activeProduct, setActiveProduct}) => {
    return (
        
        <div className='flex justify-between items-center my-10 px-48'>
            <button 
                onClick={() => setActiveProduct('fruits')} 
                className={`${activeProduct === 'fruits' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Citrus strokeWidth={0.75} size={40} />
            </button>
            <button 
                onClick={() => setActiveProduct('vegetables')} 
                className={`${activeProduct === 'vegetables' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Carrot strokeWidth={0.75} size={40} />
            </button>
            <button 
                onClick={() => setActiveProduct('nuts')} 
                className={`${activeProduct === 'nuts' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Nut strokeWidth={0.75} size={40} />
            </button>
            <button 
                onClick={() => setActiveProduct('meat')} 
                className={`${activeProduct === 'meat' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Beef strokeWidth={0.75} size={40} />
            </button>
            <button 
                onClick={() => setActiveProduct('fish')}
                className={`${activeProduct === 'fish' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Fish strokeWidth={0.75} size={40} />
            </button>
            <button 
                onClick={() => setActiveProduct('dairy')} 
                className={`${activeProduct === 'dairy' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} rounded-lg p-4`}>
                    <Milk strokeWidth={0.75} size={40} />
            </button>
        </div>
    )
}
