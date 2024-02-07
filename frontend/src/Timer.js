import React, { useContext, useEffect, useState } from "react";
import WordContext from './WordContext';

const Timer = ({ timeInSeconds }) => {
    const [time, setTime] = useState(timeInSeconds);
    const { endGame } = useContext(WordContext);
    let interval;

    useEffect(() => {
        // Interval should be set inside the effect
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval); // Clear interval when time is up
                    endGame(); // End the game when time reaches 0
                    return 0; // Set time to 0
                }
                return prevTime - 1; // Decrement time
            });
        }, 1000);
        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, [endGame]); // Empty dependency array means this runs once on mount


    useEffect(() => {
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        }
    }, [endGame, time, interval]);

    // Convert time to mm:ss format
    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Calculate the width for the progress bar
    const initialTime = timeInSeconds; // Set the initial time for the timer
    const widthPercentage = (time / initialTime) * 100;


    return (
        <div className="flex flex-col items-center">
            <div className="text-white">
                Timer: {formatTime()}
            </div>
            <div className="w-full bg-gray-700">
                <div className="bg-blue-500" style={{ width: `${widthPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default Timer;