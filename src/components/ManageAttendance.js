// ManageAttendance.js

const ManageAttendance = () => {

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

    // Dummy attendance data (just for demonstration)
    const attendanceData = [
        { id: 1, daysPresent: 22, daysAbsent: 2 },
        { id: 2, daysPresent: 24, daysAbsent: 0 },
        { id: 3, daysPresent: 19, daysAbsent: 5 },
        { id: 4, daysPresent: 21, daysAbsent: 3 },
        { id: 5, daysPresent: 23, daysAbsent: 1 },
        { id: 6, daysPresent: 24, daysAbsent: 0 },
        { id: 7, daysPresent: 24, daysAbsent: 0 },
        { id: 8, daysPresent: 24, daysAbsent: 0 },

        // Add attendance data for the rest of the employees
    ];
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-4xl p-8">
                <h1 className="text-3xl font-bold mb-6">Attendance Table</h1>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Days Present</th>
                            <th className="py-3 px-4 text-left">Days Absent</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {employees.map((employee, index) => {
                            const attendance = attendanceData.find((item) => item.id === employee.id);
                            return (
                                <tr key={employee.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="py-3 px-4">{employee.id}</td>
                                    <td className="py-3 px-4">{employee.name}</td>
                                    <td className="py-3 px-4">{attendance ? attendance.daysPresent : '-'}</td>
                                    <td className="py-3 px-4">{attendance ? attendance.daysAbsent : '-'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAttendance;