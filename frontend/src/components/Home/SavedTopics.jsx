import React from 'react'

const SavedTopics = ({
    colStart,
    colEnd,
    rowStart,
    rowEnd,
}) => {
    return (
        <div
            className="w-full h-full bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4 dark:bg-slate-950 dark:shadow-none"
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd
            }}
        >
            SavedTopics
        </div>
    )

}

export default SavedTopics