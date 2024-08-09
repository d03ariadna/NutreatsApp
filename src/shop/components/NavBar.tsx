import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { ChevronDown, ChevronRight, LogOut, Menu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const NavBar = () => {

    const { startLogout } = useAuthStore();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const navigateTo = (path: string) => {
        setMenuOpen(false);
        setDropDownOpen(false);

        navigate(path);
    }


    useEffect(() => {
        const closeMenu = (e: MouseEvent) => {
            if (menuOpen && e.target instanceof Element && !e.target.closest('nav')) {
                setMenuOpen(false);
                setDropDownOpen(false);
            }
            
            if (dropDownOpen && e.target instanceof Element && !e.target.closest('li')) {
                setDropDownOpen(false);
            }
            
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [menuOpen, dropDownOpen]);

    return (
        <nav className='bg-gray-50 px-14 py-3 flex justify-between items-center relative z-50'>
            <Link to='/' className='flex items-center gap-2'>
                <Logo className='w-10 h-10' fill='#44B21E'/>
                <p className='font-semibold text-xl text-primary'>Nutreats</p>
            </Link>
            <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={25} strokeWidth={1.3} />
            </button>

            {/* MENU */}
            <div className={`${ menuOpen ? 'block' : 'hidden' } w-56 h-screen absolute right-0 top-14 bg-gray-50 p-5 pr-12 md:p-3 md:block md:relative md:h-auto md:top-0 md:w-auto`}>
                <ul className='flex flex-col gap-6 md:gap-8 md:items-center md:flex-row text-xs font-light'>
                    <Link to='/about' className='cursor-pointer'>About</Link>
                    <Link to='/shop' className='cursor-pointer'>Shop</Link>
                    <li className='relative cursor-pointer'>
                        <button  className='flex md:items-center' onClick={() => setDropDownOpen(!dropDownOpen)}>
                            <li>Profile</li>
                            <ChevronDown size={18} strokeWidth={1.2} />
                        </button>

                        {/* DROPDOWN */}
                        <section className={`${ dropDownOpen ? 'block' : 'hidden' } w-52 absolute md:top-14 md:left-[-70px] bg-gray-50 text-left p-2 z-10`}>
                            <div className='flex flex-col'>
                                <button onClick={() => navigateTo('/account')} className='flex justify-between items-center py-3 px-3 hover:bg-gray-100 cursor-pointer'>
                                    My Account
                                    <ChevronRight size={15} strokeWidth={1.3} />
                                </button>
                                <button onClick={() => navigateTo('/orders')} className='flex justify-between items-center py-3 px-3 hover:bg-gray-100 cursor-pointer'>
                                    My Orders
                                    <ChevronRight size={15} strokeWidth={1.3} />
                                </button>

                                <button onClick={startLogout}>
                                    <hr className='my-1'/>
                                    <span className='flex justify-between items-center text-red-600 py-3 px-3 hover:bg-gray-100 cursor-pointer'>
                                        Logout
                                        <LogOut size={15} strokeWidth={1.2} />
                                    </span>
                                </button>
                            </div>
                        </section>
                    </li>
                    <Link to='/cart' className='green-btn'>Basket ( 1 )</Link>
                </ul>
            </div>
        </nav>

    )
}
