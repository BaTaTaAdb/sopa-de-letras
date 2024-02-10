
// AboutBox.js
import React from 'react';

const AboutBox = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md w-full mx-4"> 
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 hover:text-gray-900"
                >
                    &#x2715; {/* Cross symbol */}
                </button>
                <h2 className="text-lg font-bold mb-2">About</h2>
                <p className="text-justify">
                  This word search game is designed to provide fun and engaging puzzles. It started out by creating the API that would connect the backend with the frontend. Then, we developed the backend and frontend seperately, while comunicating and helping out each other implement new features. 
                </p>
            </div>
        </div>
    );
};

export default AboutBox;