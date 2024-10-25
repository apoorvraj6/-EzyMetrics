import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';
import { jsPDF } from 'jspdf';

const Reports = () => {
  const generatePDFReport = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text('EzyMetrics Performance Report', 20, 20);
    
    // Add date
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
    
    // Add content sections
    doc.setFontSize(14);
    doc.text('Performance Metrics', 20, 50);
    doc.setFontSize(12);
    doc.text('Total Leads: 2,543', 30, 60);
    doc.text('Conversion Rate: 32.8%', 30, 70);
    doc.text('Average Deal Size: $8,450', 30, 80);
    doc.text('Monthly Revenue: $567,890', 30, 90);
    
    // Save the PDF
    doc.save('ezymetrics-report.pdf');
  };

  const generateCSV = () => {
    const csvContent = [
      ['Date', 'Leads', 'Conversion Rate', 'Revenue'],
      ['2024-03-01', '850', '31.5%', '$189,000'],
      ['2024-03-02', '920', '33.2%', '$195,500'],
      ['2024-03-03', '773', '32.8%', '$183,390']
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ezymetrics-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const recentReports = [
    {
      id: 1,
      name: 'Monthly Performance Summary',
      date: 'March 15, 2024',
      type: 'PDF'
    },
    {
      id: 2,
      name: 'Lead Analytics Report',
      date: 'March 10, 2024',
      type: 'PDF'
    },
    {
      id: 3,
      name: 'Q1 Revenue Analysis',
      date: 'March 5, 2024',
      type: 'PDF'
    },
    {
      id: 4,
      name: 'Customer Conversion Report',
      date: 'March 1, 2024',
      type: 'PDF'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Generate Reports</h2>
          <div className="space-y-4">
            <button
              onClick={generatePDFReport}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FileText className="w-5 h-5 mr-2 text-gray-500" />
              Generate PDF Report
            </button>
            <button
              onClick={generateCSV}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download className="w-5 h-5 mr-2 text-gray-500" />
              Export CSV Data
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Scheduled Reports</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium">Weekly Performance Report</p>
                  <p className="text-sm text-gray-500">Every Monday at 9:00 AM</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium">Monthly Analytics Summary</p>
                  <p className="text-sm text-gray-500">1st of every month</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <div className="space-y-4">
          {recentReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-gray-500">Generated on {report.date}</p>
                </div>
              </div>
              <button 
                onClick={generatePDFReport}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
              >
                <Download className="w-4 h-4 mr-1" />
                Download {report.type}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;