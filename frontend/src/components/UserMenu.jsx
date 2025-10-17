import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import defaultUserImg from '../assets/images/userDefault.png'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import useClickOutside from '../hooks/useClickOutside'
import SettingsModal from './SettingsModal'


const UserMenu = ({ userMenuToggle, setUserMenuToggle, setToggleSettings }) => {
  
  // context
  const { user } = useAuth()
  const checkClickRef = useClickOutside(() => setUserMenuToggle(false))

  const toggleSettingsModal = () => {
    setUserMenuToggle(false)
    setToggleSettings(true)
  }

  return (
    <>
      <div
        className={`absolute top-12 right-0 w-64 min-h-40 h-fit pb-o.5 flex-col rounded-sm items-start justify-start shadow-slate-800 border-slate-100 border-2 dark:border-slate-800 dark:bg-slate-900 shadow dark:shadow-none ${userMenuToggle ? "flex" : "hidden"}`}
        ref={checkClickRef}
      >

        {/* user details */}
        <div
          className='flex flex-row justify-start items-center gap-2 p-3'
        >
          <div
            className='w-fit h-fit border-sky-500 cursor-pointer bg-slate-800 p-0.5 rounded-full border-2'
          >
            <img 
              src={`${user !== null ? user.profileImg : defaultUserImg}`} 
              className='w-8 h-8 rounded-full'
              alt="userProfile"
            />     
          </div>
          <div
            className='flex items-start flex-col w-fit h-fit mb-1'
          >
            <p
              className='font-medium leading-5'
            >
              {
                user !== null
                ? user.name
                : "Guest"
              }
            </p>
            <p
              className='text-xs'
            >
              {
                user !== null
                ? user.email
                : "Guest"
              }
            </p>
          </div> 
        </div>

        <span className='w-full min-h-0.5 bg-slate-700'></span>
        
        {/* settings and dark toggle */}
        <div
          className='flex flex-col gap-2 w-full h-full p-2'
        >

          {/* dark mode button */}
          <div
            className='p-2 text-start w-full flex flex-row items-center justify-between rounded-sm text-sm '
          >          
            <div
              className='flex flex-row font-medium items-center gap-2 '
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
                fill="currentcolor" viewBox="0 0 24 24" >
                <path d="m12.2,22c4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2ZM8.18,4.65c-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15Z"></path>
              </svg>
              Dark Mode
            </div>
            <ThemeToggle/>
          </div>

          {/* settings button */}
          <button
            className='w-full flex flex-row items-center gap-2 justify-start p-2  rounded-sm hover:bg-slate-300 dark:hover:bg-sky-900 duration-200'
            onClick={() => toggleSettingsModal()}
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
            </svg>
            <p
              className='font-medium text-sm'
            >
              Settings
            </p>
          </button>

        </div>
      </div>
    </>
    
  )
}

export default UserMenu