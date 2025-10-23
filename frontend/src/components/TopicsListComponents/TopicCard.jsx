import React, { useState } from 'react'

const TopicCard = ({title, topic, desc, difficulty, completed, icon, handleSelectedQuiz}) => {

  const truncateText = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  }

  return (
    <div
      className='w-full h-48 bg-slate-100 shadow shadow-slate-400 rounded-sm p-4 dark:bg-slate-950 dark:shadow-slate-900 flex flex-col gap-3 '
    >
      {/* title part */}
      <div
        className='flex flex-row items-start gap-3 h-2/8'
      >
        <i
          className={`p-2 rounded-sm ${topic == "Science" && "bg-purple-500 dark:bg-purple-400"} ${topic == "Mathematics" && "bg-orange-500 dark:bg-orange-400"} ${topic == "Geography" && "bg-teal-500 dark:bg-teal-400"} ${topic == "Programming" && "bg-green-500 dark:bg-green-400"} ${topic == "History" && "bg-rose-500 dark:bg-rose-400"} ${topic == "English" && "bg-sky-500 dark:bg-sky-400"} ${topic == "Economics" && "bg-amber-500 dark:bg-amber-400"} text-slate-100 shadow shadow-slate-500 dark:shadow-slate-800`}
        >
          {icon}
        </i>
        <div
          className='flex flex-row items-start justify-between w-full'
        >
          <div
            className='flex flex-col items-start justify-start'
          >
            <h1
              className='font-semibold text-sm'
            >
              {truncateText(title, 16)}
            </h1>
            <p
              className='text-xs text-stone-800/70 dark:text-stone-200/70'
            >
              {topic}
            </p>
          </div>
          <p
            className={`text-[11px] p-1 px-2 rounded-lg ${difficulty === "Hard" && "bg-red-200 text-rose-700"} ${difficulty === "Med" && "bg-yellow-200 text-amber-700"} ${difficulty === "Easy" && "bg-teal-200 text-green-700"}`}
          >
              {difficulty}
          </p>
        </div>
      </div>      

      {/* border and description */}
      <div
        className='flex flex-col gap-2 w-full h-4/8'
      >
        <span className='w-full h-0.5 bg-slate-600/50 dark:bg-slate-400/50 rounded-full'></span>
        <p
          className='text-[11px] text-slate-500 dark:text-slate-300/70 font-medium'
        >
          {truncateText(desc,140)}
        </p>
      </div>

      {/* completed status and start button */}
      <div
        className='flex flex-row items-end justify-between w-full h-2/8'
      >
        <p
          className={`${completed ? "text-green-700 bg-teal-200" : "bg-red-200 text-rose-700"} rounded-full p-1 px-2 flex flex-row items-center gap-2 text-[10px] font-medium `}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path></svg>
          {
            completed
            ? "Complete"
            : "Incomplete"
          }
        </p>
        <div
          className='flex flex-row items-center gap-2 w-fit h-fit'
        >
          {/* save for later */}
          <button
            className='bg-slate-200 p-2 rounded text-slate-900 duration-200 hover:bg-slate-300 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200'
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V21c0 .35.18.67.47.85s.66.2.97.04l5.55-2.78 5.55 2.78a.997.997 0 0 0 1.45-.89v-8h4c.55 0 1-.45 1-1V5.5c0-1.93-1.57-3.5-3.5-3.5ZM15 19.38l-4.55-2.28a1 1 0 0 0-.89 0l-4.55 2.28V5.5c0-.83.67-1.5 1.5-1.5h8.85c-.22.46-.35.96-.35 1.5v13.88ZM20 11h-3V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>
          </button>
          <button
            // className={`p-2 rounded-sm ${topic == "Science" && "bg-purple-500 dark:bg-purple-400"} ${topic == "Mathematics" && "bg-orange-500 dark:bg-orange-400"} ${topic == "Geography" && "bg-teal-500 dark:bg-teal-400"} ${topic == "Programming" && "bg-green-500 dark:bg-green-400"} ${topic == "History" && "bg-rose-500 dark:bg-rose-400"} ${topic == "English" && "bg-sky-500 dark:bg-sky-400"} ${topic == "Economics" && "bg-amber-500 dark:bg-amber-400"} text-slate-100 shadow shadow-slate-500 dark:shadow-slate-800 text-xs px-3 font-semibold`}
            className='p-2 px-3 font-medium cursor-pointer hover:bg-sky-600 bg-sky-500  text-slate-100 hover:text-slate-200 rounded text-xs duration-200'
            onClick={handleSelectedQuiz}
          >
            Select
          </button>
        </div>
      </div>

    </div>
  )
}

export default TopicCard