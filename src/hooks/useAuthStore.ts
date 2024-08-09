import { useTypedSelector } from ".";
import { loginWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from "../firebase/providers";
import { onCheckingAuth, onLogin, onLogout } from "../store";
import { LoginFormFields, RegisterFormFields, User } from "../types";
import { useDispatch } from "react-redux"


export const useAuthStore = () => {

    const { isAuthenticated, user, errorMessage } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();


    const startGoogleSignIn = async () => {
    
        // dispatch(onCheckingAuth());

        const result = await signInWithGoogle();

        if (!result.ok) {
            console.log(result.errorMessage);
            return dispatch(onLogout(result.errorMessage))
        };
        
        dispatch(onLogin(result.user));
    
    }

    const startLogin = async (
        {
            loginEmail: email,
            loginPassword: password
        }
            : LoginFormFields
    ) => {

        // dispatch(onCheckingAuth());

        const result = await loginWithEmailAndPassword(email, password);

        if (!result.ok) {
            console.log(result.errorMessage);
            return dispatch(onLogout(result.errorMessage))
        };

        dispatch(onLogin(result.user))

    }


    const startRegister = async (
        {
            registerName: name,
            registerEmail: email,
            registerPassword: password
        }
        : RegisterFormFields
    ) => {

        // dispatch(onCheckingAuth());

        // console.log(name, email, password);
        const result = await registerWithEmailAndPassword(name, email, password);

        if (!result.ok) {
            console.log(result.errorMessage);
            return dispatch(onLogout(result.errorMessage))
        };
        
        dispatch(onLogin(result.user));
        
    }


    const checkAuthToken = async () => {
        
        dispatch(onCheckingAuth());
    }

    const startLogout = () => {
        
        dispatch(onLogout(null));
    }

    return {
        errorMessage,
        isAuthenticated,
        user,

        startGoogleSignIn,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}