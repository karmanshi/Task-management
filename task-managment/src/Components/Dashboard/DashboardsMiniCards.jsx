import React from 'react'
import { DashboardIcon, TasksJSXicon } from '../JSON/JSXicon'

const DashboardsMiniCards = () => {
    return (
        <>
            <div className='w-full h-34 bg-white p-5 shadow-lg rounded-md flex item-center justify-between'>
                <div className='h-full flex flex-1 flex-col justify-between'>
                    <p className='text-base text-gray-600'>Total Task</p>
                    <div className='flex justify-between'>
                        <span className='text-2xl font-semibold'>9</span>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center bg-blue-700'>
                            <TasksJSXicon size='15' />
                        </div>
                    </div>
                    <span className='text-sm text-gray-400'>111 Last month</span>
                </div>
            </div>

            <div className='w-full h-34 bg-white p-5 shadow-lg rounded-md flex item-center justify-between'>
                <div className='h-full flex flex-1 flex-col justify-between'>
                    <p className='text-base text-gray-600'>Total Task</p>
                    <div className='flex justify-between'>
                        <span className='text-2xl font-semibold'>9</span>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center bg-blue-700'>
                            <TasksJSXicon size='15' />
                        </div>
                    </div>
                    <span className='text-sm text-gray-400'>111 Last month</span>
                </div>
            </div>

            <div className='w-full h-34 bg-white p-5 shadow-lg rounded-md flex item-center justify-between'>
                <div className='h-full flex flex-1 flex-col justify-between'>
                    <p className='text-base text-gray-600'>Total Task</p>
                    <div className='flex justify-between'>
                        <span className='text-2xl font-semibold'>9</span>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center bg-blue-700'>
                            <TasksJSXicon size='15' />
                        </div>
                    </div>
                    <span className='text-sm text-gray-400'>111 Last month</span>
                </div>
            </div>

            <div className='w-full h-34 bg-white p-5 shadow-lg rounded-md flex item-center justify-between'>
                <div className='h-full flex flex-1 flex-col justify-between'>
                    <p className='text-base text-gray-600'>Total Task</p>
                    <div className='flex justify-between'>
                        <span className='text-2xl font-semibold'>9</span>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center bg-blue-700'>
                            <TasksJSXicon size='15' />
                        </div>
                    </div>
                    <span className='text-sm text-gray-400'>111 Last month</span>
                </div>
            </div>


        </>

    )
}

export default DashboardsMiniCards