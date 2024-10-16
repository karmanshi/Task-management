import toast from 'react-hot-toast'
export const ProjectColumn = [
  { header: 'Project Id', field: "id" },
  { header: 'Project Name', field: "project_name" },
  { header: 'Created By', field: "created_by_name" },
  { header: 'Created On', field: "created_on"},
  { header: 'Updated On', field: "updated_on" },
  {
    header: "Status",
    field: "active_status",
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
]

export const userActions = [
  {
    label: "Edit",
    className: "text-blue-500",
    onClick: (row) =>toast.success(`Editing ${row.fullName}`),
  },
  {
    label: "Delete",
    className: "text-red-500",
   
    onClick: (row) => toast.success(`Deleting ${row.fullName}`),
  },
];



export const EmployeeColumn = [
  { header: 'Employee Id', field: "id" },
  { header: 'Full Name', field: "project_name" },
  { header: 'Title', field: "created_by_name" },
  { header: 'Email', field: "created_on"},
  { header: 'Role', field: "updated_on" },
  {
    header: "Status",
    field: "active_status",
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
]


export const employeeActions = [
  {
    label: "Edit",
    className: "text-blue-500",
    onClick: (row) =>toast.success(`Editing ${row.fullName}`),
  },
  {
    label: "Delete",
    className: "text-red-500",
    onClick: (row) => toast.success(`Deleting ${row.fullName}`),
  },
];



























