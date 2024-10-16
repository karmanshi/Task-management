import React from "react";
export const TableComponent = ({ columns, data, actions,selectedRows,handleSelectAll,handleRowSelect }) => {
  return (
    <div className="w-full overflow-x-auto  ">
     
      <table className="min-w-[inherit] w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="w-full bg-gray-100 border-b-2 border-gray-200">
          <tr >
            {/* Checkbox for select all */}
            <th className="p-4 text-sm font-semobold tracking-wide text-left">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={handleSelectAll}
                className="w-5 h-5 border-1 border-gray-700 roun+
ded focus:ring-0 focus:outline-none" // Add border size and color here
              />
            </th>
            {columns.map((column, index) => (
              <th key={index} className="text-left p-4 font-medium text-gray-600">
                {column.header}
              </th>
            ))}
            {actions && actions.length > 0 && (
              <th className="text-left p-4 font-medium text-gray-600">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {/* Checkbox for individual row selection */}
              <td className="p-4 text-sm">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                  className="w-5 h-5 border-2 border-gray-700 rounded focus:ring-0 focus:outline-none" // Add border size and color here
                />
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-4 text-sm">
                  {column.render
                    ? column.render(row[column.field], row) // Custom render if provided
                    : row[column.field]}
                </td>
              ))}
              {actions && actions.length > 0 && (
                <td className="p-4 flex space-x-4 text-sm">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className={`${action.className} hover:underline`}
                      onClick={() => action.onClick(row.id)}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
