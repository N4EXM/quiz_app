import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import TopicsList from '../components/TopicsListComponents/TopicsList';


const TopicListPage = () => {

  const quizzes = [
    {
      id: 1,
      title: "Basic Arithmetic",
      topic: "Mathematics",
      desc: "Test your fundamental math skills with addition, subtraction, multiplication, and division problems.",
      difficulty: "Easy",
      completed: true
    },
    {
      id: 2,
      title: "Algebra Fundamentals",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false
    },
    {
      id: 3,
      title: "World Capitals",
      topic: "Geography",
      desc: "How well do you know the capital cities of countries around the world?",
      difficulty: "Med",
      completed: true
    },
    {
      id: 4,
      title: "Quantum Physics Basics",
      topic: "Science",
      desc: "Advanced concepts in quantum mechanics and particle physics for science enthusiasts.",
      difficulty: "Hard",
      completed: false
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      topic: "Programming",
      desc: "Test your knowledge of JavaScript basics including variables, functions, and data types.",
      difficulty: "Easy",
      completed: true
    },
    {
      id: 6,
      title: "Ancient Civilizations",
      topic: "History",
      desc: "Explore the mysteries of ancient Egypt, Greece, Rome, and Mesopotamia.",
      difficulty: "Med",
      completed: false
    },
    {
      id: 7,
      title: "Organic Chemistry",
      topic: "Science",
      desc: "Challenging questions about hydrocarbons, functional groups, and reaction mechanisms.",
      difficulty: "Hard",
      completed: false
    },
    {
      id: 8,
      title: "Grammar Essentials",
      topic: "English",
      desc: "Improve your writing with questions about punctuation, sentence structure, and common grammar rules.",
      difficulty: "Easy",
      completed: true
    },
    {
      id: 11,
      title: "Financial Literacy",
      topic: "Economics",
      desc: "Basic concepts in personal finance, investing, and economic principles.",
      difficulty: "Easy",
      completed: false
    },
    {
      id: 15,
      title: "Algebra Fundamentals 2",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false
    },
    {
      id: 16,
      title: "Algebra Fundamentals 3",
      topic: "Mathematics",
      desc: "Solve linear equations and work with variables in this introductory algebra quiz.",
      difficulty: "Med",
      completed: false
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

  const [topics] = useState(getAllTopics(quizzes))

  useEffect(() => {
    console.log(topics)
  }, [topics])

  return (
    <Layout>
      <div
        className='flex flex-col gap-4 w-full p-5 h-full overflow-y-scroll scrollbar-hide'
      >
        {
          topics
          ? topics.map((topic) => (
              <TopicsList
                key={topic}
                topicName={topic}
                quizTopicsList={getQuizzesByTopic(topic)}
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
    </Layout>
  )
}

export default TopicListPage