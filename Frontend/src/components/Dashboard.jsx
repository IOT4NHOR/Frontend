import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [smoothedData, setSmoothedData] = useState([]);
  const COLORS = ["#8884d8", "#82ca9d"];

  // Fetch and process data
  const fetchData = () => {
    fetch("http://iot4gler-iotsmartcam.scnd.space:3000/all")
      .then((response) => response.json())
      .then((data) => {
        const processed = processData(data);
        setData(processed);
        setSmoothedData(averageData(processed, 5));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  
  useEffect(() => {
    fetchData(); 
    const interval = setInterval(fetchData, 10000); 

    return () => clearInterval(interval); 
  }, []);

  // Process API data for charting
  const processData = (apiData) => {
    return apiData.map((item) => ({
      date: new Date(item.date_time).toUTCString(),
      people_desk1: item.people_desk1,
      people_desk2: item.people_desk2,
      object_desk1_count: item.object_desk1.length,
      object_desk2_count: item.object_desk2.length,
    }));
  };

  // Smooth data by averaging over intervals
  const averageData = (data, interval) => {
    const result = [];
    for (let i = 0; i < data.length; i += interval) {
      const slice = data.slice(i, i + interval);
      const avg = slice.reduce(
        (acc, curr) => ({
          date: curr.date,
          people_desk1: +(acc.people_desk1 + curr.people_desk1 / slice.length).toFixed(2),
          people_desk2: +(acc.people_desk2 + curr.people_desk2 / slice.length).toFixed(2),
          object_desk1_count:
            +(acc.object_desk1_count + curr.object_desk1_count / slice.length).toFixed(2),
          object_desk2_count:
            +(acc.object_desk2_count + curr.object_desk2_count / slice.length).toFixed(2),
        }),
        { people_desk1: 0, people_desk2: 0, object_desk1_count: 0, object_desk2_count: 0 }
      );
      result.push(avg);
    }
    return result;
  };

  const calculateAverages = () => (data.length > 0 ? {
    avgPeopleDesk1: +(data.reduce((sum, d) => sum + d.people_desk1, 0) / data.length).toFixed(2),
    avgPeopleDesk2: +(data.reduce((sum, d) => sum + d.people_desk2, 0) / data.length).toFixed(2),
    avgObjectsDesk1: +(data.reduce((sum, d) => sum + d.object_desk1_count, 0) / data.length).toFixed(2),
    avgObjectsDesk2: +(data.reduce((sum, d) => sum + d.object_desk2_count, 0) / data.length).toFixed(2),
  } : { avgPeopleDesk1: 0, avgPeopleDesk2: 0, avgObjectsDesk1: 0, avgObjectsDesk2: 0 });

  const { avgPeopleDesk1, avgPeopleDesk2, avgObjectsDesk1, avgObjectsDesk2 } = calculateAverages();

  return (
  <>
    <Navbar/>
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", flex: 1 }}>
          <h3>Summary Metrics</h3>
          <p><strong>Average People at Desk 1:</strong> {avgPeopleDesk1}</p>
          <p><strong>Average People at Desk 2:</strong> {avgPeopleDesk2}</p>
          <p><strong>Average Objects at Desk 1:</strong> {avgObjectsDesk1}</p>
          <p><strong>Average Objects at Desk 2:</strong> {avgObjectsDesk2}</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", flex: 1 }}>
          <h3>Pie Chart - Average Distribution</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={[
                { name: "Desk 1 People", value: avgPeopleDesk1 },
                { name: "Desk 2 People", value: avgPeopleDesk2 },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>

      <h2>Line Chart - People at Desks Over Time</h2>
      <LineChart width={900} height={400} data={smoothedData}>
        <Line type="monotone" dataKey="people_desk1" stroke="#8884d8" name="Desk 1" />
        <Line type="monotone" dataKey="people_desk2" stroke="#82ca9d" name="Desk 2" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  </>
  );
};

export default Dashboard;
