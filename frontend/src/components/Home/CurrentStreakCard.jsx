import React from 'react'
import ProgressBar from '../GeneralComponents/ProgressBar'

const CurrentStreakCard = ({
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    icon,
    value=0
}) => {
    return (
        <div
            className="w-full h-full bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4  dark:bg-slate-950 dark:shadow-none flex flex-col gap-8"
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd
            }}
        >
            {/* title and icon */}
            <div
                className='flex flex-row items-start justify-between w-full h-2/6'
            >
                <div
                    className='w-full h-full flex flex-row gap-4'
                >
                    <span className='w-1 h-full rounded-full bg-amber-400'></span>
                    <div
                        className='w-fit h-fit flex flex-col gap-2'
                    >
                        <h1
                            className='font-semibold text-lg text-stone-800 dark:text-stone-200'
                        >
                            Login Streak
                        </h1>
                        <p
                            className='font-bold text-3xl text-stone-800/70 dark:text-stone-200/70'
                        >
                            {value} days
                        </p>
                    </div>
                </div>
                <i
                    className='p-2 rounded-sm dark:bg-amber-400 bg-amber-500 text-white shadow shadow-slate-500 dark:shadow-slate-800'
                >
                    {icon}
                </i>
            </div>

            {/* progress bar */}
            <div
                className='flex flex-col gap-2 w-full 2/6'
            >
                <ProgressBar
                    progress={50}
                    colour={"orange"}
                />
            </div>

            {/* streaks */}
            <div
                className='w-full h-2/6 flex flex-col gap-4'
            >
                <p
                    className='text-sm font-medium'
                >
                    previous Streaks
                </p>
            </div>

        </div>
    )

}

export default CurrentStreakCard