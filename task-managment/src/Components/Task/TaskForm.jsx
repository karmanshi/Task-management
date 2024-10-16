import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddButton from '../CommonComponent/AddButton';

const TaskForm = () => {
    const navigate = useNavigate();
    const [taskData, setTaskData] = useState({
        title: '',
        assignedTo: '',
        dueDate: '',
    });

    // Modal visibility state
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleCancel = () => {
        setTaskData({ title: '', assignedTo: '', dueDate: '' });
        navigate('/task');
    };

    // Function to open the modal
    const openModal = () => setIsOpen(true);

    // Function to close the modal
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* Button to open modal */}
            <AddButton buttonName = "Add Task Button"   onClick={openModal}/>
           
            {/* Modal structure */}
            {isOpen && (
                <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                        {/* Close modal button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 text-xl hover:text-gray-700"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Add New Task
                        </h2>
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="title">
                                    Task Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={taskData.title}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    placeholder="Enter task title"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="assignedTo">
                                    Assign Task To
                                </label>
                                <input
                                    type="text"
                                    id="assignedTo"
                                    name="assignedTo"
                                    value={taskData.assignedTo}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    placeholder="Enter assignee's name"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="dueDate">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    id="dueDate"
                                    name="dueDate"
                                    value={taskData.dueDate}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
                                >
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskForm;
