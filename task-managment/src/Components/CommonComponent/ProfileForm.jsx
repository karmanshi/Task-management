import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../Services/ApiEndPoint'; // Update with your actual API endpoint
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        phone: '',
        bio: '',
    });
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Fetch user profile data
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
                    }
                };
                const response = await axios.get(url.getUserProfileApi, config); // Update with your GET endpoint
                setProfileData(response.data); // Update this based on your API response structure
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                toast.error('Failed to fetch profile data');
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    };

    const handleCancel = () => {
        // Reset form to initial profile data
        setProfileData({
            fullName: '',
            email: '',
            phone: '',
            bio: '',
        });
        navigate('/dashboard')
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-sm"> {/* Adjusted width */}
                <h1 className="text-2xl font-bold text-center mb-4">Profile Page</h1> {/* Adjusted title size */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                            Bio
                        </label>
                        <textarea
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us about yourself"
                            rows="4"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Updating...' : 'Update Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
