import React, { useState } from 'react'
import SmallTopicCard from './SmallTopicCard'

const SavedTopics = ({
    colStart,
    colEnd,
    rowStart,
    rowEnd,
}) => {

    
    const [savedTopics, setSavedTopics] = useState([
        {
            topicId: 0,
            title: "Circle properties",
            category: "Maths",
            difficulty: "Hard"
        },
        {
            topicId: 1,
            title: "The wool trade",
            category: "History",
            difficulty: "Med"
        },
        {
            topicId: 2,
            title: "Cells and respiration",
            category: "Science",
            difficulty: "Easy"
        },
        {
            topicId: 3,
            title: "Macbeth",
            category: "English",
            difficulty: "Easy"
        },
    ])

    return (
        <div
            className="w-full h-full bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4 dark:bg-slate-950 dark:shadow-none flex flex-col gap-4"
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd
            }}
        >
            <h1
                className='font-semibold text-lg'
            >   
                Saved Topics
            </h1>
            <div
                className='overflow-y-scroll flex flex-col gap-2 w-full h-68 scrollbar-hide'
            >
                {
                    savedTopics.map((topic) => (
                        <SmallTopicCard
                            key={topic.id}
                            title={topic.title}
                            category={topic.category}
                            difficulty={topic.difficulty}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default SavedTopics