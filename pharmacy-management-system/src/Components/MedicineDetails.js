import React from "react";
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const MedicineDetails = () => {
    return(
        <div className="flex bg-gray-100 flex-col h-full p-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 style={{fontSize: 24}} className=" font-bold"> <span className='text-gray-500'>Inventory</span><span className='text-gray-500'> › List of Medicines</span><span> › Drug Name</span> </h1>
                    <p>List of medicines available for sales</p>
                </div>
                <button style={{backgroundColor: '#EDC268', color: '#FFFFFF', width: 144}} className="flex justify-center border p-2 rounded-md shadow-md"><FaEdit className="text-white m-1" />
                    Edit Details
                </button>
            </div>
            <div className="flex justify-between mt-3">
                <div className="relative flex-1 max-w-xs">
                <input style={{backgroundColor: '#E3EBF3'}}
                    type="text"
                    className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
                    placeholder="Search in Medicine Details"
                /><FaSearch className="absolute top-2.5 right-5 text-gray-700" />
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
                    <div className='flex justify-between border-b-2 p-1 px-5'>
                        <h3 className="text-lg font-semibold">Medicine</h3>
                    </div>
                    <div className='flex justify-between p-4'>
                        <div className='p-2'>
                            <p className='font-bold text-xl'>298</p>
                            <p className=' font-medium'>Medicine ID</p>
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-xl'>24</p>
                            <p className=' font-medium'>Medicine Groups</p>
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
                            <p className='font-bold text-xl'>298</p>
                            <p className=' font-medium'>Lifetime Supply</p>
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-xl'>290</p>
                            <p className=' font-medium'>Lifetime Sales</p>
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-xl'>08</p>
                            <p className=' font-medium'>Stock Left</p>
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
                        <p className=' font-medium'>Take this medication by mouth with or without food as directed by your doctor, usually once daily.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg flex flex-col border-2 mt-3">
                <div className='flex justify-between border-b-2 p-1 px-5'>
                    <h3 className="text-lg font-semibold">Side Effects</h3>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='p-2'>
                        <p className=' font-medium'>
                            Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, 
                            blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. 
                            If any of these effects persist or worsen, consult your doctor.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button className="flex justify-center p-3 border text-red-500 border-red-500 rounded-md shadow-lg"><FaTrash className=" m-1" />Delete Medicine</button>
            </div>
        </div>
    );
};

export default MedicineDetails;