
// AboutBox.js
import React from 'react';

const AboutBox = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            {/* Adjusted width to be 80% of the viewport width and height to be 80% of the viewport height for larger display */}
            <div className="bg-white p-4 rounded-lg shadow-lg relative mx-4" style={{ maxWidth: '80vw', width: '80%', maxHeight: '80vh', overflowY: 'auto' }}> 
                        <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 hover:text-gray-900"
        >
                &#x2715; {/* Cross symbol */}
                </button>
                <h2 className="text-lg font-bold mb-2">About</h2>
                <div className='space-y-4'>
                <p className="text-justify">
                Our word search app represents the culmination of our enthusiasm and efforts in exploring game development for web applications. A word search game emerged as the ideal candidate for this exploration due to its simplicity and wide appeal.
                </p>
                <p className="text-justify">
                The project commenced with a division of labor, segregating tasks between backend and frontend development. We opted for Flask as the API to facilitate communication between the Python-powered backend and the React-based frontend. This choice was instrumental in ensuring a seamless interaction between the two components of our application.
                </p>

                <p className="text-justify">
                One of the pivotal moments in our development journey was the design phase, where numerous game design approaches were deliberated. After a thorough examination and discarding of several strategies, we settled on a functional and straightforward method for placing words on the grid. This method was not only tailored specifically for our application but was also designed with future enhancements and improvements in mind.
                </p>
                <p className="text-justify">
                As we advanced, our focus shifted toward refining the aesthetics of the frontend. This phase was crucial in defining the visual appeal of our game and ensuring a user-friendly experience. The culmination of our project was marked by the creation of the website that hosts our application, representing the final piece of our development puzzle.
                </p>
                <p className="text-justify">
                Throughout the development process, we made several decisions that shaped the direction and outcome of our project. Each decision, from the choice of technologies to the design considerations, was made with the objective of creating a fun, engaging, and accessible word search game. Our journey from conception to completion was a testament to our dedication and passion for game development, and we are proud to present our word search app as the fruit of our labor.
                </p>
                <p className="text-justify">
                    Credits:
                </p>
                <p className="text-justify">
                    Frontend made by João Nuno and Backend made by Pedro Elias.
                </p>
                <p className="text-justify">
                    Hosted by Github.
                </p>

                </div>
            </div>
        </div>
    );
};

export default AboutBox;