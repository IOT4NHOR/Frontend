import React from 'react';
import Navbar from '../components/Navbar';
import { Maximize2, RefreshCw, Download, ExternalLink } from 'lucide-react';

function DashBoard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">SIT Floor 2 Dashboard</h1>
            <p className="text-gray-500 mt-1">Real-time IoT monitoring system</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 flex items-center">
              <RefreshCw size={16} className="mr-2" />
              Refresh
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:shadow-md transition duration-300 flex items-center">
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        
        {/* Main Overview Panel (Larger) */}
        <div className="mb-6">
          {/* panel Title หลัก */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600">
              <h3 className="font-semibold text-white text-lg">Main Overview</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-blue-500 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-blue-500 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-3">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=9&__feature.dashboardSceneSolo" 
                width="100%" 
                height="300" 
                className="rounded-lg"
                title="Main Overview"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Other Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* total in room */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600">
              <h3 className="font-semibold text-white">Total Room Occupancy</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-blue-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-blue-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746336060961&to=1746336196118&timezone=browser&panelId=10&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Total Room Occupancy"
              ></iframe>
            </div>
          </div>
          
          {/* table1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600">
              <h3 className="font-semibold text-white">table1</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-green-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-green-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=1&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 1"
              ></iframe>
            </div>
          </div>
          
          {/* table2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-amber-500 to-amber-600">
              <h3 className="font-semibold text-white">table2</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-amber-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-amber-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=2&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 2"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-red-500 to-red-600">
              <h3 className="font-semibold text-white">table3</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-red-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-red-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=7&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 3"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-sky-500 to-sky-600">
              <h3 className="font-semibold text-white">table4</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-sky-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-sky-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=6&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 4"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table5 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-purple-500 to-purple-600">
              <h3 className="font-semibold text-white">table5</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-purple-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-purple-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=5&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 5"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table6 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-emerald-500 to-emerald-600">
              <h3 className="font-semibold text-white">table6</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-emerald-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-emerald-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=4&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 6"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table7 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-cyan-500 to-cyan-600">
              <h3 className="font-semibold text-white">table7</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-cyan-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-cyan-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=3&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 7"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* table8 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-indigo-600">
              <h3 className="font-semibold text-white">table8</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-indigo-400 rounded text-white">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1 hover:bg-indigo-400 rounded text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <iframe 
                src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=8&__feature.dashboardSceneSolo" 
                width="100%" 
                height="200" 
                className="rounded-lg"
                title="Table 8"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 mt-6 py-4">
        <div className="container mx-auto px-4 text-center text-white text-sm">
          <p>© 2025 SIT IoT Monitoring System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;