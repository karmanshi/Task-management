import React from 'react';
import Card from '../CommonComponent/Card';
import TaskForm from './TaskForm';

const AddTask = () => {
    return (
        <div className='w-full h-auto p-4'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0'>
                <div className='text-gray-700 text-lg font-semibold'>
                    Task
                </div>

                {/* TaskForm should align better on small screens */}
                <div className='w-full md:w-auto'>
                    <TaskForm />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-10'>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default AddTask;
