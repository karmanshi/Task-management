import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here (e.g., API call to send reset link)
    console.log("Password reset link sent to:", email);
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Forgot Your Password?
        </h2>
        <p className="text-gray-900 text-center mt-5 mb-6">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-blue-500 hover:underline"
          >
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
