import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const GraphCard = ({
    colStart,
    colEnd,
    rowStart,
    rowEnd,
}) => {

    const performanceData = [
        { week: 'W1', score: 45, avgTime: 45 },
        { week: 'W2', score: 32, avgTime: 42 },
        { week: 'W3', score: 28, avgTime: 38 },
        { week: 'W4', score: 12, avgTime: 35 },
        { week: 'W5', score: 16, avgTime: 32 },
        { week: 'W6', score: 20, avgTime: 30 },
    ];

    const CustomTooltipWithTheme = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-3 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1 flex-row flex gap-2">
                <svg className='text-slate-600 dark:text-sky-500' xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M15 12h2v5h-2zM11 7h2v10h-2zM7 10h2v7H7z"></path><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5z"></path></svg>
                {label}
            </p>
            <div className="space-y-2">
                {payload.map((entry, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                    <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                        {entry.name}:
                    </span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {entry.value}
                        {entry.dataKey === 'avgTime' && 'min'}
                        {entry.dataKey === 'score' && '%'}
                    </span>
                </div>
                ))}
            </div>
            </div>
        );
        }
        return null;
    };

    return (
        <div
            className="w-full h-full bg-slate-100 shadow-sm shadow-slate-400 rounded-sm p-4 gap-2 flex flex-col dark:bg-slate-950 dark:shadow-none"
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd
            }}
        >
            <h1
                className='font-semibold text-xl px-1'
            >
                Weekly performance
            </h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={performanceData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: -10,
                        bottom: 5,
                    }}
                >   
                    <CartesianGrid  
                        strokeDasharray="3 3" 
                        stroke="currentColor"
                        // strokeOpacity={0.15}
                        className="text-slate-300 dark:text-slate-700"
                    />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip content={CustomTooltipWithTheme}/>
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        name="Score (%)"
                    />
                    <Line
                        type="monotone"
                        dataKey="avgTime"  // Fixed: was "avg time" but data key is "avgTime"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        name="Avg Time (min)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphCard 