import React, { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import { useAuth } from '../context/AuthContext'


const SettingsModal = ({ toggleSettings, setToggleSettings }) => {
  
  // context
  const { user } = useAuth()

  // state
  const clickOutside = useClickOutside(() => setToggleSettings(false))
  const [viewState, setViewState] = useState("Details") // 0: users details 1: security

  // user 
  const name = user.name
  const email = user.email
  const userImage = user.image

  // user state
  const [cName, setCName] = useState(name || "")
  const [cEmail, setCEmail] = useState(email || "")
  const [cUserImage, setCUserImage] = useState(userImage || null)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const views = [
    {
      name: "Details",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
            </svg>
    },
    {
      name: "Security",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M8 21c2.76 0 5-2.24 5-5 0-1.02-.31-1.96-.83-2.75l3.33-3.33 1.79 1.79 1.41-1.41-1.79-1.79L18 7.42l2.29 2.29L21.7 8.3l-2.29-2.29 1.29-1.29-1.41-1.41-8.54 8.54c-.79-.52-1.74-.83-2.75-.83-2.76 0-5 2.24-5 5s2.24 5 5 5Zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3"></path>
            </svg>
    }
  ]

  return (
    <div
      className={`${toggleSettings ? "flex" : "hidden"} w-full h-screen absolute top-0 left-0 bg-slate-950/70 items-center justify-center`}
    >
      
      <div
        className='dark:bg-slate-900 bg-slate-200 shadow-slate-700 shadow-md dark:shadow-sm border-2 border-slate-500 flex flex-row items-start justify-start dark:border-slate-800 dark:shadow-slate-900 rounded-sm w-[50rem] h-[38rem]'
        ref={clickOutside}
      >
        {/* views */}
        <div
          className='w-2/5 h-full flex flex-col gap-20 border-r-2 border-slate-500 dark:border-slate-800 p-5'
        >

          <h1
            className='font-semibold text-2xl'
          >
            Settings
          </h1>

          {/* views */}
          <div
            className='flex flex-col gap-3'
          >
            {
              views.map((view) => (
                <button
                  className={`w-full flex items-center rounded-sm p-2 justify-start gap-2 ${view.name == viewState ? "bg-slate-300 dark:bg-sky-500" : "dark:bg-slate-950 bg-slate-100"}`}
                  key={view.name}
                  onClick={() => setViewState(view.name)}
                >
                  <i>
                    {view.icon}
                  </i>
                  <p
                    className='font-medium '
                  >
                    {view.name}
                  </p>
                </button>
              ))
            }
          </div>

        </div>

        {/* fields */}
        <div
          className='p-5 flex flex-col gap-10 w-3/5 h-full'
        >
          
          {/* close button */}
          <div
            className='flex items-end justify-end w-full h-fit'
          >
            <button
              className='p-2 rounded-full dark:bg-slate-950 dark:hover:bg-sky-500 dark:hover:text-slate-900 duration-200 bg-slate-300 hover:bg-slate-400 '
              onClick={() => setToggleSettings(false)}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
            </button>
          </div>

          <div
            className='flex flex-col gap-5 w-full h-full'
          >

            {/* current view */}
            <div
              className='flex flex-col gap-1 w-full h-fit'
            >
              <h1
                className='text-3xl font-semibold'
              >
                {viewState}
              </h1>
              <span className='w-full h-0.5 bg-slate-500 dark:bg-slate-800 rounded-full'></span>
            </div>

            {/* details */}
            <div
              className={`${viewState === "Details" ? "flex" : "hidden"} flex-col gap-5 w-full h-full`}
            >
              
              {/* name */}
              <div
                className='flex flex-col relative gap-1 w-full h-fit'
              >
                <p>
                  Name:
                </p>
                <input 
                  type=""
                  className='w-full border-slate-500 p-2 rounded-sm border-2 '
                  value={"hi"}
                  onChange={() => {}}
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SettingsModal