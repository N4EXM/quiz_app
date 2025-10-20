import React, { useState } from 'react'
import { useAuth } from './../context/AuthContext'
import defaultUserImg from '../assets/images/userDefault.png'
import UserMenu from './UserMenu'
import { useTheme } from '../context/ThemeContext'
import SettingsModal from './SettingsModal'

const Navbar = () => {

  // context
  const { user } = useAuth()
  const { theme, toggleTheme } = useTheme()

  // toggles
  const [userMenuToggle, setUserMenuToggle] = useState(false)
  const [toggleSettings, setToggleSettings] = useState(false)


  return (
    <div
      className='flex flex-row items-center justify-between w-full h-fit px-5 p-4 bg-slate-100 shadow-slate-400 dark:bg-slate-800 dark:shadow-slate-950 shadow-sm '
    >
      
      {/* title */}
      <div
        className='flex flex-row gap-2 items-center w-fit h-fit text-white duration-200'
      >
        <i
          className='text-sky-500'
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32"  
            fill="currentcolor" viewBox="0 0 24 24" >
            <path d="M8.19 15.08c.26.36.62 1.38.81 2.05v2.86c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2.86c.2-.68.56-1.7.82-2.06.35-.5.72-.93 1.08-1.36 1.03-1.21 2.1-2.46 2.1-4.72 0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.29 1.07 3.53 2.1 4.73.36.42.73.85 1.09 1.35ZM11 20v-2h2.02L13 20zm1-16c2.76 0 5 2.24 5 5 0 1.53-.64 2.28-1.62 3.42-.37.43-.79.93-1.2 1.51-.37.53-.7 1.42-.92 2.07h-2.52c-.21-.65-.55-1.55-.93-2.08-.41-.57-.83-1.06-1.2-1.49C7.64 11.3 6.99 10.55 6.99 9c0-2.76 2.24-5 5-5Z"></path><path d="M12 7V5C9.79 5 8 6.79 8 9h2c0-1.1.9-2 2-2"></path>
          </svg>
        </i>
        <p
          className='text-2xl text-black dark:text-slate-200 font-semibold'
        >
          Qubo
        </p>
      </div>

      {/* buttons */}
      <div
        className='flex flex-row items-center gap-3 w-fit h-fit relative'
      >
        
        {/* dark mode button
        <button
          className='w-fit flex flex-row items-center justify-center p-2 rounded-full hover:bg-slate-300 dark:hover:bg-sky-900 duration-200 bg-slate-200 dark:bg-slate-800'
          onClick={() => toggleTheme()}
        >
          {
            theme
            ? <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
                fill="currentcolor" viewBox="0 0 24 24" >
                <path d="m12.2,22c4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2ZM8.18,4.65c-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15Z"></path>
              </svg>
            : <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
                fill="currentcolor" viewBox="0 0 24 24" >
                <path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path>
              </svg>
          }
        </button>

        {/* settings button */}
        {/* <button
          className='w-fit flex flex-row items-center justify-center p-2 rounded-full hover:bg-slate-300 dark:hover:bg-sky-900 duration-200 bg-slate-200 dark:bg-slate-800'
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
            fill="currentcolor" viewBox="0 0 24 24" >
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
          </svg>
        </button> */} 

        {/* user image */}
        <button
          className='w-fit h-fit cursor-pointer border-sky-500 mb-[0.8px] bg-slate-800 rounded-full border-2 '
          onClick={() => setUserMenuToggle(!userMenuToggle)}
        >
          <img 
            src={`${user !== null ? user.profileImg : defaultUserImg}`} 
            className='w-8 h-8 rounded-full'
            alt="userProfile"
          />
        </button>
        <UserMenu
          userMenuToggle={userMenuToggle}
          setUserMenuToggle={setUserMenuToggle}
          setToggleSettings={setToggleSettings}
        />
      </div>
      <SettingsModal
        toggleSettings={toggleSettings}
        setToggleSettings={setToggleSettings}
      />
    </div>
  )
}

export default Navbar