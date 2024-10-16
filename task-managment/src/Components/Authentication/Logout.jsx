import { useNavigate } from "react-router-dom";

const LogoutForm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, e.g., clearing auth token
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleCancel = () => {
    // Navigate back or cancel the logout
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Are you sure you want to log out?
        </h2>

        <div className="flex justify-between">
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
