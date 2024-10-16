import React from 'react'
import {  NavLink } from 'react-router-dom'
import { data } from '../JSON/data'

const SidebarLiItem = () => {
    return (
        <>
              {data.map((ele)=>{return  <li>
                    <NavLink
                        to={ele.to}
                        className= {({ isActive }) =>
                            isActive
                              ? "flex items-center px-4 py-2 mt-2 text-gray-100 bg-gray-400 bg-opacity-25 rounded-2xl"
                              : "flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                          }
                          
                    >
                        
                        
                        <span className="flex ms-3 gap-2">{ele.icon} {ele.name}</span>
                    </NavLink>
                </li>})}

  
        </>
    )
}

export default SidebarLiItem
