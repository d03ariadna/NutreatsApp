import { useState } from "react"
import '../styles/loginStyles.css';
import { useAuthStore, useForm } from "../../hooks";
import { FormValidations, LoginFormFields, RegisterFormFields } from "../../types";


const loginFormFields: LoginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

const loginValidations: FormValidations = {
  loginEmail: [(value:string) => value.includes('@'), 'The email must contain @'],
  loginPassword: [(value:string) => value.length >= 6, 'The password must be larger than 6 characters']

}

const registerFormFields: RegisterFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: ''
}

const registerValidations: FormValidations = {
  registerName: [(value:string) => value.length >= 3, 'The name must be larger than 3 characters'],
  registerEmail: [(value:string) => value.includes('@') && value.length >= 6, 'The email must contain @'],
  registerPassword: [(value:string) => value.length >= 6, 'The password must be larger than 6 characters']

}

export const AuthPage = () => {

  const { startLogin, startRegister, startGoogleSignIn } = useAuthStore();
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
    onResetForm: onResetLoginForm,
    formValidation: loginValidation,
  } = useForm(loginFormFields, loginValidations);
  
  const {
    registerName,
    registerEmail,
    registerPassword,
    onInputChange: onRegisterInputChange,
    onResetForm: onResetRegisterForm,
    formValidation: registerValidation,
  } = useForm(registerFormFields, registerValidations);
 
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  const [registerErrors, setRegisterErrors] = useState<string[]>([]);

  const handleViewChange = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      onResetLoginForm()
      setLoginErrors([]);
      
      onResetRegisterForm();
      setRegisterErrors([]);
    }, 1000);


    setRightPanelActive((state) => !state);
  }


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginValidation.length > 0) {

      setLoginErrors(loginValidation);

      setTimeout(() => {
        setLoginErrors([]);
      }, 5000);
          
      return;
    };

    startLogin({ loginEmail, loginPassword });
  }


  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerValidation.length > 0) {

      setRegisterErrors(registerValidation);

      setTimeout(() => {
        setRegisterErrors([]);
      }, 5000);

      return;
    };

    startRegister({ registerName, registerEmail, registerPassword });
  }

  const onGoogleSignIn = () => {

    startGoogleSignIn();
  }


  return (
    <div className={`${ rightPanelActive ? 'right-panel-active' : ''} container-form relative w-full bg-pink-400 min-h-screen overflow-hidden`}>
     
      <section className="sign-up absolute top-0 right-0 h-full transition-all duration-700 ease-in-out w-[50%] z-10">
        
        {/* Sign Up Form */}
        <form
          onSubmit={handleSignUp}
          action=""
          className="bg-white flex items-center justify-center flex-col py-0 px-14 h-full text-center">
          <h1 className="font-semibold mb-12 text-5xl">Create Account</h1>

          <input 
            className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
            type="text" 
            placeholder="Name" 
            name="registerName" 
            value={registerName}
            onChange={onRegisterInputChange}
            />
          <input 
            className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
            type="text" 
            placeholder="Email" 
            name="registerEmail" 
            value={registerEmail}
            onChange={onRegisterInputChange}
            />
          <input 
            className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
            type="password" 
            placeholder="Password" 
            name="registerPassword" 
            value={registerPassword}
            onChange={onRegisterInputChange}
            />
          
          <div className="mt-5 flex gap-10">
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="w-48 flex justify-center gap-2 border-2 text-sm font-semibold py-3 my-8 rounded-3xl uppercase transition-transform duration-75 ease-in cursor-pointer">
              Sign Up with
              <img src="/google-icon.png" alt="icon" className="h-5"/>
            </button>

            <button
              type="submit"
              className="primary-btn"
            >
              Sign Up
            </button>
          </div>

          <button
            className="text-sm underline text-primary font-semibold cursor-pointer"
            onClick={ handleViewChange }
            >
              I already have an account
          </button>


          {
            registerErrors.length > 0 && (
              <div className="absolute bottom-5 left-5 text-left bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p className="font-bold">There was something wrong</p>
                    {/* <p className="text-sm">{loginErrors}</p> */}
                    {
                      registerErrors.map((error) => {
                        return <p key={error} className="text-sm">{error}</p>
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }
        </form>
      </section>

      <section className="log-in absolute top-0 left-0 h-full transition-all duration-700 ease-in-out w-[50%] z-20">

        {/* Log In Form */}
        <form
          onSubmit={handleLogin}
          action=""
          className="bg-white flex items-center justify-center flex-col py-0 px-14 h-full text-center">
          <h1 className="font-semibold mb-12 text-5xl">Log In</h1>
          <input 
          className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
          type="text" 
          placeholder="Email" 
          name="loginEmail" 
          value={loginEmail}
          onChange={onLoginInputChange}
          />
          <input 
          className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
          type="password" 
          placeholder="Password" 
          name="loginPassword" 
          value={loginPassword}
          onChange={onLoginInputChange}
          />
          {/* <p className="text-xs font-light text-red-600 italic">These are the errors</p> */}
          <a href="#" className="mt-2">Forget your password?</a>
          <div className="mt-5 flex gap-10">
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="w-48 flex justify-center gap-2 border-2 text-sm font-semibold py-3 my-8 rounded-3xl uppercase transition-transform duration-75 ease-in cursor-pointer">
              Log in with
              <img src="/google-icon.png" alt="icon" className="h-5"/>
            </button>

            <button
              type="submit"
              className="primary-btn"
            >Log In</button>
          </div>

          <button
            className="text-sm underline text-primary font-semibold cursor-pointer"
            onClick={ handleViewChange }
            >
              I don't have an account yet
          </button>

          {
            loginErrors.length > 0  && (
              <div className="absolute bottom-5 left-5 text-left bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p className="font-bold">There was something wrong</p>
                    {/* <p className="text-sm">{loginErrors}</p> */}
                    {
                      loginErrors.map((error) => {
                        return <p key={error} className="text-sm">{error}</p>
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }

        </form>
      </section>

      <div className="overlay-container">
        <div className="overlay">

          <div className="overlay-left">
          </div>

          <div className="overlay-right">
            {/* <h1 className="font-semibold mb-4 text-5xl">Welcome Back!</h1> */}
          </div>

        </div>
      </div>
    </div>
  )
}
