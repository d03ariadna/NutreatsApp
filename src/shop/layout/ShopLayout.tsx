import { useAuthStore } from '../../hooks';
import { LayoutProps } from '../../types/LayoutTypes';
import { Logo } from '../components/Logo';
import { NavBar } from '../components/NavBar';

export const ShopLayout = ({ children }: LayoutProps) => {

    const {startLogout} = useAuthStore();
    
    
    return (
        <>
            <NavBar />
            <section>
                {children}
            </section>
        </>
    )
}
