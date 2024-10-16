import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../Services/ApiEndPoint'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(url.loginApi, loginData)
            .then((res) => {
                setLoginData({ email: '', password: '' })
                localStorage.setItem('authToken', res.data.access)
                toast.success('Login Sucessfully')
                navigate('/dashboard')
            })
            .catch((res) => {
                console.log(res)
                toast.error(res.response.data.detail)
            })
    }
    return (
        <>
            <div className="h-screen overflow-hidden flex items-center justify-center">
                <div className='bg-white border-2 flex justify-center lg:w-6/12 md:7/12 w-8/12  rounded-xl  py-8 px-4 shadow-2xl'>
                    <section className="flex w-[30rem] flex-col space-y-5 my-10 mx-0">
                        <div className="text-center text-4xl font-medium">Log In</div>

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
                                value={loginData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                className=" w-full border-b-2 border-gray-300 px-0 py-1 placeholder-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />

                        </div>

                        <div className="relative mt-6">
                            <label
                                for="password"
                                className="text-base text-gray-500"
                            >
                                Password
                            </label>
                            <input
                                id='password'
                                name='password'
                                type={showPassword ? "text" : "password"}
                                value={loginData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className=" w-full border-b-2 border-gray-300 px-0 py-1 placeholder-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="off"
                            />



                            <div className="absolute inset-y-1 right-0 top-5 bottom-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                            </div>
                        </div>
                        <Link
                            to='/forgetpassword'
                            className="text-right text-semibold text-blue-600 duration-300 hover:text-blue-700 text-xs "
                        >
                            FORGOT PASSWORD?
                        </Link>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            onClick={onSubmit}
                        >
                            LOG IN
                        </button>


                        <p className="mt-0 text-center text-base">
                            No account?
                            <Link
                                to='/register'
                                className="font-medium text-blue-700 underline-offset-4 hover:underline ml-2 text-base"
                            >
                                Register Here
                            </Link>
                        </p>
                    </section>
                </div>
            </div>


        </>
    )
}

export default Login