import React, { useState, useEffect } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://iot4gler-iotsmartcam.scnd.space:3000/latest");
      const latestData = await response.json();
      setData(latestData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchForgottenItems = async () => {
    try {
      const response = await fetch("http://iot4gler-iotsmartcam.scnd.space:3000/");
      const forgottenData = await response.json();

      // Check for forgotten items
      const forgottenDesks = ["desk1", "desk2"].filter(
        (desk) => forgottenData[desk]?.length > 0
      );

      if (forgottenDesks.length > 0) {
        let forgottenMessage = "";

        forgottenDesks.forEach((desk) => {
          forgottenData[desk].forEach((itemData) => {
            forgottenMessage += `${itemData.message}\n`;
          });
        });

        Swal.fire({
          title: "Forgotten Items Detected!",
          text: forgottenMessage.trim(),
          icon: "warning",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error fetching forgotten items:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
      fetchForgottenItems(); // Check for forgotten items every 10 seconds
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const renderChairs = (peopleCount) => {
    const chairs = [];
    for (let i = 0; i < 4; i++) {
      chairs.push(
        <div
          key={i}
          className={`chair ${i < peopleCount ? "occupied" : "available"}`}
        ></div>
      );
    }
    return chairs;
  };

  const renderObjectEmoji = (object) => {
    switch (object.toLowerCase()) {
      case "banana":
        return "🍌";
      case "tv":
        return "📺";
      case "laptop":
        return "💻";
      case "coffee":
        return "☕";
      default:
        return "📦";
    }
  };

  function test() {
    Swal.fire({
      title: "You Lost item!",
      text: "You forgot the {data} on the table {table}",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }

  return (
    <div className="app-container">
      <h1 className="title">ROOM 1 </h1>
      <h2 className="paragraph">Developed by Iot4Nhor</h2>
      {data ? (
        <div className="data-container">
          <div className="desk">
            <h2>Desk 1</h2>
            <p><strong>People:</strong> {data.people_desk1}</p>
            <p><strong>Objects:</strong> {data.object_desk1.map((obj) => renderObjectEmoji(obj)).join(", ")}</p>
            <p><strong>Date & Time:</strong> {new Date(data.date_time).toLocaleString()}</p>
            <div className="chair-container">{renderChairs(data.people_desk1)}</div>
          </div>
          <div className="desk">
            <h2>Desk 2</h2>
            <p><strong>People:</strong> {data.people_desk2}</p>
            <p><strong>Objects:</strong> {data.object_desk2.map((obj) => renderObjectEmoji(obj)).join(", ")}</p>
            <p><strong>Date & Time:</strong> {new Date(data.date_time).toLocaleString()}</p>
            <div className="chair-container">{renderChairs(data.people_desk2)}</div>
          </div>
          <div className="desk">
            <h2>Desk 3</h2>
            <p><strong>People:</strong> None</p>
            <p><strong>Objects:</strong> None</p>
            <p><strong>Date & Time:</strong> {new Date(data.date_time).toLocaleString()}</p>
            <div className="chair-container">{renderChairs(4)}</div>
          </div>
          <div className="desk">
            <h2>Desk 4</h2>
            <p><strong>People:</strong> None</p>
            <p><strong>Objects:</strong> None</p>
            <p><strong>Date & Time:</strong> {new Date(data.date_time).toLocaleString()}</p>
            <div className="chair-container">{renderChairs(4)}</div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
        </div>
      )}
    </div>
  );
}

export default App;
