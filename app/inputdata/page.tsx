'use client';
// pages/input.tsx
import { useState } from 'react';
 // Ensure this path is correct and the Layout component exists
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const InputPage: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [midTermMarks, setMidTermMarks] = useState('');
  const [endTermMarks, setEndTermMarks] = useState('');
  const [internalMarks, setInternalMarks] = useState('');
  const [projectReview, setProjectReview] = useState('');
  const [classBehavior, setClassBehavior] = useState('');
  const [dataList, setDataList] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newData = {
      studentName,
      regNumber,
      midTermMarks,
      endTermMarks,
      internalMarks,
      projectReview,
      classBehavior,
    };
    setDataList([...dataList, newData]);
    clearForm();
  };

  const clearForm = () => {
    setStudentName('');
    setRegNumber('');
    setMidTermMarks('');
    setEndTermMarks('');
    setInternalMarks('');
    setProjectReview('');
    setClassBehavior('');
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Student Data', 20, 20);
    
    dataList.forEach((data, index) => {
      doc.text(`Entry ${index + 1}:`, 20, 30 + index * 40);
      doc.text(`Name: ${data.studentName}`, 20, 35 + index * 40);
      doc.text(`Reg Number: ${data.regNumber}`, 20, 40 + index * 40);
      doc.text(`Mid Term Marks: ${data.midTermMarks}`, 20, 45 + index * 40);
      doc.text(`End Term Marks: ${data.endTermMarks}`, 20, 50 + index * 40);
      doc.text(`Internal Marks: ${data.internalMarks}`, 20, 55 + index * 40);
      doc.text(`Project Review: ${data.projectReview}`, 20, 60 + index * 40);
      doc.text(`Class Behavior: ${data.classBehavior}`, 20, 65 + index * 40);
    });

    doc.save('student-data.pdf');
  };

  const generateTXTFile = () => {
    let txtContent = 'Student Data\n\n';
    
    dataList.forEach((data, index) => {
      txtContent += `Entry ${index + 1}:\n`;
      txtContent += `Name: ${data.studentName}\n`;
      txtContent += `Reg Number: ${data.regNumber}\n`;
      txtContent += `Mid Term Marks: ${data.midTermMarks}\n`;
      txtContent += `End Term Marks: ${data.endTermMarks}\n`;
      txtContent += `Internal Marks: ${data.internalMarks}\n`;
      txtContent += `Project Review: ${data.projectReview}\n`;
      txtContent += `Class Behavior: ${data.classBehavior}\n\n`;
    });

    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'student-data.txt');
  };

  return (
    
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center mb-5">Student Data Input</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-5 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Student Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Registration Number</label>
            <input
              type="text"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mid Term Marks</label>
            <input
              type="number"
              value={midTermMarks}
              onChange={(e) => setMidTermMarks(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Term Marks</label>
            <input
              type="number"
              value={endTermMarks}
              onChange={(e) => setEndTermMarks(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Internal Marks</label>
            <input
              type="number"
              value={internalMarks}
              onChange={(e) => setInternalMarks(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Project Review</label>
            <textarea
              value={projectReview}
              onChange={(e) => setProjectReview(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Class Behavior</label>
            <textarea
              value={classBehavior}
              onChange={(e) => setClassBehavior(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>

        {/* Buttons to generate PDF and TXT */}
        {dataList.length > 0 && (
          <>
            <button 
              onClick={generatePDF} 
              className="mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            >
              Generate PDF
            </button>
            <button 
              onClick={generateTXTFile} 
              className="mt-5 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Generate TXT File
            </button>
          </>
        )}

        {/* Display submitted data */}
        {dataList.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold">Submitted Data:</h2>
            {dataList.map((data, index) => (
              <div key={index} className="border p-3 mb-2 bg-white shadow-sm">
                <p><strong>Name:</strong> {data.studentName}</p>
                <p><strong>Reg Number:</strong> {data.regNumber}</p>
                <p><strong>Mid Term Marks:</strong> {data.midTermMarks}</p>
                <p><strong>End Term Marks:</strong> {data.endTermMarks}</p>
                <p><strong>Internal Marks:</strong> {data.internalMarks}</p>
                <p><strong>Project Review:</strong> {data.projectReview}</p>
                <p><strong>Class Behavior:</strong> {data.classBehavior}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    
  );
};

export default InputPage;