import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddBrand = () => {
  const [brandName, setBrandName] = useState('');
  const [brandImageURL, setBrandImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the brand object to send to the backend
    const newBrand = {
      name: brandName,
      imageURL: brandImageURL,
    };

    // Send the brand data to the backend
    fetch('http://localhost:5000/brands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBrand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Brand added successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          setBrandName('');
          setBrandImageURL('');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'There was an error adding the brand.',
          });
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error sending the data.',
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white border border-gray-300 shadow-md rounded-md mt-12">
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Brand</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Brand Image URL</label>
          <input
            type="text"
            value={brandImageURL}
            onChange={(e) => setBrandImageURL(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer font-semibold"
        >
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
