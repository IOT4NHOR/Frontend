import { useState, useEffect } from "react";
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
    return `วันที่ ${parseInt(day, 10)} เดือน ${parseInt(
      month,
      10
    )} ปี ${year}`;
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
      chair.id <= people
        ? { ...chair, occupied: true }
        : { ...chair, occupied: false }
    );
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://iot4gler-iotsmartcam.scnd.space:3000/"
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        // ค้นหาข้อมูลล่าสุด
        const latestData = data[data.length - 1];

        const updatedData = {
          room: 1,
          year: new Date(latestData?.date_time).getFullYear(),
          month: new Date(latestData?.date_time).getMonth() + 1,
          day: new Date(latestData?.date_time).getDate(),
          people: latestData?.people || 0,
          chairs: updateChairs(latestData?.people || 0),
          object: latestData?.object || [],
        };
        
        setTableData(updatedData);
        setCurrentTime(formatTime(latestData?.date_time));
        setError(null);

        // ดึง object ล่าสุด
        console.log("Latest Object:", latestData?.object || []);
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
        const response = await fetch(
          "http://iot4gler-iotsmartcam.scnd.space:3000/"
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
  
        // ตรวจสอบว่ามีข้อมูลหรือไม่
        if (data.length > 0) {
          const latestData = data[data.length - 1]; // ดึงข้อมูลล่าสุดจากรายการท้ายสุด
  
          setTableData((prevState) => ({
            ...prevState,
            people: latestData?.people || 0,
            chairs: updateChairs(latestData?.people || 0),
          }));
          setCurrentTime(formatTime(latestData?.date_time));
        } else {
          console.warn("No data received from API.");
        }
  
        setError(null); // ล้างข้อผิดพลาดถ้ามี
      } catch (err) {
        setError(err.message); // แสดงข้อผิดพลาด
      }
    };
  
    const interval = setInterval(() => {
      fetchUpdatedData(); // เรียกข้อมูลใหม่ทุก 5 วินาที
    }, 5000);
  
    return () => clearInterval(interval); // ลบ interval เมื่อ component ถูกทำลาย
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
          <li>
            {formatDateTime(
              `${tableData.year}-${tableData.month}-${tableData.day}`
            )}
          </li>
        </div>
        <div className="right">
          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
            } ${chair.occupied ? "occupied-false" : "occupied"}`}
          >
            {chair.id || ""}
          </div>
        ))}
        <div className="table">
          โต๊ะ 1
          <p className="status-in">
            จำนวนคนที่นั่ง:{" "}
            <span>
              {tableData.chairs.filter((chair) => chair.occupied).length}
            </span>{" "}
            / {tableData.chairs.length}
          </p>
          <p className="status-in">
            วัตถุบนโต๊ะ:{" "}
            {tableData.object ? tableData.object.join(", ") : "ไม่มีข้อมูล"}
          </p>
        </div>
      </div>

      <p className="status-out">
        อัพเดทล่าสุด ณ เวลา: <span>{currentTime}</span>
      </p>
    </div>
  );
}

export default App;
