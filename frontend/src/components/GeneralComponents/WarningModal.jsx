import React from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { useNavigate } from 'react-router-dom'


const WarningModal = ({setToggleWarningModal, title, content}) => {

    const clickOutsideRef = useClickOutside(() => setToggleWarningModal(false))

    const navigate = useNavigate()

  return (
    <div
        className='absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-slate-900/70'
    >

        <div
            className='flex flex-col gap-3 rounded-sm bg-slate-100 dark:bg-slate-800 w-96 h-68 shadow shadow-slate-700 dark:shadow-slate-950 dark:shadow-md p-5 relative border-2 border-slate-200 dark:border-slate-700'
            ref={clickOutsideRef}
        >
            {/* icon */}
            <div
                className='w-full h-fit flex items-center justify-center'
            >
                <i
                    className='bg-rose-200 text-rose-700 w-fit h-fit p-2 rounded-full'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M11 7h2v6h-2zM11 15h2v2h-2z"></path><path d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8"></path></svg>
                </i>
            </div>

            {/* warning message */}
            <div
                className='flex flex-col gap-2 h-fit w-full items-center justify-center'
            >    
                <h1
                    className='font-bold text-xl'
                >
                    {title}
                </h1>
                <p
                    className='text-sm font-medium text-slate-800/70 dark:text-slate-200/70 text-center px-8'
                >
                    {content}
                </p>
            </div>

            {/* cancel and exit button */}
            <div
                className='flex items-end justify-between w-full h-full gap-2'
            >
                <button
                    className='w-1/2 h-fit p-2 border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 duration-200 border-2 rounded text-sm font-medium'
                    onClick={() => setToggleWarningModal(false)}
                >
                    Cancel
                </button>
                <button
                    className='w-1/2 h-fit p-2 rounded-sm duration-200 text-sm border-2 border-rose-500 bg-rose-500 hover:border-rose-600 hover:bg-rose-600  text-slate-100 font-medium'
                    onClick={() => navigate(-1)}
                >
                    Exit
                </button>
            </div>


        </div>

    </div>
  )
}

export default WarningModal