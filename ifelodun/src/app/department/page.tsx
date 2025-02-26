import { departmentsData } from "../../data/department";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700">Our Departments</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore the various departments within Ifelodun LCDA and their roles in governance and development.
        </p>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(departmentsData).map(([id, dept]) => (
            <a
              key={id}
              href={`/department/${id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-green-700">{dept.name}</h2>
              <p className="text-gray-600 mt-2">{dept.description}</p>
              <button className="mt-4 text-sm font-medium text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                View More
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
