import React from 'react'
import DashboardsMiniCards from './DashboardsMiniCards'

const Dashboard = () => {
  return (
    <div className='h-auto py-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        <DashboardsMiniCards />
      </div>

      <div className='w-full h-auto mt-4'>
        <div className='h-40 sm:h-56 md:h-64 lg:h-80 xl:h-96 bg-gray-100'>
        </div>
      </div>
    </div>

  )
}

export default Dashboard