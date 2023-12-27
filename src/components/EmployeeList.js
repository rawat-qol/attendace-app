// EmployeeList.js

const EmployeeList = () => {

    // Dummy employee data
    const employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'UI/UX Designer' },
        { id: 3, name: 'Robert Johnson', position: 'Data Analyst' },
        { id: 4, name: 'Sandeep Keshwani', position: 'Senior Analyst' },
        { id: 5, name: 'Kumud Kundu', position: 'Junior Program' },
        { id: 6, name: 'Jake Brunt', position: 'Infra Engineer' },
        { id: 7, name: 'Agu Morission', position: 'HR Associate' },
        { id: 8, name: 'Tanka Yuko', position: 'Administration Associate' }
        // Add more employee data as needed
    ];

    return (
        <div className="flex items-center justify-center">
        <div className="max-w-4xl p-8">
            <h1 className="text-3xl font-bold mb-6">Employee List</h1>
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">ID</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Position</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-100">
                            <td className="py-3 px-4">{employee.id}</td>
                            <td className="py-3 px-4">{employee.name}</td>
                            <td className="py-3 px-4">{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default EmployeeList;