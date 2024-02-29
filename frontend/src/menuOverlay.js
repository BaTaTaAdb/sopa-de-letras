import { Fragment, useContext, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CustomTime from "./CustomTime"
import WordContext from './WordContext';


const MenuOverlay = () => {
    const [open, setOpen] = useState(true);
    const { startGame, setTime, showingMainMenu, showMainMenu, loadNewBoard } = useContext(WordContext);

    useEffect(() => {
        // Open the dialog when game ends
        if (showingMainMenu) {
            setOpen(true);
            showMainMenu(false);
            setTime(5 * 60);
        }
    }, [showingMainMenu, showMainMenu, setTime]);

    const startNewGame = () => {
        console.log('Starting new game...');
        startGame();
        setOpen(false);
        loadNewBoard();
    }

   

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="flex z-10" onClose={startNewGame}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

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
                                    <div className="mt-2 space-y-4 py-8">
                                        {/* Timer buttons */}
                                        <div className="grid grid-flow-col gap-2">
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 3 minutes'); setTime(5 * 60) }}
                                            >
                                                5min
                                            </button>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 5 minutes'); setTime(10 * 60) }}
                                            >
                                                10min
                                            </button>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 10 minutes'); setTime(15 * 60) }}
                                            >
                                                15min
                                            </button>
                                            <CustomTime />
                                        </div>

                                        <div className='grid grid-flow-col gap-2'>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={startNewGame}
                                            >
                                                Start
                                            </button>
                                            
                                        </div>
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

export default MenuOverlay;
