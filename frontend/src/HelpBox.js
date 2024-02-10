// HelpBox.js
import React from 'react';

const HelpBox = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 hover:text-gray-900"
                >
                    &#x2715; {/* Cross symbol */}
                </button>
                <h2 className="text-lg font-bold mb-2">Help</h2>
                <p>
                    Find all the hidden words in the grid. Words can be vertical, horizontal, or diagonal.
                </p>
            </div>
        </div>
    );
};

export default HelpBox;