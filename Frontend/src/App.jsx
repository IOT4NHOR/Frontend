import{ useState } from "react";
import "./App.css";
import data from "../../Backend/mockdata"; // Mock data import

function App() {
  const [tableData, setTableData] = useState(data);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        ห้องที่ {tableData.room}
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="card">
          {/* Table and Chairs Visualization */}
          <div className="grid-container ">
            {/* Chairs */}
            <div className={`chair top ${tableData.chairs[0]?.occupied ? "occupied" : "occupied-false"}`}>
              {tableData.chairs[0]?.id || ""}
            </div>
            <div className={`chair left ${tableData.chairs[1]?.occupied ? "occupied" : "occupied-false"}`}>
              {tableData.chairs[1]?.id || ""}
            </div>
            <div className="table">
              โต๊ะ 1
            </div>
            <div className={`chair right ${tableData.chairs[2]?.occupied ? "occupied" : "occupied-false"}`}>
              {tableData.chairs[2]?.id || ""}
            </div>
            <div className={`chair bottom ${tableData.chairs[3]?.occupied ? "occupied" : "occupied-false"}`}>
              {tableData.chairs[3]?.id || ""}
            </div>
          </div>

          {/* Status */}
          <p className="status">
            จำนวนคนที่นั่ง: <span>{tableData.chairs.filter(chair => chair.occupied).length}</span> / {tableData.chairs.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;