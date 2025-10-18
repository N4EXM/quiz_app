// StatisticsCard.jsx
import React from 'react'

const StatisticsCard = ({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
}) => {
  return (
    <div
      className="w-full h-full bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4 dark:bg-slate-950 dark:shadow-gray-800"
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd
      }}
    >
      statistics
    </div>
  )
}

export default StatisticsCard