import { Fragment, useContext, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import WordContext from './WordContext';

const ScoreOverlay = () => {
    const [open, setOpen] = useState(false);
    const { time, gameEnded, strickenWords, showMainMenu } = useContext(WordContext);

    const handleClose = () => {
        setOpen(!open);
        showMainMenu(true);
    }

    useEffect(() => {
        // Open the dialog when game ends
        if (gameEnded) {
            setOpen(true);
        }
    }, [gameEnded]); // Dependency array includes gameEnded

    // Function to format the remaining time
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="flex z-10" onClose={handleClose}>
                {/* Existing transition and layout code */}
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <Dialog.Title as="h3" className="text-4xl leading-6 font-semibold text-gray-900">
                                        Word Search
                                    </Dialog.Title>
                                    <div className="mt-2 space-y-4 py-2">
                                        {/* Timer and game buttons */}
                                        {/* ... original timer and game buttons code ... */}
                                    </div>
                                </div>

                                {/* Score Overview Section */}
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <h4 className="text-xl leading-6 font-medium text-gray-900">
                                        Score Overview
                                    </h4>
                                    <div className="mt-2">
                                        {/* Display remaining time */}
                                        <p>Time Left: {formatTime(time)}</p>
                                        {/* Placeholder for other score details */}
                                        <p>Score: {strickenWords.length}/10</p>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ScoreOverlay;
