// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const DeleteData = ({ IndividualDeleteProject }) => {
//   const navigate = useNavigate()
//   const handleCancel = () => {
//     navigate('/project')
//   };


//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
//             Are you sure you want to Delete?
//           </h2>

//           <div className="flex justify-between">
//             <button
//               onClick={handleCancel}
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
//             >
//               Cancel
//             </button>

//             <button

//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               onClick={IndividualDeleteProject}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default DeleteData


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddButton from '../CommonComponent/AddButton';

const DeleteData = ({IndividualDeleteProject}) => {
  const navigate = useNavigate();


  // Modal visibility state
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  const handleCancel = () => {
    navigate('/project')
  };

  return (
    <>
      {/* Button to open modal */}
      <AddButton buttonName="Add Task Button" onClick={openModal} />

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
            
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Are you sure you want to Delete?
              </h2>

              <div className="flex justify-between">
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>

                <button

                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={IndividualDeleteProject}
                >
                  Delete
                </button>
              </div>
           


          </div>
        </div>
      )}
    </>
  );
};

export default DeleteData