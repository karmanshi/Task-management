import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = (props) => {
    return (
        <>
            <button
                className="flex bg-red-500 shadow-md px-6 py-2 rounded-lg font-bold items-center text-white hover:bg-red-600 transition-colors"
            onClick={props.DeleteData}
            >
                <FontAwesomeIcon icon={faTimes} className="mr-1" />
                Delete
            </button>
            
        </>
    )
}

export default DeleteButton