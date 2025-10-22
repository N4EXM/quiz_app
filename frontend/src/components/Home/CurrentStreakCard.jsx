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
                            className='font-semibold text-lg text-slate-800 dark:text-stone-200'
                        >
                            Login Streak
                        </h1>
                        <p
                            className='font-bold text-3xl text-slate-800/70 dark:text-stone-200/70'
                        >
                            {value} days
                        </p>
                    </div>
                </div>
                <i
                    className='p-2 rounded-sm dark:bg-amber-400 bg-amber-500 text-white shadow shadow-slate-500 dark:shadow-amber-500'
                >
                    {icon}
                </i>
            </div>

            {/* progress bar */}
            <div
                className='flex flex-col gap-2 w-full 2/6'
            >
                <div
                    className='flex flex-row items-center justify-between w-full h-fit'
                >
                    <p
                        className='font-medium text-xs'
                    >
                        Days left to pass
                    </p>
                    <p
                        className='font-medium text-xs dark:text-slate-200/70 text-slate-900/70'
                    >
                        8/16
                    </p>
                </div>
                <ProgressBar
                    progress={50}
                    colour={"orange"}
                />
            </div>

            {/* streaks */}
            <div
                className='w-full h-2/6 flex flex-col gap-4 items-start justify-end'
            >
                {/* highest streak */}
                <div
                    className='text-xs font-medium flex flex-row w-full items-center justify-between'
                >
                    <p
                        className=''
                    >
                        Highest Streak:
                    </p>
                    <p
                        className='text-amber-500 dark:text-amber-400'
                    >
                        20 days
                    </p>
                </div>
                {/* highest streak */}
                <div
                    className='text-xs font-medium flex flex-row w-full items-center justify-between'
                >
                    <p
                        className=''
                    >
                        Previous Streak:
                    </p>
                    <p
                        className='text-amber-500 dark:text-amber-400'
                    >
                        12 days
                    </p>
                </div>
            </div>

        </div>
    )

}

export default CurrentStreakCard