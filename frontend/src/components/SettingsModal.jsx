import React, { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import { useAuth } from '../context/AuthContext'
import defaultProfileImg from '../assets/images/userDefault.png'


const SettingsModal = ({ toggleSettings, setToggleSettings }) => {
  
  // context
  const { user } = useAuth()

  // toggles
  const [isEdit, setIsEdit] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  // state
  const clickOutside = useClickOutside(() => setToggleSettings(false))
  const [viewState, setViewState] = useState("Details") // 0: users details 1: security

  // user 
  const firstName = user.firstName
  const lastName = user.lastName
  const email = user.email
  const userImage = user.profileImg

  // user state
  const [cfirstName, setCFirstName] = useState(firstName || "")
  const [cLastName, setCLastName] = useState(lastName || "")
  const [cEmail, setCEmail] = useState(email || "")
  const [cUserImage, setCUserImage] = useState(userImage || null)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  // functions
  const handleCloseEdit = () => {
    setCFirstName(firstName)
    setCLastName(lastName)
    setCEmail(email)
    setCUserImage(userImage)
    setIsEdit(false)
  }

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
      className={`${toggleSettings ? "flex" : "hidden"} w-full h-screen absolute z-20 top-0 left-0 bg-slate-950/70 items-center justify-center`}
    >
      
      <div
        className='dark:bg-slate-900 bg-slate-200 shadow-slate-900 shadow-md dark:shadow-sm border-2 border-slate-500 flex flex-row items-start justify-start dark:border-sky-500 dark:shadow-slate-900 rounded-sm w-[50rem] h-[38rem] relative'
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

            {/* details view */}
            <div
              className={`${viewState === "Details" ? "flex" : "hidden"} flex-col gap-5 w-full h-full`}
            >

              {/* profile pic */}
              <div
                className='relative flex w-fit flex-row gap-3'
              >
                <div
                  className='relative w-fit flex h-fit'
                >
                  <img 
                    src={cUserImage || defaultProfileImg}
                    alt='user image'
                    className={`${cUserImage === null && "p-2"} w-20 h-20 rounded-full border-2 border-slate-500  dark:border-sky-500`}
                  />
                  <button
                    className={`${isEdit ? "flex" : "hidden"} absolute -right-0.5 -bottom-0.5 p-1 rounded-full bg-slate-200 border-2 border-slate-500 dark:border-sky-500 dark:bg-slate-800 hover:bg-sky-500 hover:border-sky-500 duration-200 hover:text-slate-200 cursor-pointer`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                      <path fill="currentcolor" d="M13.999 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M3 6a3 3 0 0 1 3-3h7.999a3 3 0 0 1 3 3v3.002a2.9 2.9 0 0 0-1 .229V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v7.999c0 .372.103.721.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l1.745 1.715l-.707.707l-1.738-1.709a.5.5 0 0 0-.701 0l-4.661 4.58A2 2 0 0 0 6 16h3.474q-.024.076-.043.155L9.22 17H6a3 3 0 0 1-3-3zm7.979 9.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.2 2.2 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02" />
                    </svg>
                  </button>
                </div>
                <div
                  className='flex flex-col gap-0.5 w-fit h-fit pt-0.5'
                >
                  <h1
                    className='text-lg font-semibold'
                  >
                    Profile Picture
                  </h1>
                  <p
                    className='text-xs font-medium text-slate-900/60 dark:text-slate-200/60 w-48'
                  >
                    This is the picture other users will see
                  </p>
                </div>
              </div>
              
              {/* first name */}
              <div
                className='flex flex-col relative gap-1 w-full h-fit'
              >
                <svg className='absolute top-8.5 left-3 dark:text-slate-500 text-slate-700' xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
                <p
                  className='text-sm font-medium'
                >
                  First name:
                </p>
                <input 
                  type="text"
                  className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-10'
                  value={firstName}
                  onChange={(e) => setCFirstName(e.target.value)}
                  readOnly={!isEdit}
                />
              </div>

              {/* last name */}
              <div
                className='flex flex-col relative gap-1 w-full h-fit'
              >
                <svg className='absolute top-8.5 left-3 dark:text-slate-500 text-slate-700' xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
                <p
                  className='text-sm font-medium'
                >
                  Last name:
                </p>
                <input 
                  type="text"
                  className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-10'
                  value={cLastName}
                  onChange={(e) => setCLastName(e.target.value)}
                  readOnly={!isEdit}
                />
              </div>

              {/* email */}
              <div
                className='flex flex-col relative gap-1 w-full h-fit'
              >
                <svg className='absolute top-[35px] left-3 dark:text-slate-500 text-slate-700' xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path></svg>
                <p
                  className='text-sm font-medium'
                >
                  Email:
                </p>
                <input 
                  type="text"
                  className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-10'
                  value={cEmail}
                  onChange={(e) => setCEmail(e.target.value)}
                  readOnly={!isEdit}
                />
              </div>

              {/* edit button */}
              <div
                className='p-5 w-full h-fit absolute bottom-0 left-0 flex items-end justify-end'
              >
                {
                  isEdit
                  ?   <div
                        className='flex flex-row items-center gap-2'
                      >
                        <button
                          className='bg-rose-500 p-2 rounded text-slate-200 hover:bg-rose-500/80 active:bg-rose-500/60 duration-200 hover:text-text/80'
                          onClick={() => handleCloseEdit()}
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                          </svg>
                        </button>
                        <button
                            className='bg-sky-500 p-2 rounded hover:bg-sky-500/80 text-slate-200 active:bg-sky-500/60 duration-200 hover:text-slate-200/80'
                            onClick={() => {}}
                        >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                            </svg>
                        </button>
                    </div>
                  : <button
                      className='p-2 rounded-md bg-sky-500 hover:bg-sky-500/80 text-slate-200 active:bg-sky-500/70 duration-200 hover:text-slate-200/80 px-4 text-sm font-medium flex flex-row-reverse items-center gap-1'
                      onClick={() => setIsEdit(!isEdit)}
                    >
                      <span>Edit</span> 
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                      </svg>
                    </button>
                }
              </div>

            </div>
            
            {/* security view */}
            <div
              className={`${viewState === "Security" ? "flex" : "hidden"} flex-col gap-5 w-full h-full relative`}
            >

              <p
                className='text-sm pl-0.5 font-medium dark:text-slate-200/80 text-slate-800/80  pr-10'
              >
                Enter your current password, if you want to change your password.
              </p>

              <div
                className='w-full h-fit relative'
              >
                <label 
                  htmlFor=""
                  className='text-sm font-medium'
                >
                  Password: 
                </label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-3'
                  placeholder='Enter your password...' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button
                  className='dark:text-slate-200/60 absolute top-[27px] text-slate-700 cursor-pointer hover:text-sky-500 duration-200 right-1 p-2'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {
                    showPassword
                    ?   <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"}
                          viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                        </svg>
                      :   <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} 
                            fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                          </svg>
                  }
                </button>
              </div>

              {/* new password */}
              <div
                className='flex flex-col items-start justify-between w-full'
              >
                <div
                  className='w-full h-fit relative flex flex-col gap-1'
                >
                  <label 
                    htmlFor=""
                    className='pl-1 text-sm font-medium'
                  >
                    New Password: 
                  </label>
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-3'
                    placeholder='Enter your new password...'  
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    className='dark:text-slate-200/60 absolute top-[27px] text-slate-700 cursor-pointer hover:text-sky-500 duration-200 p-2 right-1'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {
                      showNewPassword 
                      ? <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                         fill={"currentColor"} viewBox ="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                        </svg>
                      : <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                          fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                        </svg>
                    }
                  </button>
                </div>
              </div>

              {/* confirm new password */}
              <div
                className='flex flex-col items-start justify-between w-full'
              >
                <div
                  className='w-full h-fit relative flex flex-col gap-1'
                >
                  <label 
                    htmlFor=""
                    className='pl-1 text-sm font-medium'
                  >
                    Confirm new Password: 
                  </label>
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    className='w-full border-slate-500 text-sm outline-none dark:bg-slate-950 dark:border-sky-500 bg-slate-100 p-2 rounded-sm border-2 pl-3'
                    placeholder='Enter your new password...'  
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                    <button
                      className='dark:text-slate-200/60 absolute top-[27px] text-slate-700 cursor-pointer hover:text-sky-500 duration-200 p-2 right-1'
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {
                        showNewPassword 
                        ? <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} 
                            fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                          </svg>
                      :   <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                            fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                          </svg>
                      }
                    </button>
                  </div>
              </div>

              <div
                className='absolute w-full h-fit flex items-end justify-end bottom-0 left-0'
              >
                <button
                  className={`text-slate-200 hover:text-slate-200/80 bg-sky-500 hover:bg-sky-600 duration-200 active:bg-sky-700 p-2 px-4  rounded-sm text-sm font-medium`}
                >
                  Submit
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SettingsModal