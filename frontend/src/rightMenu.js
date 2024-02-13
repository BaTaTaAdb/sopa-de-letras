import React, { useContext } from "react";
import WordContext from './WordContext';

const RightMenu = () => {
    const { endGame } = useContext(WordContext);

    return <div>
        <button
            onClick={endGame}
            className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded"
        >
            End Game
        </button></div>
};

export default RightMenu;
