// TopBar.js
import React from 'react';

const TopBar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-2">
            {/* Level Number */}
            <div className="text-white">
                Level: {/* Your level logic here */}
            </div>

            {/* Timer and Bar */}
            <div className="flex flex-col items-center">
                <div className="text-white">
                    Timer: 10:00
                </div>
                <div className="w-full bg-gray-700">
                    <div className="bg-blue-500" style={{ width: '50%' }}> {/* Dynamic width based on timer */}</div>
                </div>
            </div>

            {/* Login Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </div>
    );
};

export default TopBar;
