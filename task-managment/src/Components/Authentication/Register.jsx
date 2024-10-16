import React from 'react'
import { useState } from 'react'
import { url } from '../Services/ApiEndPoint'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        full_name: '',
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(url.registerApi, registerData)
            .then((res) => {
                setRegisterData({ full_name: '', email: '', password: '' })
                toast.success('Registered successfully!');
                navigate('/login')
            })
            .catch((res) => {
                toast.error(res?.response.data.message, { duration: 2000 })
            })
    }

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
                <div className='bg-white border-2 flex justify-center lg:w-6/12 md:7/12 w-8/12  rounded-xl  py-8 px-4 shadow-2xl'>
                    <section className="flex w-[30rem] flex-col space-y-5">
                        <div className="text-center text-4xl font-medium">Register</div>

                        <div className="relative mt-6">
                        <label
                                for="full_name"
                                className=" text-base text-gray-800 opacity-75"
                            >
                                Full Name
                            </label>

                            <input
                                id='full_name'
                                name='full_name'
                                type="full_name"
                                value={registerData.full_name}
                                onChange={handleInputChange}

                                className="bg-white w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none "
                                autoComplete="off"
                            />

                        </div>

                        <div className="relative mt-6">
                            <label
                                for="email"
                                className=" text-base text-gray-800 opacity-75"
                            >
                                Email Address
                            </label>

                            <input
                                id='email'
                                name='email'
                                type="email"
                                value={registerData.email}
                                onChange={handleInputChange}
                                
                                className="bg-white w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />

                        </div>

                        <div className="relative mt-6">
                        <label
                                for="password"
                                className=" text-base text-gray-800 opacity-75"
                            >
                                Password
                            </label>


                            <input
                                id='password'
                                name='password'
                                type={showPassword ? "text" : "password"}
                                value={registerData.password}
                                onChange={handleInputChange}
                                
                                className="bg-white w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />



                            <div className="absolute inset-y-1 right-0 top-5 bottom-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            onClick={onSubmit}
                        >
                            Register
                        </button>

                        <p className="text-center text-base">
                            Already have an Account?
                            <Link
                                to='/login'
                                className="font-medium text-blue-700 underline-offset-4 hover:underline ml-2 text-base"
                            >
                                Login
                            </Link>
                        </p>
                    </section>
                </div>
            </div>






        </>
    )
}

export default Register