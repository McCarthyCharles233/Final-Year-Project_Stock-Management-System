import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import MainLayout from './Mainlayout';
import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import MedicineList from './Components/MedicineList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='Inventory' element={<Inventory />} />
          <Route path='MedicineList' element={<MedicineList />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
