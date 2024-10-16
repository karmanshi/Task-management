import React, { useState } from 'react';
import AddButton from '../CommonComponent/AddButton';
import { useNavigate } from 'react-router-dom';
import { url } from '../Services/ApiEndPoint';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProjectForm = () => {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({
        project_icon: null,
        project_name: '',
        description: '',
        website: '',
        active_status: ''
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({ ...projectData, [name]: value });
    };

    const handleCancel = () => {
        setProjectData({
            project_icon: null,
            project_name: '',
            description: '',
            website: '',
            active_status: true
        });
        navigate('/project');
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('project_icon', projectData.project_icon)
        formData.append('project_name', projectData.project_name)
        formData.append('description', projectData.description)
        formData.append('website', projectData.website)
        formData.append('active_status', projectData.active_status)

        const token = localStorage.getItem('authToken')
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        }
        axios.post(`${url.projectGetApi}`, projectData, config)
            .then(() => {
                toast.success("Project Added")
                navigate('/project')
            })
            .catch((error) => {
                toast.error('Error')
            })

    };

    return (
        <>
            <h2 className="text-gray-700 text-lg font-semibold mb-4 lg:mb-0">
                Add New Project
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-4">
                    <div className="bg-white py-6 px-0 w-full col-span-8">



                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="project_icon">
                                Project Icon
                            </label>
                            <input
                                type='file'
                                name='project_icon'
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                onChange={(e) => setProjectData({ ...projectData, project_icon: e.target.files[0] })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="project_name">
                                Project Title
                            </label>
                            <input
                                type="text"
                                name='project_name'
                                value={projectData.project_name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                placeholder="Enter Project title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="website">
                                Website
                            </label>
                            <input
                                type="text"
                                name='website'
                                value={projectData.website}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                placeholder="Enter Website name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={projectData.description}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Description"
                                rows="2"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="active_status">
                                Admin Status
                            </label>
                            <select
                                name='active_status'
                                value={projectData.active_status}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                required
                            >
                                <option value="" disabled>Select Admin Status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex flex-col col-span-4 py-12">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 font-bold text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
                        >
                            Add Project
                        </button>
                        <button
                            type="button"
                            className="mt-3 bg-gray-300 font-semibold text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                    </div>

                </div>
            </form>

        </>
    );
};

export default AddProjectForm;
