import React, { useState } from 'react';

const Card = () => {
  const [status, setStatus] = useState('In Progress'); // Default status
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  const handleOptionChange = (newStatus) => {
    setStatus(newStatus); // Update the status
    setIsOpen(false); // Close the dropdown after selection
  };

  const getStatusColor = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-pink-500'; // Pink background
      case 'Completed':
        return 'bg-blue-500'; // Black background
      case 'Closed':
        return 'bg-green-500'; // Green background
      case 'Pending':
        return 'bg-yellow-500'; // Yellow background
      default:
        return '';
    }
  };

  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col space-y-4">
        {/* Top Section: Task Info */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">Task Title</h3>
            <p className="text-sm text-gray-500">Due: Sep 30, 2024</p>
          </div>
          {/* Status Dropdown */}
          <div className="relative w-32">
            <input
              type="checkbox"
              id="dropdown-toggle"
              className="hidden peer"
              checked={isOpen}
              readOnly
            />
            <label
              htmlFor="dropdown-toggle"
              className={`flex items-center justify-between w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer ${getStatusColor()} text-white whitespace-nowrap`} // Added whitespace-nowrap
              onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown
            >
              {status} {/* Display the current status */}
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </label>
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="py-2">
                  <label className="flex items-center px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="In Progress"
                      className="hidden peer"
                      checked={status === 'In Progress'}
                      onChange={() => handleOptionChange('In Progress')}
                    />
                    <span className="w-4 h-4 mr-2 rounded-full bg-pink-500 peer-checked:bg-pink-700"></span>
                    <span className="text-sm">In Progress</span>
                  </label>
                  <label className="flex items-center px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="Completed"
                      className="hidden peer"
                      checked={status === 'Completed'}
                      onChange={() => handleOptionChange('Completed')}
                    />
                    <span className="w-4 h-4 mr-2 rounded-full bg-blue-500 peer-checked:bg-black"></span>
                    <span className="text-sm text-black">Completed</span>
                  </label>
                  <label className="flex items-center px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="Closed"
                      className="hidden peer"
                      checked={status === 'Closed'}
                      onChange={() => handleOptionChange('Closed')}
                    />
                    <span className="w-4 h-4 mr-2 rounded-full bg-green-500 peer-checked:bg-green-700"></span>
                    <span className="text-sm">Closed</span>
                  </label>
                  <label className="flex items-center px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="Pending"
                      className="hidden peer"
                      checked={status === 'Pending'}
                      onChange={() => handleOptionChange('Pending')}
                    />
                    <span className="w-4 h-4 mr-2 rounded-full bg-yellow-500 peer-checked:bg-yellow-600"></span>
                    <span className="text-sm">Pending</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Bottom Section: Task Controls */}
        <div className="flex justify-between items-center">
          {/* Avatars for assignees (or placeholder) */}
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://via.placeholder.com/32"
              alt="User 1"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://via.placeholder.com/32"
              alt="User 2"
            />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm">
              +2
            </span>
          </div>
          {/* Action buttons */}
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-600 transition">
              View
            </button>
            <button className="bg-gray-100 text-gray-600 text-sm px-3 py-2 rounded-md hover:bg-gray-200 transition">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
