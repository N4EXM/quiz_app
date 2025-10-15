import React, { useState } from 'react'
import backgroundImg from './../assets/images/backgroundImg.jpg'
import { Link } from 'react-router-dom'

const Login = () => {

  // toggles
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // functions
  const handleFormSubmit = (e) => {

    e.preventDefault()
    console.log("yay")

  }

  return (
    <div
      className={`flex relative items-center justify-center w-full h-screen text-white`}
    >
      
      <img 
        src={backgroundImg} 
        className='w-full h-full absolute z-0 top-0 left-0 brightness-50'
        alt="" 
      />

      <form
        className='w-96 p-8 h-[30rem] flex flex-col gap-10 bg-white/30 border-2 border-white/50 backdrop-blur-lg rounded-md z-10'
        onSubmit={handleFormSubmit}
      >

        {/* title */}
        <div
          className='flex flex-col gap-1 w-full'
        >
          <h1
            className='text-4xl font-bold'
          >
            Login
          </h1>
          <p
            className='text-sm font-semibold '
          >
            Fill in your details to sign into your account and learn your topics
          </p>
        </div>

        {/* input fields */}
        <div
          className='flex flex-col gap-5'
        >
          {/* email */}
          <div
            className='flex flex-col gap-1 w-full h-fit relative'
          >
            <svg className='absolute top-8.5 left-3 ' xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
            </svg>
            <label 
              htmlFor="email"
              className='text-sm font-semibold pl-2'  
            >
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type="text"
              placeholder='Enter an email...'
              className='pl-10 p-2 rounded-md placeholder:text-white/70 border-2 outline-none border-white/50 bg-white/20 text-sm'
             />
          </div>

          {/* password */}
          <div
            className='flex flex-col gap-1 w-full h-fit relative'
          >
            <svg className='absolute top-8.5 left-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="#ffffff" viewBox="0 0 24 24" >
              <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9H6z"></path>
            </svg>
            <label 
              htmlFor="password"
              className='text-sm font-semibold pl-2'  
            >
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type={showPassword ? "text" : "password"}
              placeholder='Enter an password...'
              className='pl-10 p-2 rounded-md placeholder:text-white/70 border-2 outline-none border-white/50 bg-white/20 text-sm'
             />
              
            <button
              className='p-2 absolute top-6.5 right-1'
              type='button'
              onClick={() => setShowPassword(!showPassword)}
            >
              {
                showPassword
                ? <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                    fill="#ffffff" viewBox="0 0 24 24" >
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                  </svg>
                : <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                    fill="#ffffff" viewBox="0 0 24 24" >
                    <path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                  </svg>
              }
            </button>            
            <div
              className='w-full flex flex-row pt-2 items-center justify-between h-fit'
            >
              <div
                className='flex gap-1 text-xs flex-row justify-start items-center w-fit'
              >
                <input
                  type="checkbox"
                  className='w-4 h-4 border-white border-2 rounded-md accent-sky-500'
                  value={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />  
                <p>remember me</p>
              </div>
              <p
                className='text-xs hover:text-sky-400 duration-200'
              >
                Forgot your password? 
              </p>
            </div>
          </div>

        </div>

        <div
          className='flex flex-col gap-2 w-full h-fit'
        >
          <button
            className='p-2 rounded-md shadow-slate-500 font-semibold duration-200 hover:text-slate-300 hover:bg-sky-600 active:bg-sky-700 shadow w-full bg-sky-500'
            type='submit'
          >
            Sign In 
          </button>
          <div
            className='w-full flex items-center justify-center'
          >
            <Link
              className='text-xs font-medium hover:text-sky-400'
              to={"/Register"}
            >
              Don't have an account? Sign Up 
            </Link>
          </div>
        </div>

      </form>

    </div>
  )
}

export default Login