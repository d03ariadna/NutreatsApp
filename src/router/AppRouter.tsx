import { Routes, Route, Navigate } from 'react-router-dom';

import { ShopRoutes } from '../shop';
import { AuthPage } from '../auth';
import { useAuthStore, useTypedSelector } from '../hooks';
import { useEffect } from 'react';

export const AppRouter = () => {

    const { isAuthenticated } = useTypedSelector(state => state.auth);
    const { checkAuthToken } = useAuthStore();
    // const authenticated: boolean = false;

    useEffect(() => {
        checkAuthToken();
    }, [])

    
    return (
        <Routes>
            
            {
                isAuthenticated
                    ? 
                    <>
                        <Route path="/*" element={<ShopRoutes/> } />                      
                    </>
                    :
                    <>
                        <Route path="/auth/login" element={<AuthPage />} />
                        <Route path="/auth/*" element={<Navigate to='/auth/login' />} />
                        <Route path="/*" element={<Navigate to='/auth/login' />} />
                    </>
                
            }
        </Routes>
    )
}
