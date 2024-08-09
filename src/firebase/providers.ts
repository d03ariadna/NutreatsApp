import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { User } from "../types";


interface SignInSuccess {
  ok: true;
  user: User;
}

interface SignInFailure {
  ok: false;
  errorMessage: string;
}

type AuthResult = SignInSuccess | SignInFailure;

const googleProvider = new GoogleAuthProvider();


export async function signInWithGoogle(): Promise<AuthResult> {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        
        const user = result.user;

        const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        } as User;

        return {
            ok: true,
            user: newUser,
        }

    } catch (error: any) {
        
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}


export async function registerWithEmailAndPassword(name:string, email:string, password:string): Promise<AuthResult> {

    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        
        const user = result.user;

        await updateProfile(user, { displayName: name });

        const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        } as User;

        return {
            ok: true,
            user: newUser,
        }

    } catch (error:any) {
        
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }

}


export async function loginWithEmailAndPassword (email:string, password:string): Promise<AuthResult> {

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        
        const user = result.user;

        const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        } as User;

        return {
            ok: true,
            user: newUser as User,
        }

    } catch (error:any) {
        
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}