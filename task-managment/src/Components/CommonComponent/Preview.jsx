import React from "react";
import { TableComponent } from "./FullTable";

const Preview = () => {
    
    const userData = [
        {
          fullName: "Codewave Asante",
          initials: "CA",
          title: "Administrator",
          email: "admin@gmail.com",
          role: "Admin",
          active: true,
        },
        {
          fullName: "John Doe",
          initials: "JD",
          title: "Software Engineer",
          email: "john.doe@example.com",
          role: "Developer",
          active: false,
        },
        // Other data...
    ];


    const userColumns = [
        {
          header: "Full Name",
          field: "fullName",
          render: (value, row) => (
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">
                {row.initials}
              </div>
              <span>{value}</span>
            </div>
          ),
        },
        { header: "Title", field: "title" },
        { header: "Email", field: "email" },
        { header: "Role", field: "role" },
        {
          header: "Status",
          field: "active",
          render: (active) => (
            <span
              className={`${
                active ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
              } px-2 py-1 rounded-full`}
            >
              {active ? "Active" : "Disabled"}
            </span>
          ),
        },
    ];
      
    const userActions = [
        {
          label: "Edit",
          className: "text-blue-500",
          onClick: (row) => alert(`Editing ${row.fullName}`),
        },
        {
          label: "Delete",
          className: "text-red-500",
          onClick: (row) => alert(`Deleting ${row.fullName}`),
        },
    ];
      
      
  return (
    <>
    <TableComponent columns={userColumns} data={userData} actions={userActions}/>
    </>
    
  )
}

export default Preview