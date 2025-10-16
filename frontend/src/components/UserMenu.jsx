import React from 'react'
import { useAuth } from '../context/AuthContext'
import defaultUserImg from '../assets/images/userDefault.png'

const UserMenu = ({ userMenuToggle }) => {
  
  const { user } = useAuth()
  
  return (
    <div
      className='absolute top-14 right-0 w-64 h-56 rounded-sm flex items-start justify-start shadow-slate-300 shadow-sm'
    >

      {/* user details */}
      <div
        className='flex flex-row justify-start items-center gap-2 p-3'
      >
        <div
          className='w-fit h-fit border-sky-500 cursor-pointer bg-slate-800 p-0.5 rounded-full border-2 '
        >
          <img 
            src={`${user !== null ? user.profileImg : defaultUserImg}`} 
            className='w-8 h-8 rounded-full'
            alt="userProfile"
          />     
        </div>
        <div
          className='flex items-start flex-col w-fit h-fit'
        >
          <h1
            className='font-medium'
          >
            {
              user !== null
              ? user.name
              : "Guest"
            }
          </h1>
          <p
            className='text-[10px]'
          >
            {
              user !== null
              ? user.email
              : "Guest"
            }
          </p>
        </div> 
      </div>
      

    </div>
  )
}

export default UserMenu