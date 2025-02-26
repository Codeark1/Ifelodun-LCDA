"use client";

import { useParams } from "next/navigation";
import { departmentsData } from "../../../data/department";
import Link from "next/link";
import { useEffect, useState } from "react";

const DepartmentDetail = () => {
  const { slug } = useParams();
  const [department, setDepartment] = useState<any>(null);

  useEffect(() => {
    if (slug && departmentsData[slug as keyof typeof departmentsData]) {
      setDepartment(departmentsData[slug as keyof typeof departmentsData]);
    }
  }, [slug]);

  if (!department) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading department details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 text-sm mb-4">
        <Link href="/" className="hover:underline">Home</Link> /  
        <Link href="/departments" className="hover:underline"> Departments</Link> /  
        <span className="text-gray-900">{department.name}</span>
      </nav>

      {/* Department Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{department.name}</h1>
        <p className="text-gray-600 mt-2">{department.description}</p>
      </header>

      {/* Department Content */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Department Overview</h2>
        
        {/* Using dangerouslySetInnerHTML to render HTML content with Tailwind classes */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: department.content }}
        />
      </div>

      {/* Back to Departments Button */}
      <div className="mt-6">
        <Link href="/department">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Back to Departments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail;
