import { useAuthStore } from '../../hooks';
import { LayoutProps } from '../../types/LayoutTypes';
import { Logo } from '../components/global/Logo';
import { NavBar } from '../components/global/NavBar';

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
