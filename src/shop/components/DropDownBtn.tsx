import React, { useEffect, useState } from 'react'

type Measure = 'lb' | 'kg' | 'gr' | 'oz';

interface DropDownBtnProps {
    measure: 'lb' | 'kg' | 'gr' | 'oz';
    setMeasure: React.Dispatch<React.SetStateAction<Measure>>;
}

export const DropDownBtn: React.FC<DropDownBtnProps> = ({measure, setMeasure}) => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleClick = (value: Measure) => {

        setMeasure(value);
        setDropDownOpen(false);
    }


    return (
        <div className="relative inline-block text-left w-24">
            <div>
                <button
                    onClick={() => setDropDownOpen(!dropDownOpen)}
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {measure}
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fillRule="inherit" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                </button>
            </div>

            <div className={`${dropDownOpen ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-full p-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none` }role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <ul role="none">
                <li onClick={() => handleClick('lb')} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-0">lb</li>
                <li onClick={() => handleClick('kg')} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-1">kg</li>
                <li onClick={() => handleClick('gr')} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-2">gr</li>
                <li onClick={() => handleClick('oz')} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-2">oz</li>
                </ul>
            </div>
        </div>

    )
}
