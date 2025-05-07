import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import DashBoard from './page/DashBoard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/Dashboard" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
