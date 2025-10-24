import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import WarningModal from '../components/GeneralComponents/WarningModal'
import ProgressBar from '../components/GeneralComponents/ProgressBar'

const TopicsPage = () => {

  const { toggleTheme, theme } = useTheme()

  const quiz = {
    id: 2,
    title: "Algebra Fundamentals",
    topic: "Mathematics",
    desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
    difficulty: "Med",
    completed: false,
    queCount: 10,
    progress: 44,
  }
  
  const questions = [
    {
      id: 1,
      question: "Solve for x: 2x + 5 = 13",
      answers: [
          { id: 1, text: "x = 4" },
          { id: 2, text: "x = 8" },
          { id: 3, text: "x = 9" },
          { id: 4, text: "x = 6" }
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Simplify: 3(x + 4) - 2x",
      answers: [
          { id: 1, text: "x + 12" },
          { id: 2, text: "5x + 12" },
          { id: 3, text: "x - 12" },
          { id: 4, text: "3x + 10" }
      ],
      correctAnswer: 1
    },
    {
        id: 3,
        question: "If y = 2x - 3, what is y when x = 4?",
        answers: [
            { id: 1, text: "5" },
            { id: 2, text: "11" },
            { id: 3, text: "1" },
            { id: 4, text: "8" }
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Solve for x: 4x - 7 = 3x + 5",
        answers: [
            { id: 1, text: "x = 12" },
            { id: 2, text: "x = 2" },
            { id: 3, text: "x = -2" },
            { id: 4, text: "x = -12" }
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "What is the solution to: 5(x - 2) = 15?",
        answers: [
            { id: 1, text: "x = 5" },
            { id: 2, text: "x = 3" },
            { id: 3, text: "x = 7" },
            { id: 4, text: "x = 1" }
        ],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "Simplify: 2x² + 3x - x² + 4x",
        answers: [
            { id: 1, text: "x² + 7x" },
            { id: 2, text: "3x² + 7x" },
            { id: 3, text: "x² - 7x" },
            { id: 4, text: "x² + x" }
        ],
        correctAnswer: 1
    },
    {
        id: 7,
        question: "Solve the equation: x/3 = 9",
        answers: [
            { id: 1, text: "x = 27" },
            { id: 2, text: "x = 12" },
            { id: 3, text: "x = 3" },
            { id: 4, text: "x = 6" }
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "If 2x + 3y = 12 and x = 3, what is y?",
        answers: [
            { id: 1, text: "y = 2" },
            { id: 2, text: "y = 3" },
            { id: 3, text: "y = 4" },
            { id: 4, text: "y = 1" }
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Solve for x: 7 - 2x = 3x + 2",
        answers: [
            { id: 1, text: "x = 1" },
            { id: 2, text: "x = 5" },
            { id: 3, text: "x = -1" },
            { id: 4, text: "x = 3" }
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "What is the value of 3a + 2b when a = 2 and b = 3?",
        answers: [
            { id: 1, text: "12" },
            { id: 2, text: "15" },
            { id: 3, text: "10" },
            { id: 4, text: "8" }
        ],
        correctAnswer: 1
    }
  ]

  // toggles  
  const [toggleWarningModal, setToggleWarningModal] = useState(false)
  const [questionAnswered, setQuestionAnswered] = useState(false)

  // state
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex].question)
  const [progress, setProgress] = useState(questionIndex / questions.length)
  
  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
      setCurrentQuestion(questions[questionIndex + 1].question)
    }
  }

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1)
      setCurrentQuestion(questions[questionIndex - 1].question)
    }
  }

  return (
    <div
      className='flex flex-col gap-5 w-screen h-screen bg-slate-200 p-5 dark:bg-slate-900 overflow-hidden relative'
    >
      
      {/* back and theme toggle buttons */}
      <div
        className='flex flex-row items-center justify-between w-full h-fit'
      >
        <button
          className='p-2 rounded-full bg-slate-100 shadow shadow-slate-300 dark:shadow-slate-950 text-slate-900 hover:bg-slate-300 duration-200 dark:bg-slate-800 hover:text-slate-950 dark:hover:text-slate-300 dark:text-slate-200 dark:hover:bg-slate-700 w-fit h-fit'
          onClick={() => setToggleWarningModal(true)}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path></svg>
        </button>
        <button
          className='p-2 rounded-full w-fit h-fit bg-slate-100 shadow shadow-slate-300 dark:shadow-slate-950 text-amber-500 hover:bg-slate-300 duration-200 dark:bg-slate-800 dark:text-sky-400 dark:hover:bg-slate-700'
          onClick={() => toggleTheme()}
        >
          {
            theme === "dark"
            ?   <svg  
                  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20.71,13.51c-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2,4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25Zm-8.51,6.49c-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18Z"></path><path d="M18 2 16.75 4.75 14 6 16.75 7.25 18 10 19.25 7.25 22 6 19.25 4.75 18 2z"></path>
                </svg>
            :   <svg  
                  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path>
                </svg>
          }
        </button>          
      </div>

      {/* main content */}
      <div
        className='flex flex-row items-start justify-start w-full h-full gap-10'
      >
        
          {/* question title and questions and buttons*/}
          <div
            className='w-3/5 h-full flex flex-col gap-10 p-5 '
          >

            {/* title and progressBar */}
            <div
              className='flex flex-col gap-3 w-full h-fit '
            >
              <h1
                className='text-3xl font-bold'
              >
                {quiz.title}
              </h1>
              <div
                className='w-full h-fit flex flex-row items-center gap-2'
              >
                <ProgressBar
                  progress={progress}
                  colour={"blue"}
                />
                <p>
                  {progress}%
                </p>
              </div>

            </div>

            {/* different answers and question */}
            <div
              className='flex flex-col gap-5 w-full h-full'
            >
              <div
                className='flex flex-col gap-3 w-full h-fit'
              >
                <p
                  className='font-medium text-lg'
                >
                  Question {questionIndex + 1}/{quiz.queCount}:
                </p>
                <p
                  className='h-20'
                >
                  {currentQuestion}
                </p>
              </div>
              <div
                className='flex flex-col gap-2 w-full h-full'
              >
                {
                  questions[questionIndex].answers.map((que) => (
                    <button
                      key={que.id}
                      className='w-full text-start duration-200 bg-slate-100 dark:bg-slate-950 p-3 rounded-sm px-4 border-2 border-slate-100 hover:text-sky-500 hover:border-sky-500 dark:border-slate-950 dark:hover:text-sky-400 dark:hover:border-sky-400'
                    >
                      {que.text}
                    </button>
                  ))
                }
              </div>
            </div>

            {/* previous and next button */}
            <div
              className='flex flex-row items-center justify-end gap-2 w-full h-fit'
            >
              <button
                className='p-2 px-4 text-sm font-medium rounded border-2 border-sky-500 hover:bg-sky-500 hover:text-slate-100 dark:bg-slate-900 dark:hover:bg-sky-400 dark:hover:border-sky-400 duration-200'
                onClick={() => handlePreviousQuestion()}
              >
                Previous
              </button>
              <button
                className='p-2 px-4 text-sm font-medium rounded border-2 border-sky-500 bg-sky-500 dark:bg-sky-400 dark:border-sky-400 dark:hover:bg-sky-500 dark:hover:border-sky-500 text-slate-100 hover:bg-sky-600 hover:border-sky-600 duration-200 '
                onClick={() => handleNextQuestion()}
              >
                Next
              </button>
            </div>

          </div>

          {/* questions list */}
          <div
            className='w-2/5 h-full flex items-center justify-center flex-col'
          >
            <div
              className='flex flex-col h-4/5 scrollbar-hide gap-4 w-full overflow-y-scroll'
            >
              {
                questions.map((que, index) => (
                  <p
                    className={`${questionIndex + 1 === que.id ? "border-sky-500 " : "border-slate-100 dark:border-slate-950" } border-2 p-3 px-4 text-sm font-semibold rounded bg-slate-100 dark:bg-slate-950`}
                  >
                    Question {index + 1}
                  </p>
                ))
              }
            </div>
          </div>

      </div>

      {
        toggleWarningModal
        &&  <WarningModal
              setToggleWarningModal={setToggleWarningModal}
              title={"Are you sure you want to exit?"}
              content={"By exiting you will lose all your progress in this quiz"}
            />
      }
    </div>
  )
}

export default TopicsPage