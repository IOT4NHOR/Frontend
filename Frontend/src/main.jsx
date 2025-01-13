import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Dashboard from './components/dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
)
