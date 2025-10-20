import React from 'react'
import { useNavigate, Link , useLocation } from 'react-router-dom'


const Sidebar = () => {

  const location = useLocation()

  return (
    <div
      className='h-full items-start justify-between bg-slate-950  border-r-3 border-slate-400 dark:border-slate-800 p-5 flex flex-col gap-10 w-80 max-w-80 min-w-80'
    >
      <div
        className='flex flex-col gap-2 w-full h-fit'
      >
        <Link
          className={`${location.pathname === "/" && "bg-sky-500"} duration-200 border-2 border-sky-500 text-white w-full p-2 rounded-sm pl-3 flex flex-row items-center gap-2 hover:bg-sky-500`}
          to={"/"}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
            fill="#ffffff" viewBox="0 0 24 24" >
            <path d="m12.71,2.29c-.39-.39-1.02-.39-1.41,0L3.29,10.29c-.19.19-.29.44-.29.71v9c0,1.1.9,2,2,2h4c.55,0,1-.45,1-1v-6h4v6c0,.55.45,1,1,1h4c1.1,0,2-.9,2-2v-9c0-.27-.11-.52-.29-.71L12.71,2.29Zm3.29,17.71v-5c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v5h-3v-8.59l7-7,7,7v8.59s-3,0-3,0Z"></path>
          </svg>
          <p
            className='text-sm font-medium'
          >
            Home
          </p>
        </Link>
        <Link
          className={`${location.pathname === "/Topics" && "bg-teal-500"} duration-200 border-2 border-teal-500 text-white w-full p-2 rounded-sm pl-3 flex flex-row items-center gap-2 hover:bg-teal-500`}
          to={"/Topics"}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
            fill="#ffffff" viewBox="0 0 24 24" >
            <path d="M9 11h11v2H9zM9 6h11v2H9zM9 16h11v2H9zM4 5.5h3v3H4zM4 10.5h3v3H4zM4 15.5h3v3H4z"></path>
            </svg>
          <p
            className='text-sm font-medium'
          >
            Topics
          </p>
        </Link>
      </div>
      
      <button
        className='text-start font-medium w-full p-2 pl-3 text-sm flex flex-row items-center gap-2 rounded-sm border-2 border-rose-500 text-white hover:bg-rose-500 duration-200'
      >
        <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
          fill="currentcolor" viewBox="0 0 24 24"  
          transform="rotate(180)">
          <path d="M15 11H8v2h7v4l6-5-6-5z"></path><path d="M5 21h7v-2H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
        </svg>
        Logout
      </button>

    </div>
  )
}

export default Sidebar