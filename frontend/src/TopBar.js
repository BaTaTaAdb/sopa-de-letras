// TopBar.js
import { React, useContext } from 'react';
import Timer from './Timer';
import WordContext from './WordContext';


const TopBar = () => {
    const { strickenWords } = useContext(WordContext);
    return (
        <div className="flex justify-between items-center bg-gray-800 p-2">
            {/* Score Number */}
            <div className="text-white">
                Score: {strickenWords.length}/10
            </div>

            {/* Timer and Bar */}
            <Timer timeInSeconds={600} />
            <div></div>
        </div>
    );
};

export default TopBar;
