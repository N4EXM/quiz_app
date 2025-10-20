import React from 'react'

const TopicsList = ({ quizTopicsList, topic }) => {
  return (
    <div
        className='flex flex-col gap-2'
    >
        <div
            className='flex flex-col gap-2 w-full h-fit'
        >
            <h1
                className='text-lg font-semibold'
            >
                {topic}
            </h1>
            <span className='w-full min-h-0.5 bg-slate-700 dark:bg-slate-700'></span>
        </div>
        <div
            className='flex flex-row items-center gap-4 w-full overflow-x-scroll'
        >
            {}
        </div>
    </div>
  )
}

export default TopicsList