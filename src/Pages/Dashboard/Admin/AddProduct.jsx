<<<<<<< HEAD
import { useState } from 'react';
import { useAddProductMutation, useGetBrandQuery } from '../../../Redux/features/Admin/admin.api';
import { cloudinaryUploadMultiple } from '../../../utils/cloudinary';

const AddProduct = () => {
    const { data: brandData = [] } = useGetBrandQuery()
    const [addProduct] = useAddProductMutation()
    const [product, setProduct] = useState({
        name: '',
        details: '',
        rating: 0,
        brand: '',
        images: [],
        regular_price: 0,
        discount_price: 0,
        availability: 'In Stock',
        category: '',
        gender: 'Unisex',
        productDetails: '',
    });
=======
import { useState } from "react";
import { useGetBrandQuery } from "../../../Redux/features/Admin/admin.api";

const AddProduct = () => {
  const { data: brandData = [] } = useGetBrandQuery();
  console.log(brandData);
  const [product, setProduct] = useState({
    name: "",
    details: "",
    rating: 0,
    brand: "",
    images: [],
    regular_price: 0,
    discount_price: 0,
    availability: "In Stock",
    category: "",
    gender: "Unisex",
    productDetails: "",
  });
>>>>>>> 247a553a729a4b6fb21cbc5ba0ab2c0ef4fa1589

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setProduct((prev) => ({
        ...prev,
        images: files,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
        try {
            const uploadedImages = await cloudinaryUploadMultiple(product.images)
            product.images = uploadedImages

            const response = await addProduct(product)
            if (response.data) {
                alert('Product uploaded successfully!');
                setProduct({
                    name: '',
                    details: '',
                    rating: 0,
                    brand: '',
                    images: [],
                    regular_price: 0,
                    discount_price: 0,
                    availability: 'In Stock',
                    category: '',
                    gender: 'Unisex',
                    productDetails: '',
                });
            } else {
                alert('Failed to upload product.');
            }
        } catch (error) {
            console.error('Error uploading product:', error);
            alert('An error occurred while uploading the product.');
        }
    };
=======
    try {
      console.log(product);
      // const response = await fetch('/api/products', {
      //     method: 'POST',
      //     body: formData,
      // });

      // if (response.ok) {
      //     alert('Product uploaded successfully!');
      //     setProduct({
      //         name: '',
      //         details: '',
      //         rating: 0,
      //         brand: '',
      //         images: [],
      //         regular_price: 0,
      //         discount_price: 0,
      //         availability: 'In Stock',
      //         category: '',
      //         gender: 'Unisex',
      //         productDetails: '',
      //     });
      // } else {
      //     alert('Failed to upload product.');
      // }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("An error occurred while uploading the product.");
    }
  };
>>>>>>> 247a553a729a4b6fb21cbc5ba0ab2c0ef4fa1589

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1.5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Product Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Short Description
            </label>
            <textarea
              name="details"
              id="details"
              value={product.details}
              onChange={handleChange}
              maxLength={180}
              placeholder="Not more then 180 characters"
              className="mt-1.5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={product.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              className="mt-1.5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

<<<<<<< HEAD
                    {/* Brand */}
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                            Brand
                        </label>
                        <select
                            name="brand"
                            id="brand"
                            value={product.brand}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value={''}>Choose one</option>
                            {
                                brandData.map(item => <option key={item._id} value={item.name}>{item.name}</option>)
                            }
                        </select>
                    </div>
=======
          {/* Brand */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <select
              name="brand"
              id="brand"
              value={product.brand}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              {brandData.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
>>>>>>> 247a553a729a4b6fb21cbc5ba0ab2c0ef4fa1589

          {/* Images */}
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Product Images (add all images)
            </label>
            <input
              type="file"
              name="images"
              id="images"
              onChange={handleImageChange}
              multiple
              className="mt-1 bloc w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Regular Price */}
          <div>
            <label
              htmlFor="regular_price"
              className="block text-sm font-medium text-gray-700"
            >
              Regular Price
            </label>
            <input
              type="number"
              name="regular_price"
              id="regular_price"
              value={product.regular_price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Discount Price */}
          <div>
            <label
              htmlFor="discount_price"
              className="block text-sm font-medium text-gray-700"
            >
              Discount Price
            </label>
            <input
              type="number"
              name="discount_price"
              id="discount_price"
              value={product.discount_price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              name="availability"
              id="availability"
              value={product.availability}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Sports">Sports</option>
              <option value="Luxury">Luxury</option>
              <option value="Smartwatch">Smartwatch</option>
              <option value="Vintage">Vintage</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={product.gender}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="Unisex">Unisex</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          {/* Product Details */}
          <div>
            <label
              htmlFor="productDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Product Details (Add a text editor for product details)
            </label>
            {/* <textarea
              name="productDetails"
              id="productDetails"
              value={product.productDetails}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
              required
            /> */}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Upload Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
