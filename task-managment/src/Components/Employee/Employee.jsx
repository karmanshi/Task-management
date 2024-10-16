import React from 'react'
import { TableComponent } from '../CommonComponent/FullTable'

const Employee = () => {
  return (
   <>
   <div>
    <div className='flex-col justify-between items-center mb-4'>
        <div className='text-gray-700 text-lg font-semibold'>Employee List</div>

        <div className="flex flex-col gap-4 mt-8 items-center w-full h-full px-3 md:px-0">
          <div className="shadow-lg rounded-lg overflow-hidden mx-3 md:mx-4">
            <TableComponent/>
          </div>
        </div>

    </div>
   </div>
   
   </>
  )
}

export default Employee