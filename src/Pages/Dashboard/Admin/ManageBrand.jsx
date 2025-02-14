import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch all brands from the backend
    fetch('http://localhost:5000/brands')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error('Error fetching brands:', error));
  }, []);

  const handleDelete = (brandId, brandName) => {
    // Confirm deletion with SweetAlert
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete the brand: ${brandName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the backend API to delete the brand
        fetch(`http://localhost:5000/brands/${brandId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then(() => {
            Swal.fire('Deleted!', 'Your brand has been deleted.', 'success');
            // Refresh the brand list
            setBrands(brands.filter((brand) => brand._id !== brandId));
          })
          .catch((error) => {
            Swal.fire('Error!', 'There was an issue deleting the brand.', 'error');
            console.error('Error deleting brand:', error);
          });
      }
    });
  };

  const handleEdit = (brand) => {
    // Use SweetAlert to show the input fields for editing both the brand name and the image URL
    Swal.fire({
      title: 'Edit Brand',
      html: `
        <input id="brandName" class="swal2-input" placeholder="Brand Name" value="${brand.name}">
        <input id="brandImage" class="swal2-input" placeholder="Brand Image URL" value="${brand.imageURL}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const name = document.getElementById('brandName').value;
        const imageURL = document.getElementById('brandImage').value;

        // Validate inputs
        if (!name || !imageURL) {
          Swal.showValidationMessage('Both fields are required');
          return false;
        }

        return { name, imageURL };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, imageURL } = result.value;

        // Call the backend API to update the brand
        fetch(`http://localhost:5000/brands/${brand._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, imageURL }),
        })
          .then((response) => response.json())
          .then(() => {
            Swal.fire('Updated!', 'Your brand has been updated.', 'success');
            // Refresh the brand list
            setBrands(
              brands.map((brandItem) =>
                brandItem._id === brand._id
                  ? { ...brandItem, name, imageURL }
                  : brandItem
              )
            );
          })
          .catch((error) => {
            Swal.fire('Error!', 'There was an issue updating the brand.', 'error');
            console.error('Error updating brand:', error);
          });
      }
    });
  };

  return (
    <div>
      <p className='text-3xl font-semibold text-center mt-3 mb-5'>Manage All Brands</p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Brand Name</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td className="border border-gray-300 p-2">{brand.name}</td>
              <td className="border border-gray-300 p-2 flex justify-center">
                <img
                  src={brand.imageURL}
                  alt={brand.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleEdit(brand)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(brand._id, brand.name)}
                  className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBrand;
