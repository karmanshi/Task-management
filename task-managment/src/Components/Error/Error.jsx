import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError(); // This captures the error information
  const navigate = useNavigate();
  const handleGoBack = ()=>{
    navigate(-1)
  }

  return (
  
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 shadow-lg rounded-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">
          <b>The path you are trying to reach is not available.</b>
        </p>

        <div className="text-center text-6xl md:text-8xl font-extrabold text-gray-800 flex justify-center items-center space-x-4 mb-8">
          <span className="bg-gradient-to-r from-red-300 via-red-400 to-red-500 text-transparent bg-clip-text">4</span>
          <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-transparent bg-clip-text">0</span>
          <span className="bg-gradient-to-r from-red-300 via-red-400 to-red-500 text-transparent bg-clip-text">4</span>
        </div>

        <div>
        <button className=' inline-block px-6 py-3 text-sm uppercase tracking-wider bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300' onClick={handleGoBack}>Go back</button>
        
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
