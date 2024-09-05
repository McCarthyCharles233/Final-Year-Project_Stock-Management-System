import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import MainLayout from './Mainlayout';
import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import MedicineList from './Components/MedicineList';
import Reports from './Components/Reports';
import MedicineDetails from './Components/MedicineDetails';
import AddNewDrug from './Components/AddNewDrug';
import MedicineGroup from './Components/MedicineGroup';
import AppSettings from './Components/AppSettings';
import UserList from './Components/UserList';
import Notifications from './Components/Notifications';
import ProtectedRoute from './Components/ProtectedRoute';
import LoginPharmacist from './Components/LoginPharmacist';
import DashboardPharmacist from './Components/DashboardPharmacist';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='pharmacist-login' element={<LoginPharmacist />} />
        
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        <Route path="/pharmacist" element={<DashboardPharmacist />}></Route>
        
        {/* Protected Routes for both Admin and Pharmacist */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin', 'pharmacist']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="medicinelist" element={<MedicineList />} />
          <Route path="reports" element={<Reports />} />
          <Route path="medicinedetails" element={<MedicineDetails />} />
          <Route path="addnewitem" element={<AddNewDrug />} />
          <Route path="medicinegroup" element={<MedicineGroup />} />
          <Route path="appsettings" element={<AppSettings />} />
          <Route path="users" element={<UserList />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Protected Routes for Admin Only */}
        <Route
          path="/admin/restricted/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* Admin-specific routes */}
          <Route path="appsettings" element={<AppSettings />} />
          <Route path="users" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
