import React, { useState } from 'react';
import MedicineList from './MedicineList';
import AddNewDrug from './AddNewDrug';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MedicineList medicines={medicines} />}
        />
        <Route
          path="/admin/addnewitem"
          element={<AddNewDrug addMedicine={addMedicine} />}
        />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;
