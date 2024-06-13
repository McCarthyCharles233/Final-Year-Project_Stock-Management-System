import React from "react";


const AddNewDrug = () => {
    return(
        <div className=" bg-gray-100 h-full p-10">
            <div>
                <h1 style={{fontSize: 24}} className=" font-bold"> <span className='text-gray-500'>Inventory</span><span className='text-gray-500'> › List of Medicines</span><span> › Add New Medicine</span> </h1>
                <p>*All fields are mandatory, except mentioned as (optional).</p>
            </div>
            <div className=" flex flex-wrap gap-6 my-10">
                <div>
                    <label>Medicine Name</label><br></br>
                    <input style={{backgroundColor: '#E3EBF3', width: 340, height: 38}} className=" p-2 rounded-md mt-1" type="text"></input>
                </div>
                <div>
                    <label>Medicine ID</label><br></br>
                    <input style={{backgroundColor: '#E3EBF3', width: 340, height: 38}} className=" p-2 rounded-md mt-1" type="text"></input>
                </div>
                <div>
                    <label>Medicine Group</label><br></br>
                    <select style={{backgroundColor: '#E3EBF3', width: 340, height: 38}} className=" p-2 rounded-md mt-1">
                        <option>-Select Group-</option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                    </select>
                </div>
                <div>
                    <label>Quantity in Number</label><br></br>
                    <input style={{backgroundColor: '#E3EBF3', width: 340, height: 38}} className=" p-2 rounded-md mt-1" type="number"></input>
                </div>
            </div>
            <div>
                <label>How to use</label><br></br>
                <textarea style={{backgroundColor: '#E3EBF3', width: 705, height: 96}} className=" p-2 rounded-md mt-1" ></textarea>
            </div>
            <div>
                <label>Side Effects</label><br></br>
                <textarea style={{backgroundColor: '#E3EBF3', width: 705, height: 96}} className=" p-2 rounded-md mt-1" ></textarea>
            </div>
            <div>
                <button className="bg-red-500 p-2 text-center text-white rounded-md mt-5">Save Details</button>
            </div>
        </div>
    );
};

export default AddNewDrug;