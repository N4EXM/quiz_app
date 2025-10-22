import React from 'react'
import TopicCard from './TopicCard'

const TopicsList = ({ quizTopicsList, topicName, handleSelectedQuiz }) => {

    const topicIcons = {
        Mathematics:    <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19,2H5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM5,20V4h14v16s-14,0-14,0Z"></path><path d="M7 12H9V14H7z"></path><path d="M7 16H9V18H7z"></path><path d="M11 12H13V14H11z"></path><path d="M7 6H17V10H7z"></path><path d="M11 16H13V18H11z"></path><path d="M15 12H17V18H15z"></path>
                        </svg>, 
        Geography:      <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m21.51 6.14-5-3a.99.99 0 0 0-.87-.08L8.09 5.89 3.51 3.14a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v13c0 .35.18.68.49.86l5 3c.26.16.58.19.87.08l7.55-2.83 4.59 2.75c.16.1.34.14.51.14s.34-.04.49-.13c.31-.18.51-.51.51-.87V7a.99.99 0 0 0-.49-.86M7 18.23l-3-1.8V5.77l3 1.8v10.67Zm8-1.93-6 2.25V7.69l6-2.25zm5 1.93-3-1.8V5.77l3 1.8v10.67Z"></path>
                        </svg>,
        Science:        <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19,2H5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM5,20V4h14v16s-14,0-14,0Z"></path><path d="M7 12H9V14H7z"></path><path d="M7 16H9V18H7z"></path><path d="M11 12H13V14H11z"></path><path d="M7 6H17V10H7z"></path><path d="M11 16H13V18H11z"></path><path d="M15 12H17V18H15z"></path>
                        </svg>,
        Programming:    <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M21 17V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 .37.11.7.28 1H2v2h20v-2h-1.28c.17-.3.28-.63.28-1M5 6h14v11-1H5z"></path>
                        </svg>,
        History:        <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 10h-2V6h1V2h-2v2h-1V2h-2v2h-1V2h-2v2h-1V2H8v2H7V2H5v4h1v4H4V8H2v13c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8h-2zm-4-4v4H8V6zm4 14h-4v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4H4v-8h16z"></path>
                        </svg>,
        English:        <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M8 6h9v2H8z"></path><path d="M20 2H6C4.35 2 3 3.35 3 5v14c0 1.65 1.35 3 3 3h15v-2H6c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-6 14H6c-.35 0-.69.07-1 .18V5c0-.55.45-1 1-1h13v12z"></path>
                        </svg>,    
        Economics:      <svg  
                            xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20,7h-3V3c0-.33-.16-.64-.43-.82-.27-.19-.62-.23-.92-.11L3.28,6.82c-.77.29-1.28,1.05-1.28,1.87v11.31c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-11c0-1.1-.9-2-2-2Zm-5-2.54v2.54h-6.61l6.61-2.54Zm-11,15.54v-11h16v2h-5c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h5v2H4Zm16-4h-5v-3h5v3Z"></path>
                        </svg>          
    }

    const getTopicIcon = () => {
        return topicIcons[topicName]
    }

    const icon = getTopicIcon()

  return (
    <div
        className='flex flex-col gap-4 w-full h-fit'
    >
        <div
            className='flex flex-col gap-2 w-full h-fit'
        >
            <h1
                className='text-lg font-semibold'
            >
                {topicName}
            </h1>
            <span className='w-full min-h-0.5 bg-slate-700 dark:bg-sky-500'></span>
        </div>
        <div
            className='items-center gap-4 w-full h-fit grid grid-cols-3 2xl:grid-cols-4'
        >
            {
                quizTopicsList.map((quiz) => (
                    <TopicCard
                        key={quiz.title}
                        title={quiz.title}
                        topic={quiz.topic}
                        desc={quiz.desc}
                        difficulty={quiz.difficulty}
                        completed={quiz.completed}
                        handleSelectedQuiz={() => handleSelectedQuiz(quiz, icon)}
                        icon={icon}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default TopicsList