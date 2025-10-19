// StatisticsCard.jsx
import React from 'react'

const StatisticsCard = ({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  icon, 
  title = "Title",
  value = 0, // the big number 
  colour = "blue", // this can only be green, red, orange, or blue
  percentageValue = 0 // increase or decrease from last week
}) => {
  return (
    <div
      className="w-full h-full flex-col flex bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4 gap-4 dark:bg-slate-950 dark:shadow-none "
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd
      }}
    >
      {/* top */}
      <div
        className='flex flex-row w-full h-3/5 justify-between items-start'
      >
        <div
          className='flex flex-row items-start h-full justify-start gap-4 w-full'
        >
          <span
            className={`h-full min-w-1 rounded-full flex ${colour === "green" && "bg-teal-500 dark:bg-teal-400"} ${colour === "red" && "bg-rose-500 dark:bg-rose-400"} ${colour === "orange" && "bg-amber-500 dark:bg-amber-400"} ${colour === "blue" && "bg-sky-500 dark:bg-sky-400"}`}>
          </span>
          <div
            className='flex flex-col items-start justify-start gap-2 w-fit'
          >
            <h1
              className='text-sm font-medium text-stone-800/70 dark:text-stone-200/70'
            >
              {title}
            </h1>
            <p
              className='text-3xl font-semibold'
            >
              {value}
            </p>
          </div>
        </div>
        <i
          className={`${colour === "green" && "bg-teal-500 dark:bg-teal-400"} ${colour === "red" && "bg-rose-500 dark:bg-rose-400"} ${colour === "orange" && "bg-amber-500 dark:bg-amber-400"} ${colour === "blue" && "bg-sky-500 dark:bg-sky-400"} p-2 rounded-md text-white`}
        >
          {icon}
        </i>
      </div>
      <div
        className='w-full h-2/5 flex items-center justify-start gap-1'
      >
        <p
          className={`${colour === "green" && "text-teal-500 dark:text-teal-400"} ${colour === "red" && "text-rose-500 dark:text-rose-400"} ${colour === "orange" && "text-amber-500 dark:text-amber-400"} ${colour === "blue" && "text-sky-500 dark:text-sky-400"} text-xs flex-row flex font-medium items-center`}
        >
          {
            percentageValue > 0
            ? <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} 
                fill={"currentColor"} viewBox="0 0 24 24">{/*   Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M13 18v-6h4l-5-6-5 6h4v6z"></path>
              </svg>
            : <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20}
                fill={"currentColor"} viewBox="0 0 24 24" transform={"rotate(180)"}>{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M13 18v-6h4l-5-6-5 6h4v6z"></path>
              </svg>
          }
          {percentageValue}% 
        </p>
        <p
          className='text-xs flex flex-row items-center gap-0.5 text-stone-800/70 dark:text-stone-200/70'
        >
          since last week
        </p>
      </div>
    </div>
  )
}

export default StatisticsCard