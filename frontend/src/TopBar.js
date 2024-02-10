// TopBar.js
import React, { useState } from 'react';
import Timer from './Timer';
import HelpBox from './HelpBox';

const TopBar = () => {
    const [showHelp, setShowHelp] = useState(false);

    return (
        <div className="flex justify-between items-center bg-gray-800 p-2">
            <div className="text-white">
                Level: {/* Your level logic here */}
            </div>
            <Timer timeInSeconds={600} />
            <button
                onClick={() => setShowHelp(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Help
            </button>
            {showHelp && <HelpBox onClose={() => setShowHelp(false)} />}
        </div>
    );
};

export default TopBar;

