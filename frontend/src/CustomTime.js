import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const CustomTimerPopup = () => {
    const [open, setOpen] = useState(false);
    const [minutes, setMinutes] = useState('');

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Custom time set to ${minutes} minutes.`);
        // Add your logic to handle the custom time here
        closeModal(); // Close the modal after submitting
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                className="px-2 py-1 bg-[#793FDF] text-white rounded hover:bg-[#B1B2FF] focus:outline-none focus:ring font-medium"
                onClick={openModal}
            >
                Set Custom Time
            </button>

            {/* Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Enter Custom Time
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit} className="mt-2">
                                        <input
                                            type="number"
                                            className="block border-0 px-2 mt-2 w-full ring-1 ring-inset ring-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder="Time in minutes"
                                            value={minutes}
                                            onChange={(e) => setMinutes(e.target.value)}
                                            min="1"
                                        />
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-[#793FDF] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                >
                                                    Set Time
                                                </button>
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default CustomTimerPopup;
