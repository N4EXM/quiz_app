import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import TopicsList from '../components/TopicsListComponents/TopicsList';
import SelectedTopicModal from '../components/TopicsListComponents/SelectedTopicModal';

const TopicListPage = () => {

  // toggles
  const [toggleSelectedTopicModal, setToggleSelectedTopicModal] = useState(false)

  // state
  const [selectedQuiz, setSelectedQuiz] = useState({})

  const quizzes = [
    {
      id: 1,
      title: "Basic Arithmetic",
      topic: "Mathematics",
      desc: "Test your fundamental math skills with addition, subtraction, multiplication, and division problems.",
      difficulty: "Easy",
      completed: true,
      queCount: 12
    },
    {
      id: 2,
      title: "Algebra Fundamentals",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false,
      queCount: 8
    },
    {
      id: 3,
      title: "World Capitals",
      topic: "Geography",
      desc: "How well do you know the capital cities of countries around the world?",
      difficulty: "Med",
      completed: true,
      queCount: 10
    },
    {
      id: 4,
      title: "Quantum Physics Basics",
      topic: "Science",
      desc: "Advanced concepts in quantum mechanics and particle physics for science enthusiasts.",
      difficulty: "Hard",
      completed: false,
      queCount: 10
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      topic: "Programming",
      desc: "Test your knowledge of JavaScript basics including variables, functions, and data types.",
      difficulty: "Easy",
      completed: true,
      queCount: 10
    },
    {
      id: 6,
      title: "Ancient Civilizations",
      topic: "History",
      desc: "Explore the mysteries of ancient Egypt, Greece, Rome, and Mesopotamia.",
      difficulty: "Med",
      completed: false,
      queCount: 5
    },
    {
      id: 7,
      title: "Organic Chemistry",
      topic: "Science",
      desc: "Challenging questions about hydrocarbons, functional groups, and reaction mechanisms.",
      difficulty: "Hard",
      completed: false,
      queCount: 15
    },
    {
      id: 8,
      title: "Grammar Essentials",
      topic: "English",
      desc: "Improve your writing with questions about punctuation, sentence structure, and common grammar rules.",
      difficulty: "Easy",
      completed: true,
      queCount: 12
    },
    {
      id: 11,
      title: "Financial Literacy",
      topic: "Economics",
      desc: "Basic concepts in personal finance, investing, and economic principles.",
      difficulty: "Easy",
      completed: false,
      queCount: 14
    },
    {
      id: 15,
      title: "Algebra Fundamentals 2",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false,
      queCount: 10
    },
    {
      id: 16,
      title: "Algebra Fundamentals 3",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false,
      queCount: 10
    },
  ];

  const getAllTopics = (quizzes) => {
    const topics = quizzes.map(quiz => quiz.topic);
    return [...new Set(topics)]; // Remove duplicates using Set
  };

  const getQuizzesByTopic = (topic) => {
    return quizzes.filter(quiz => 
      quiz.topic === topic
    );
  };

  const handleSelectedQuiz = (quiz, icon) => {

    const currentQuiz = {
      id: quiz.id,
      title: quiz.title,
      topic: quiz.topic,
      desc: quiz.desc,
      difficulty: quiz.difficulty,
      completed: quiz.completed,
      queCount: quiz.queCount,
      icon: icon
    }

    if (!toggleSelectedTopicModal) {
      setSelectedQuiz(currentQuiz)
      setToggleSelectedTopicModal(true)
    }
    else {
      setToggleSelectedTopicModal(false)
      setSelectedQuiz({})
    }

  }


  const [topics] = useState(getAllTopics(quizzes))

  useEffect(() => {
    console.log(selectedQuiz)
  }, [selectedQuiz])

  return (
    <Layout>
      <div
        className='flex flex-col gap-4 w-full p-5 h-full overflow-y-scroll scrollbar-hide relative'
      >
        {
          topics
          ? topics.map((topic) => (
              <TopicsList
                key={topic}
                topicName={topic}
                quizTopicsList={getQuizzesByTopic(topic)}
                handleSelectedQuiz={handleSelectedQuiz}
              />
            )) 
          : <div
              className='flex items-center justify-center w-full h-screen'
            >
              <h1
                className='text-xl font-semibold text-slate-800/50 dark:text-slate-300/50 '
              >
                An error has occured, Please reload the page
              </h1>
            </div>
          
        }
      </div>
      {
        toggleSelectedTopicModal
        &&  <SelectedTopicModal
              setToggleSelectedTopicModal={setToggleSelectedTopicModal}
              selectedQuiz={selectedQuiz}
            /> 
        
      }
      
    </Layout>
  )
}

export default TopicListPage