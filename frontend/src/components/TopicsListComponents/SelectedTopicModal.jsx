import React from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { useNavigate } from 'react-router-dom'

const SelectedTopicModal = ({ setToggleSelectedTopicModal, selectedQuiz }) => {
  
    const clickOutsideRef = useClickOutside(() => setToggleSelectedTopicModal(false))
    
    const difficulty = "Med"
    const completed = true

    const navigate = useNavigate()

    return (
        <div
            className='absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-slate-900/70'
        >
            {/* actual modal */}
            <div
                className='flex flex-col rounded-sm bg-slate-100 dark:bg-slate-800 w-[30rem] h-[35rem] shadow shadow-slate-700 dark:shadow-slate-950 dark:shadow-md relative border-2 border-slate-200 dark:border-slate-700'
                ref={clickOutsideRef}
            >
                
                <div
                    className='flex flex-row items-start justify-between w-full h-3/6 p-5 '
                >
                    <div
                        className='flex flex-col gap-4 w-full h-fit'
                    >
                        <div
                            className='flex flex-row items-start justify-between w-full h-fit'
                        >
                            <i
                                className={`p-2 rounded-sm 
                                    ${selectedQuiz.topic == "Science" && "bg-purple-500 dark:bg-purple-400"} 
                                    ${selectedQuiz.topic == "Mathematics" && "bg-orange-500 dark:bg-orange-400"} 
                                    ${selectedQuiz.topic == "Geography" && "bg-teal-500 dark:bg-teal-400"} 
                                    ${selectedQuiz.topic == "Programming" && "bg-green-500 dark:bg-green-400"} 
                                    ${selectedQuiz.topic == "History" && "bg-rose-500 dark:bg-rose-400"} 
                                    ${selectedQuiz.topic  == "English" && "bg-sky-500 dark:bg-sky-400"} 
                                    ${selectedQuiz.topic == "Economics" && "bg-amber-500 dark:bg-amber-400"} text-slate-100 shadow shadow-slate-500 dark:shadow-slate-800`}
                            >
                                {selectedQuiz.icon}
                            </i>
                            <button
                                className='p-1 rounded-full bg-slate-300 dark:bg-slate-900 hover:dark:bg-sky-500 dark:text-slate-300 text-slate-900 hover:bg-slate-400 duration-200'
                                onClick={() => setToggleSelectedTopicModal(false)}
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                            </button>
                        </div>                        
                        <div
                            className='flex flex-col gap-0 w-fit h-fit'
                        >
                            <h1
                                className='font-semibold text-lg text-slate-700 dark:text-slate-100'
                            >
                                {selectedQuiz.title}
                            </h1>
                        </div>
                        <div
                            className='flex flex-col w-3/4 h-full gap-3'
                        >
                            {/* category */}
                            <div
                                className='w-full grid-cols-2 grid text-sm'
                            >
                                <div
                                    className='text-slate-500 dark:text-slate-300 font-medium flex flex-row items-center gap-2'
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 3H11V21H9z"></path><path d="M20.71 20.23 16.91 12.08 13.1 3.92 12.2 4.34 11.29 4.77 15.09 12.92 18.9 21.08 19.8 20.66 20.71 20.23z"></path><path d="M6 3H8V21H6z"></path><path d="M3 3H5V21H3z"></path></svg>
                                    Category:
                                </div>
                                <p
                                    className='dark:text-slate-100 text-slate-800'
                                >
                                    {selectedQuiz.topic}
                                </p>
                            </div>

                            {/* difficulty */}
                            <div
                                className='w-full grid-cols-2 grid text-sm'
                            >
                                <div
                                    className='text-slate-500 dark:text-slate-300 font-medium flex flex-row items-center gap-2'
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19,6h-4v-1c0-1.65-1.35-3-3-3s-3,1.35-3,3v1h-4c-1.1,0-2,.9-2,2v4c0,.55.45,1,1,1h2c.55,0,1,.45,1,1s-.45,1-1,1h-2c-.55,0-1,.45-1,1v4c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-12c0-1.1-.9-2-2-2Zm0,14H5v-3h1c1.65,0,3-1.35,3-3s-1.35-3-3-3h-1v-3h5c.55,0,1-.45,1-1v-2c0-.55.45-1,1-1s1,.45,1,1v2c0,.55.45,1,1,1h5v12Z"></path></svg>
                                    Difficulty:
                                </div>
                                <p
                                    className={`text-xs p-1 px-2 rounded-md ${selectedQuiz.difficulty === "Hard" && "bg-red-200 text-rose-700"} ${selectedQuiz.difficulty === "Med" && "bg-yellow-200 text-amber-700"} ${selectedQuiz.difficulty === "Easy" && "bg-teal-200 text-green-700"} w-fit flex flex-row items-center gap-1.5`}
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path></svg>
                                    {selectedQuiz.difficulty}
                                </p>
                            </div>

                            {/* completed */}
                            <div
                                className='w-full grid-cols-2 grid text-sm'
                            >
                                <div
                                    className='text-slate-500 dark:text-slate-300 font-medium flex flex-row items-center gap-2'
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 15.5c-.26 0-.51-.1-.71-.29l-2.5-2.5L8.7 11.3l1.79 1.79 4.79-4.79 1.41 1.41-5.5 5.5c-.2.2-.45.29-.71.29Z"></path><path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2M5 5v14h14V5z"></path></svg>
                                    Completed:
                                </div>
                                <p
                                    className={`${selectedQuiz.completed ? "text-green-700 bg-teal-200" : "bg-red-200 text-rose-700"} rounded-full p-1 px-2 flex flex-row items-center gap-2 text-[10px] font-medium w-fit`}
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path></svg>
                                    {
                                        selectedQuiz.completed
                                        ? "Complete"
                                        : "Incomplete"
                                    }
                                </p>
                            </div>

                            {/* Question count */}
                            <div
                                className='w-full grid-cols-2 grid text-sm'
                            >
                                <div
                                    className='text-slate-500 dark:text-slate-300 font-medium flex flex-row items-center gap-2'
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20,3H4c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2Zm0,5.25h-10v-3.25h10v3.25Zm-10,2h10v3.5s-10,0-10,0v-3.5Zm-2,3.5h-4v-3.5h4v3.5Zm0-8.75v3.25h-4v-3.25h4Zm-4,14v-3.25h4v3.25h-4Zm6,0v-3.25h10v3.25s-10,0-10,0Z"></path></svg>
                                    Questions:
                                </div>
                                <p
                                    className='dark:text-slate-100 text-slate-800'
                                >
                                    {selectedQuiz.queCount}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <span className='w-full h-0.5 bg-slate-300 dark:bg-slate-700 my-2.5'></span>

                {/* description */}
                <div
                    className='flex flex-col gap-2 h-2/6 pt-1 p-5'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <p
                            className='font-medium text-slate-700 dark:text-slate-200'
                        >
                            Description
                        </p>
                        {/* <span className='w-full h-0.5 bg-slate-300'></span> */}
                    </div>

                    <p
                        className='text-sm text-slate-600 dark:text-slate-300 p-3 pt-2.5 bg-slate-200 dark:bg-slate-900 rounded-sm h-full'
                    >
                        {selectedQuiz.desc}
                    </p>

                </div>

                {/* save and start button */}
                <div
                    className='h-1/6 w-full flex flex-row items-end p-5 justify-between'
                >
                    <div
                        className='flex flex-row items-center gap-2 w-full justify-end'
                    >
                        {/* save for later */}
                        <button
                            className='bg-slate-200 p-2 rounded text-slate-900 duration-200 hover:bg-slate-300 cursor-pointer dark:bg-slate-900 dark:hover:bg-slate-700 dark:text-slate-200'
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V21c0 .35.18.67.47.85s.66.2.97.04l5.55-2.78 5.55 2.78a.997.997 0 0 0 1.45-.89v-8h4c.55 0 1-.45 1-1V5.5c0-1.93-1.57-3.5-3.5-3.5ZM15 19.38l-4.55-2.28a1 1 0 0 0-.89 0l-4.55 2.28V5.5c0-.83.67-1.5 1.5-1.5h8.85c-.22.46-.35.96-.35 1.5v13.88ZM20 11h-3V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>
                        </button>
                        <button
                            // className={`p-2 rounded-sm ${topic == "Science" && "bg-purple-500 dark:bg-purple-400"} ${topic == "Mathematics" && "bg-orange-500 dark:bg-orange-400"} ${topic == "Geography" && "bg-teal-500 dark:bg-teal-400"} ${topic == "Programming" && "bg-green-500 dark:bg-green-400"} ${topic == "History" && "bg-rose-500 dark:bg-rose-400"} ${topic == "English" && "bg-sky-500 dark:bg-sky-400"} ${topic == "Economics" && "bg-amber-500 dark:bg-amber-400"} text-slate-100 shadow shadow-slate-500 dark:shadow-slate-800 text-xs px-3 font-semibold`}
                            className='p-2 px-3 font-medium cursor-pointer hover:bg-sky-600 bg-sky-500  text-slate-100 hover:text-slate-200 rounded text-sm duration-200'
                            onClick={() => navigate('/Topics/12')}
                        >
                            Start
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SelectedTopicModal