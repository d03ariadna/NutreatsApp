import React, { useState } from 'react'

interface AuthFormField {
    [key: string]: string | (() => void);
    name: string;
    value: string;
    onChange: () => void;
}

interface AuthFormProps{
    fields: AuthFormField[];
    onSubmit: () => void;
    handleViewChange: () => void;
}

export const authForm = ({fields, onSubmit, handleViewChange} : AuthFormProps) => {

    const [errors, setErrors] = useState<string[]>([]);

    return (
        <form
          onSubmit={onSubmit}
          action=""
          className="bg-white flex items-center justify-center flex-col py-0 px-14 h-full text-center">
            <h1 className="font-semibold mb-12 text-5xl">Create Account</h1>
            
            {
              fields.map((field) => {
                return (
                  <input 
                    className="w-[70%] bg-gray-100 border-2 border-gray-200 py-3 px-4 my-2 mx-4 rounded-md focus:outline-none focus:bg-white focus:border-2 focus:border-primary" 
                    type="text" 
                    placeholder={field.name} 
                    name={field.name} 
                    value={field.value}
                    onChange={field.onChange}
                    />
                )
              })
            }
          
          <div className="mt-5 flex gap-10">
            <button className="w-48 flex justify-center gap-2 border-2 text-sm font-semibold py-3 my-8 rounded-3xl uppercase transition-transform duration-75 ease-in cursor-pointer">
              Continue with
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
            errors.length > 0 && (
              <div className="absolute bottom-5 left-5 text-left bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p className="font-bold">There was something wrong</p>
                    {/* <p className="text-sm">{loginErrors}</p> */}
                    {
                      errors.map((error) => {
                        return <p key={error} className="text-sm">{error}</p>
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }
        </form>
    )
}
