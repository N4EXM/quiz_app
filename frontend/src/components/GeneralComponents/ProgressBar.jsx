import React from 'react';

const ProgressBar = ({ progress, colour }) => {
    return (
        <div className="w-full rounded-full h-2.5 bg-slate-900">
            <div 
                className={`${colour === "green" && "bg-teal-500 dark:bg-teal-400"} ${colour === "red" && "bg-rose-500 dark:bg-rose-400"} ${colour === "orange" && "bg-amber-500 dark:bg-amber-400"} ${colour === "blue" && "bg-sky-500"} h-2 rounded-full`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;