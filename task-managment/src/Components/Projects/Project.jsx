import React, { useEffect, useState } from 'react'
import { url } from '../Services/ApiEndPoint'
import axios from 'axios'
import toast from 'react-hot-toast'
import { TableComponent } from '../CommonComponent/FullTable'
import { ProjectColumn } from '../JSON/TableHeadJSON'
import DeleteButton from '../CommonComponent/DeleteButton'
import SearchBox from '../CommonComponent/SearchBox'
import { useNavigate } from 'react-router-dom'
import AddButton from '../CommonComponent/AddButton'

const Project = () => {
  const navigate = useNavigate()
  const [projectData, setProjectData] = useState([])
  const [selectedRows, setSelectedRows] = useState([]);
  const [dataDeleted, setDataDeleted] = useState(false)

  const handleRowSelect = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === projectData.length) {
      setSelectedRows([]); // Deselect all
    } else {
      setSelectedRows(projectData.map((row) => row.id)); // Select all (assumes each row has a unique 'id')
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.get(url.projectGetApi, config)
      .then((res) => {
        const formattedProjects = res.data.results.map((project) => {
          return {
            ...project,
            created_on: new Date(project.created_on).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            updated_on: new Date(project.updated_on).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          };
        });
        setProjectData(formattedProjects);
      })
      .catch(() => {
        toast.error("Response Failed")
      })

  }, [dataDeleted])

  const userActions = [
    {
      label: "Edit",
      className: "text-blue-500",
      onClick: (id) => navigate(`/project/update/${id}`),
    },
    {
      label: "Delete",
      className: "text-red-500",
      onClick: (id) => handleDelete(id),
    },
  ];

  const handleDelete = (id) => {
    // Show confirmation popup
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    
    // If confirmed, proceed with deletion
    if (isConfirmed) {
      IndividualDeleteProject(id);
    }
  };

  const IndividualDeleteProject = (id) => {
    const token = localStorage.getItem('authToken')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.delete(`${url.projectIndividualDeleteApi}${id}/`, config)
      .then(() => {
        toast.success("Deleted Successfully")
        setDataDeleted(true)
      })
      .catch(() => {
        toast.error("Deletion Failed");
      })
  }

  const DeleteAllData = () => {
    const token = localStorage.getItem('authToken')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ids: selectedRows.join(','),  // Joining array to comma-separated string
      }
    }

    axios.delete(`${url.projectDeleteAllApi}`, config)
      .then(() => {
        toast.success("Deleted Successfully");
      })
      .catch(() => {
        toast.error("Deletion Failed")
      })
  }

  return (
    <div className="w-full h-auto py-4">
      <div className='flex flex-col lg:flex-row justify-between items-center mb-4 px-3 lg:px-0'>
        <div className='text-gray-700 text-lg font-semibold mb-4 lg:mb-0'>
          Project List
        </div>
        <div className='w-full lg:w-auto flex justify-end'>
          <AddButton  onClick={() => { navigate('/project/add') }} buttonName="Add Project"/>
        </div>
      </div>

      <div className='w-full flex flex-col lg:flex-row gap-4 items-center mt-2 px-3 lg:px-0'>
        <div className='w-full max-w-sm'>
          <SearchBox />
        </div>
        {selectedRows.length >= 1 && (
          <DeleteButton DeleteData={DeleteAllData} />
        )}
      </div>

      <div className="flex flex-col gap-4 mt-8 items-center w-full h-full px-3 lg:px-0">
        <div className="shadow-lg rounded-lg overflow-hidden w-full">
          <TableComponent
            columns={ProjectColumn}
            data={projectData}
            actions={userActions}
            handleSelectAll={handleSelectAll}
            handleRowSelect={handleRowSelect}
            selectedRows={selectedRows}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
