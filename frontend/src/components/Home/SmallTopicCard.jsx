import React from 'react'

const SmallTopicCard = ({title, category, difficulty}) => {
  return (
    <div
        className='flex flex-row w-full h-fit items-center justify-between p-2 rounded-sm hover:text-sky-500 dark:hover:text-sky-400 duration-200 dark:bg-slate-900 bg-slate-200'
    >
        <div
            className='flex flex-col gap-1 w-fit h-fit '
        >
            <h1
                className='text-sm font-semibold'
            >
                {title}
            </h1>
            <p
                className='text-xs text-stone-800/70 dark:text-stone-200/70'
            >
                Category: {category}
            </p>
        </div>
        <div
            className='flex flex-col w-fit h-full justify-center pr-2 items-center'
        >
            <p
                className={`text-xs p-1 px-2 rounded-lg ${difficulty === "Hard" && "bg-red-200 text-rose-600"} ${difficulty === "Medium" && "bg-yellow-200 text-amber-600"} ${difficulty === "Easy" && "bg-teal-200 text-green-600"}`}
            >
                {difficulty}
            </p>
            {/* <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M6 13h6v4l6-5-6-5v4H6z"></path></svg>     */}
        </div>
    </div>
  )
}

export default SmallTopicCard