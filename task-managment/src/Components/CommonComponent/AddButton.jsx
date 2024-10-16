import React from 'react';


const AddButton = (props) => {
  return (
   
    
    <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-semibold px-4 py-3 rounded-md shadow hover:bg-blue-600 transition duration-200" onClick={props.onClick}> 
      <svg
        className="w-4 h-4 mr-2" // Icon size and margin
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H3a1 1 0 110-2h7V3a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    
      {props.buttonName}
    </button>
   
  );
};

export default AddButton;
