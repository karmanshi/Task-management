import axios from 'axios'
import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../Services/ApiEndPoint'
import toast from 'react-hot-toast'

const UpdateProject = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [updateData,setUpdateData] = useState({ })
    const [formData,setFormData] = useState({})
    const [selectedFile, setSelectedFile] = useState(null); // Store file separately

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            // Set the file in a separate state
            setSelectedFile(files[0]);
        } else {
            setUpdateData({ ...updateData, [name]: value });
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        axios.get(`${url.updateProjectGetApi}/${id} `,config)
        .then((response)=>{
            setUpdateData({...response.data})
            setFormData({...response.data})
        })
        .catch((error)=>{
            toast.error('Response Failed')
        })
    }, [])

    const handleUpdateData = (e) =>{
        e.preventDefault()
        const updatedProject = new FormData()
        // if (typeof updateData.project_icon !== 'string') {
        //     updatedProject.append('project_icon', updateData.project_icon); 
        // }

        if(updateData.project_name != formData.project_name){
            updatedProject.append('project_name',updateData.project_name)
        }
        if(updateData.website != formData.website){
            updatedProject.append('project_website', updateData.website)
        } 
        if(updateData.description != formData.description){
            updatedProject.append('project_description',updateData.description)
        }
        if(updateData.active_status != formData.active_status){
            updatedProject.append('admin_status',updateData.active_status)
        }

        if (selectedFile) {
            updatedProject.append('project_icon', selectedFile); // Append new image file
        }
        
        const token = localStorage.getItem('authToken')
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        }
        axios.patch(`${url.updateProjectGetApi}/${id}/`,updatedProject,config)
            .then(()=>{
                toast.success('Project Updated')
                navigate('/project')
            })
            .catch((error)=>{
                console.log(error)
                toast.error('Error')
            })
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <div className='text-gray-700 text-lg font-semibold mb-4 lg:mb-0'>
                {`Project List : ${id}`}
        </div>
                    <form >
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="project_icon">
                                Project Icon
                            </label>
                            <img src={updateData.project_icon}/>
                            <input
                                type='file'
                                name='project_icon'
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                               
                            />
                        </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="project_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    name="project_name"
                                    id="project_name"
                                    value={updateData.project_name}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Project Name"
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="website"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Website
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    value={updateData.website}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
            
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={updateData.description}
                                    onChange={handleInputChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    
                                />
                            </div>

                            <div className="mb-3">
                            <label className="block text-gray-700 mb-2" htmlFor="active_status">
                                Admin Status
                            </label>
                            <select
                                name='active_status'
                                value={updateData.active_status}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                <option value="" disabled>Select Admin Status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        </div>
                        <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 font-bold text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
                            onClick={handleUpdateData}
                        >
                            Update 
                        </button>

                        <button
                            type="submit"
                            className="mt-4 bg-gray-500 font-bold text-white py-3 px-6 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out"
                            onClick={()=> {navigate('/project')}}
                        >
                            Cancel 
                        </button>
                            
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default UpdateProject