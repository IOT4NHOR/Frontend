import  { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [tableData, setTableData] = useState({
    room: 1,
    year: "",
    day: "",
    month: "",
    people: 0,
    chairs: [],
  });
  const [currentTime, setCurrentTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDateTime = (dateTime) => {
    const [datePart] = dateTime.split("T");
    const [year, month, day] = datePart.split("-");
    return `วันที่ ${parseInt(day, 10)} เดือน ${parseInt(month, 10)} ปี ${year}`;
  };

  const formatTime = (dateTime) => {
    const [, timePart] = dateTime.split("T");
    const [hours, minutes, seconds] = timePart.split(":");
    return `${parseInt(hours, 10)}.${minutes}.${seconds.split(".")[0]}`;
  };

  const updateChairs = (people) => {
    const chairs = [
      { id: 1, occupied: false },
      { id: 2, occupied: false },
      { id: 3, occupied: false },
      { id: 4, occupied: false },
    ];

    return chairs.map((chair) =>
      chair.id <= people ? { ...chair, occupied: true } : { ...chair, occupied: false }
    );
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://iot4gler-iotsmartcam.scnd.space:3000/");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const updatedData = {
          room: 1,
          year: new Date(data[0]?.date_time).getFullYear(),
          month: new Date(data[0]?.date_time).getMonth() + 1,
          day: new Date(data[0]?.date_time).getDate(),
          people: data[0]?.people || 0,
          chairs: updateChairs(data[0]?.people || 0),
        };

        setTableData(updatedData);
        setCurrentTime(formatTime(data[0]?.date_time));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchUpdatedData = async () => {
      try {
        const response = await fetch("http://iot4gler-iotsmartcam.scnd.space:3000/");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        setTableData((prevState) => ({
          ...prevState,
          people: data[0]?.people || 0,
          chairs: updateChairs(data[0]?.people || 0),
        }));
        setCurrentTime(formatTime(data[0]?.date_time));
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    const interval = setInterval(() => {
      fetchUpdatedData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="left">
          <div className="record-container">
            <div className="recording-circle"></div>
            <div className="recording-text">Recording</div>
          </div>
        </div>
        <div className="middle">
          ห้องที่ {tableData.room}
          <li>{formatDateTime(`${tableData.year}-${tableData.month}-${tableData.day}`)}</li>
        </div>
        <div className="right">
          <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {menuOpen && (
            <div className="menu-dropdown">
              <ul>
                <li>Room 1</li>
                <li>Room 2</li>
                <li>Room 3</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="grid-container">
        {tableData.chairs.map((chair, index) => (
          <div
            key={index}
            className={`chair ${
              index === 0
                ? "top"
                : index === 1
                ? "left"
                : index === 2
                ? "right"
                : "bottom"
            } ${chair.occupied ? "occupied" : "occupied-false"}`}
          >
            {chair.id || ""}
          </div>
        ))}
        <div className="table">
          โต๊ะ 1
          <p className="status-in">
            จำนวนคนที่นั่ง: {" "}
            <span>{tableData.chairs.filter((chair) => chair.occupied).length}</span> / {" "}
            {tableData.chairs.length}
          </p>
          <p className="status-in">ของที่วาง </p>
        </div>
      </div>

      <p className="status-out">
        อัพเดทล่าสุด ณ เวลา: <span>{currentTime}</span>
      </p>
    </div>
  );
}

export default App;
