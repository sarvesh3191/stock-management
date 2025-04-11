const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Access Control Roles</h1>
        <p className="text-gray-600 mb-6 text-center">
          Manage and assign roles to control access levels for different users in the system. Use this page to create, edit, or delete roles as needed.
        </p>
        <div className="mb-4 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add New Role
          </button>
        </div>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Role Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Admin</td>
              <td className="border border-gray-300 px-4 py-2">
                Full access to all features and settings.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Editor</td>
              <td className="border border-gray-300 px-4 py-2">
                Can edit content but cannot change settings.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Viewer</td>
              <td className="border border-gray-300 px-4 py-2">
                Can view content but cannot make changes.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
