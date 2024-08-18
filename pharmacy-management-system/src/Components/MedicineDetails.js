import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const MedicineDetails = () => {
  const { id } = useParams(); // Get the medicine ID from the URL
  const [medicine, setMedicine] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch medicine details based on the ID
    const fetchMedicine = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/medicines/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMedicine(data);
        } else {
          console.error('Failed to fetch medicine details');
        }
      } catch (error) {
        console.error('Error fetching medicine details:', error);
      }
    };

    fetchMedicine();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/medicines/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/'); // Redirect to the list page after deletion
      } else {
        console.error('Failed to delete medicine');
      }
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };

  if (!medicine) return <div>Loading...</div>;

  return (
    <div className="flex bg-gray-100 flex-col h-full p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 style={{fontSize: 24}} className=" font-bold">
            <span className='text-gray-500'>Inventory</span>
            <span className='text-gray-500'> › List of Medicines</span>
            <span> › {medicine.name}</span>
          </h1>
          <p>Details of the selected medicine</p>
        </div>
        <button style={{backgroundColor: '#EDC268', color: '#FFFFFF', width: 144}} className="flex justify-center border p-2 rounded-md shadow-md">
          <FaEdit className="text-white m-1" />
          Edit Details
        </button>
      </div>
      <div className="flex justify-between mt-3">
        <div className="relative flex-1 max-w-xs">
          <input
            style={{backgroundColor: '#E3EBF3'}}
            type="text"
            className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
            placeholder="Search in Medicine Details"
          />
          <FaSearch className="absolute top-2.5 right-5 text-gray-700" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
          <div className='flex justify-between border-b-2 p-1 px-5'>
            <h3 className="text-lg font-semibold">Medicine</h3>
          </div>
          <div className='flex justify-between p-4'>
            <div className='p-2'>
              <p className='font-bold text-xl'>{medicine.id}</p>
              <p className='font-medium'>Medicine ID</p>
            </div>
            <div className='p-2'>
              <p className='font-bold text-xl'>{medicine.group}</p>
              <p className='font-medium'>Medicine Group</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
          <div className='flex justify-between border-b-2 p-1 px-5'>
            <h3 className="text-lg font-semibold">Qty in Inventory</h3>
            <a href="#">Send stock request ››</a>
          </div>
          <div className='flex justify-between p-4'>
            <div className='p-2'>
              <p className='font-bold text-xl'>{medicine.quantity}</p>
              <p className='font-medium'>Stock Left</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg flex flex-col border-2 mt-3">
        <div className='flex justify-between border-b-2 p-1 px-5'>
          <h3 className="text-lg font-semibold">How to use</h3>
        </div>
        <div className='flex justify-between p-4'>
          <div className='p-2'>
            <p className='font-medium'>{medicine.howToUse}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg flex flex-col border-2 mt-3">
        <div className='flex justify-between border-b-2 p-1 px-5'>
          <h3 className="text-lg font-semibold">Side Effects</h3>
        </div>
        <div className='flex justify-between p-4'>
          <div className='p-2'>
            <p className='font-medium'>{medicine.sideEffects}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button onClick={handleDelete} className="flex justify-center p-3 border text-red-500 border-red-500 rounded-md shadow-lg">
          <FaTrash className="m-1" />Delete Medicine
        </button>
      </div>
    </div>
  );
};

export default MedicineDetails;
