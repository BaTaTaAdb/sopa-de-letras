// TopBar.js
import React, { useState, useContext } from 'react';
import Timer from './Timer';
import HelpBox from './HelpBox';
import WordContext from './WordContext';
import AboutBox from './AboutBox';

const TopBar = () => {
    const [showHelp, setShowHelp] = useState(false);
    const { strickenWords } = useContext(WordContext);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div className="flex justify-between items-center bg-gray-800 p-2">

            <div className="text-white">
                Score: {strickenWords.length}/10
            </div>
            <Timer timeInSeconds={600} />
            <div className="flex"> {/* Container for buttons */}
                <button
                    onClick={() => setShowHelp(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Help
                </button>
                <button
                    onClick={() => setShowAbout(true)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    About
                </button>
            </div>
            {showHelp && <HelpBox onClose={() => setShowHelp(false)} />}
            {showAbout && <AboutBox onClose={() => setShowAbout(false)} />}
        </div>
    );
};

export default TopBar;