// TopBar.js
import React from 'react';
import Timer from './Timer';

const TopBar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-2">
            {/* Level Number */}
            <div className="text-white">
                Level: {/* Your level logic here */}
            </div>

            {/* Timer and Bar */}
            <Timer timeInSeconds={600} />
            <div></div>
        </div>
    );
};

export default TopBar;
