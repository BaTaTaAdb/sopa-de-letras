import React, { useContext, useEffect } from "react";
import WordContext from './WordContext';

const Timer = ({ timeInSeconds }) => {
    const { endGame, setTime, time, gameStarted } = useContext(WordContext);
    let interval;

    useEffect(() => {
        let interval;

        if (gameStarted) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        endGame();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [time, gameStarted, timeInSeconds, endGame, setTime]);



    useEffect(() => {
        if (time <= 0 && gameStarted) {
            clearInterval(interval);
            endGame();
        }
    }, [endGame, time, interval, gameStarted]);

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