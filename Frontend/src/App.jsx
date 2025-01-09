import { useState } from "react";
import "./App.css";
import data from "../Backend/mockdata"; 

function App() {
  const [tableData] = useState(data);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
  <div className="left">
    {/* Logo here */}
    <div className="record-container">
      <div className="recording-circle"></div>
      <div className="recording-text">Recording</div>
    </div>
  </div>
  <div className="middle">
    {/* Date info here */}
    ห้องที่ {tableData.room}
    <li>
      <div>
        
        </div>วันที่ {tableData.day} เดือน {tableData.month} ปี {tableData.year}

</li>
  </div>
  <div className="right">
    {/* Hamburger Menu */}
    <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </div>

    {/* Dropdown Menu */}
    {menuOpen && (
      <div className="menu-dropdown">
        <ul>
          <li >Room 1</li>
          <li >Room 2</li>
          <li >Room 3</li>
        </ul>
      </div>
    )}
  </div>
</nav>


      {/* Main Content */}
      <div className="grid-container"> 
        {/* Chairs */}
        <div
          className={`chair top ${
            tableData.chairs[0]?.occupied ? "occupied" : "occupied-false"
          }`}
        >
           {tableData.chairs[0]?.id || ""}
        </div>
        <div
          className={`chair left ${
            tableData.chairs[1]?.occupied ? "occupied" : "occupied-false"
          }`}
        >
          {tableData.chairs[1]?.id || ""}
        </div>
        <div className="table">โต๊ะ 1
        <p className="status-in">
        จำนวนคนที่นั่ง:{" "}
        <span>
          {tableData.chairs.filter((chair) => chair.occupied).length}
        </span>{" "}
        / {tableData.chairs.length}
      </p>
      <p className="status-in">ของที่วาง </p>
        </div>
        <div
          className={`chair right ${
            tableData.chairs[2]?.occupied ? "occupied" : "occupied-false"
          }`}
        >
          {tableData.chairs[2]?.id || ""}
        </div>
        <div
          className={`chair bottom ${
            tableData.chairs[3]?.occupied ? "occupied" : "occupied-false"
          }`}
        >
          {tableData.chairs[3]?.id || ""}
        </div>
      </div>

      {/* Status */}
      <p className="status-out">
        อัพเดทล่าสุด ณ เวลา : 
        <span>
          {tableData.chairs.filter((chair) => chair.occupied).length}
        </span>{" "}
        / {tableData.chairs.length}
      </p>
    </div>
  );
}

export default App;
