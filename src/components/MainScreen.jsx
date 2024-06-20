import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const MainScreen = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileError, setFileError] = useState(null);
  useEffect(() => {
    // Adding dummy data
    const dummyData = [
      {
        name: "Company A",
        registration_date: "2023-01-01",
        registration_number: "123456",
        address: "123 Main St, City, Country",
        contact_person: "John Doe",
        number_of_employees: 50,
        contact_phone: "123-456-7890",
        email: "contact@companya.com"
      },
      {
        name: "Company B",
        registration_date: "2023-02-01",
        registration_number: "789012",
        address: "456 Elm St, City, Country",
        contact_person: "Jane Smith",
        number_of_employees: 150,
        contact_phone: "987-654-3210",
        email: "contact@companyb.com"
      }
    ];
    setCsvData(dummyData);
  }, []);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setCsvData(result.data);
          setFileError(null);
        },
        error: (error) => {
          setFileError(error.message);
        }
      });
    }
  };
//
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Talent Verify</h1>
        <form action="">
          <div className="mb-4">
            <label htmlFor="CSV" className="block text-sm font-medium text-gray-700 mb-2">CSV File</label>
            <input type="file" id="CSV" name="CSV" onChange={handleFileUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Upload</button>
        </form>
        {fileError && <p className="text-red-500 mb-4">{fileError}</p>}
        {csvData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Registration Date</th>
                  <th className="py-2 px-4 border-b">Registration Number</th>
                  <th className="py-2 px-4 border-b">Address</th>
                  <th className="py-2 px-4 border-b">Contact Person</th>
                  <th className="py-2 px-4 border-b">Number of Employees</th>
                  <th className="py-2 px-4 border-b">Contact Phone</th>
                  <th className="py-2 px-4 border-b">Email</th>
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{row.name}</td>
                    <td className="py-2 px-4 border-b">{row.registration_date}</td>
                    <td className="py-2 px-4 border-b">{row.registration_number}</td>
                    <td className="py-2 px-4 border-b">{row.address}</td>
                    <td className="py-2 px-4 border-b">{row.contact_person}</td>
                    <td className="py-2 px-4 border-b">{row.number_of_employees}</td>
                    <td className="py-2 px-4 border-b">{row.contact_phone}</td>
                    <td className="py-2 px-4 border-b">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
