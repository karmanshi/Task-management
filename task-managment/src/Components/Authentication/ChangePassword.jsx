import React from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../Services/ApiEndPoint';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');

        // Set the headers with the token if it exists
        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
            }
        };

        axios.post(url.updatePasswordApi, passwordData, config)
            .then((res) => {
                localStorage.getItem('authToken');
                setPasswordData({ email: '', password: '' });
                toast.success('Password Updated');
                navigate('/dashboard');
            })
            .catch((res) => {
                toast.error(res?.response.data.message);
            });
    };

    const handleCancel = () => {
        navigate('/dashboard'); // Navigate back to dashboard or any desired page
    };

    return (
        <>
            <div className="h-screen overflow-hidden flex items-center justify-center">
                <div className='bg-white border-2 flex justify-center lg:w-6/12 md:7/12 w-8/12  rounded-xl  py-2 px-4 shadow-2xl'>
                    <section className="flex w-[30rem] flex-col space-y-3 my-8 mx-0">
                        <div className="text-center text-4xl font-medium">Change Password</div>
                        <div className="relative mt-6">
                            <label
                                htmlFor="currentPassword"
                                className="text-base text-gray-500"
                            >
                                Current Password
                            </label>
                            <input
                                id='currentPassword'
                                name='currentPassword'
                                type={showPassword ? "text" : "password"}
                                value={passwordData.currentPassword}
                                onChange={handleInputChange}
                                placeholder="Current Password"
                                className="w-full border-b-2 border-gray-300 px-0 py-1 placeholder-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />
                            <div className="absolute inset-y-1 right-0 top-5 bottom-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <label
                                htmlFor="newPassword"
                                className="text-base text-gray-500"
                            >
                                New Password
                            </label>
                            <input
                                id='newPassword'
                                name='newPassword'
                                type={showPassword ? "text" : "password"}
                                value={passwordData.newPassword}
                                onChange={handleInputChange}
                                placeholder="New Password"
                                className="w-full border-b-2 border-gray-300 px-0 py-1 placeholder-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />
                            <div className="absolute inset-y-1 right-0 top-5 bottom-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-400 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-500 transition duration-150 ease-in-out"
                                onClick={handleCancel}  // Add the cancel handler
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
                                onClick={onSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
