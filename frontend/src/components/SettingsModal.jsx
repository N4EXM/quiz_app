import React, { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'


const SettingsModal = ({ toggleSettings, setToggleSettings }) => {
  
  // state
  const clickOutside = useClickOutside(() => setToggleSettings(false))
  const [viewState, setViewState] = useState("details") // 0: users details 1: security

  const views = ["details", "security"]

  return (
    <div
      className={`${toggleSettings ? "flex" : "hidden"} w-full h-screen absolute top-0 left-0 bg-slate-950/70 items-center justify-center`}
    >
      
      <div
        className='dark:bg-slate-900 bg-slate-200 shadow-slate-700 shadow-md dark:shadow-sm border-2 border-slate-200 p-5 flex flex-col gap-5 dark:border-slate-800 dark:shadow-slate-900 rounded-sm w-[50rem] h-[38rem]'
        ref={clickOutside}
      >

        {/* title and close button */}
        <div
          className='w-full flex flex-row h-fit items-center justify-between'
        >
          <h1
            className='text-2xl font-semibold'
          >
            Settings
          </h1>
          <button
            className='p-2 rounded-full hover:bg-slate-400 bg-slate-300 dark:bg-slate-950 dark:hover:bg-sky-500 duration-200'
            onClick={() => setToggleSettings(false)}
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          </button>
        </div>

        {/* views and fields */}
        <div
          className='flex flex-row w-full h-full gap-5'
        >

          <div
            className='w-2/5 h-full dark bg-slate-950 rounded-sm'
          >

          </div>

          <div
            className='w-3/5 bg-slate-950 rounded-sm'
          >
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default SettingsModal