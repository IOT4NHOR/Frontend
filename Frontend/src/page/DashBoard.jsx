import React from 'react';
import Navbar from '../components/Navbar';
import { Maximize2, RefreshCw, Download, ExternalLink } from 'lucide-react';
import logonav from "../assets/SIT30L.png";

function DashBoard() {
  return (
      <div className="min-h-screen bg-gray-100" style={{
        '--main-color': '#ecf0f1',
        '--point-color': 'black',
        '--size': '5px',
        '--card-bg': 'rgba(0, 0, 0, 0.1)',
        '--card-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        '--hover-shadow': '0 8px 40px rgba(0, 0, 0, 0.2)',
        '--transition-speed': '0.9s',
        '--glow-color': 'rgba(59, 130, 246, 0.5)'
      }}>
        <Navbar/>

        <div className="container mx-auto px-4 py-6">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">SIT Floor 2 Dashboard</h1>
              <p className="text-gray-500 mt-1">Real-time IoT monitoring system</p>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <button
                  className="px-4 py-2 bg-white text-gray-600 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 flex items-center">
                <RefreshCw size={16} className="mr-2"/>
                Refresh
              </button>
              <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:shadow-md transition duration-300 flex items-center">
                <Download size={16} className="mr-2"/>
                Export
              </button>
            </div>
          </div>

          {/* Main Overview and Total Room Occupancy */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Total Room Occupancy */}
            <div
                className="w-full lg:w-[20%] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">Total Room Occupancy</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <iframe
                    src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746336060961&to=1746336196118&timezone=browser&panelId=10&__feature.dashboardSceneSolo"
                    width="100%"
                    height="300"
                    className="rounded-lg"
                    title="Total Room Occupancy"
                ></iframe>
              </div>
            </div>

            {/* Main Overview Panel */}
            <div
                className="w-full lg:w-[80%] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white text-lg">Main Overview</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* table1 */}
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table1</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table2</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table3</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table4</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table5</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table6</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <iframe
                    src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=4&__feature.dashboardSceneSolo"
                    Bricks width="100%"
                    height="200"
                    className="rounded-lg"
                    title="Table 6"
                    frameBorder="0"
                ></iframe>
              </div>
            </div>

            {/* table7 */}
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table7</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <iframe
                    src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=3&__feature.dashboardSceneSolo"
                    src="https://iotfourdb.sit.kmutt.ac.th:3333/d-solo/aeku7hva3ypdsa/sit-2-floor?orgId=1&from=1746334979895&to=1746335110446&timezone=browser&panelId=8&__feature.dashboardSceneSolo"
                    width="100%"
                    height="200"
                    className="rounded-lg"
                    title="Table 8"></iframe>
              </div>
            </div>

            {/* table8 */}
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-[var(--hover-shadow)]">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-900">
                <h3 className="font-semibold text-white">table8</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <Maximize2 size={16}/>
                  </button>
                  <button className="p-1 hover:bg-[var(--glow-color)] rounded text-white">
                    <ExternalLink size={16}/>
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
        <footer className="w-full bg-gray-900 text-white p-8 text-center shadow-inner">
          <div className="flex justify-center mb-4">
            <img
                src={logonav}
                alt="SIT Logo"
                className="h-12 transition-opacity hover:opacity-80"
            />
          </div>
          <p className="mb-2 text-sm">School of Information Technology</p>
          <p className="mb-2 text-sm">
            King Mongkut's University of Technology Thonburi
          </p>
          <p className="mb-4 text-sm">
            Empowering Boundless Digital Transformation
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a
                href="tel:+6624709850"
                className="hover:text-blue-300 transition-colors"
            >
              +66 2470 9850
            </a>
            <a
                href="mailto:webadmin@sit.kmutt.ac.th"
                className="hover:text-blue-300 transition-colors"
            >
              webadmin@sit.kmutt.ac.th
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              SIT Family
            </a>
          </div>
        </footer>

      </div>
  );
}

export default DashBoard;