import React, { useState } from 'react'
import { useAuth } from './../context/AuthContext'
import defaultUserImg from '../assets/images/userDefault.png'
import UserMenu from './UserMenu'

const Navbar = () => {

  const { user } = useAuth()

  // toggles
  const [userMenuToggle, setUserMenuToggle] = useState(false)

  return (
    <div
      className='flex flex-row items-center justify-between w-full h-fit px-5 p-3 '
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
          className='text-2xl text-black font-semibold'
        >
          Qubo
        </p>
      </div>

      {/* user */}
      <div
        className='flex w-fit h-fit relative'
      >
        
        {/* user image */}
        <button
          className='w-fit h-fit cursor-pointer border-sky-500 bg-slate-800 p-0.5 rounded-full border-2 '
        >
          <img 
            src={`${user !== null ? user.profileImg : defaultUserImg}`} 
            className='w-7 h-7 rounded-full'
            alt="userProfile"
          />
          <UserMenu
            userMenuToggle={userMenuToggle}
          />
        </button>

      </div>

    </div>
  )
}

export default Navbar