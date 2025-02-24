IoT 4 NHOR Dashboard

## Description
This is a frontend React application that visualizes real-time IoT data for room monitoring. It fetches data from an Express backend connected to a PostgreSQL database. The application updates every 10 seconds to track the number of people in a room and detect objects on desks. The goal is to provide an intuitive interface for monitoring environmental changes and optimizing room usage.

## Features
- **Real-Time Data Fetching**: The app retrieves updated IoT data every 10 seconds.
- **Dynamic UI Updates**: Displays the number of people and detected objects dynamically.
- **Responsive Design**: Works across multiple devices with an adaptive layout.
- **Data Visualization**: Presents IoT data in an easily understandable format.

## Tech Stack
- **React**: Frontend framework for building the UI.
- **Tailwind CSS**: For modern and responsive styling.
- **Axios**: Fetches data from the backend.
- **Recharts**: For displaying real-time data visualizations.

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-repo/iot-dashboard.git](https://github.com/IOT4NHOR/Frontend.git)
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- The app automatically fetches and displays real-time IoT data.
- Users can view the number of people in the room and objects detected on desks.
- The UI updates dynamically every 10 seconds.

## Future Improvements
- Implement WebSockets for real-time updates without polling.
- Add user authentication for personalized dashboards.
- Improve UI with interactive charts and filtering options.

---
Feel free to update this document as your project evolves!

