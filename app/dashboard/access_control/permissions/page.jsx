const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Access Control - Permissions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Roles</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">• Admin</li>
              <li className="text-gray-600">• Editor</li>
              <li className="text-gray-600">• Viewer</li>
            </ul>
          </section>
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Permissions</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">• Create</li>
              <li className="text-gray-600">• Update</li>
              <li className="text-gray-600">• Delete</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
