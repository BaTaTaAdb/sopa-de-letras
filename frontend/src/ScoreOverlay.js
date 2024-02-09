import React from "react";
import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import WordContext from './WordContext';
import CustomTime from "./CustomTime";

// ! DEBUG MODE

const ScoreOverlay = () => {
    const [open, setOpen] = useState(true);
    const { startGame, setTime } = useContext(WordContext);

    let timeSelected = 3 * 60;

    // Dummy functions to handle button clicks
    const startNewGame = () => {
        console.log('Starting new game...');

        setTime(timeSelected);
        startGame();
        setOpen(false);
    }

    const loadLastGame = () => {
        console.log('Loading last game...');
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="flex z-10" onClose={setOpen}>
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
                                        Sopa de letras
                                    </Dialog.Title>
                                    <div className="mt-2 space-y-4 py-8">
                                        {/* Timer buttons */}
                                        <div className="grid grid-cols-4 gap-2">
                                            <button
                                                className="w-full flex justify-center rounded-md bg-indigo-500 border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 2 minutes'); timeSelected = 2 * 60 }}
                                            >
                                                2min
                                            </button>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 5 minutes'); timeSelected = 5 * 60 }}
                                            >
                                                5min
                                            </button>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => { console.log('Timer set to 10 minutes'); timeSelected = 10 * 60 }}
                                            >
                                                10min
                                            </button>
                                            <CustomTime></CustomTime>
                                        </div>

                                        <div className='grid grid-cols-2 gap-2'>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={startNewGame}
                                            >
                                                Iniciar novo jogo
                                            </button>
                                            <button
                                                className="w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={loadLastGame}
                                            >
                                                Carregar último jogo
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
export default ScoreOverlay;