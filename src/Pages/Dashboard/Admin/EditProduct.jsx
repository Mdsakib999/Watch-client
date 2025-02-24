/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { cloudinaryUploadMultiple } from '../../../utils/cloudinary';
import { FaSpinner } from 'react-icons/fa';
// import JoditEditor from "jodit-pro-react";
import { useParams } from 'react-router-dom';
import { HiMiniXCircle } from 'react-icons/hi2';
import { useGetBrandQuery, useGetProductQuery, useUpdateProductMutation } from '../../../Redux/features/Admin/admin.api';


const EditProduct = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const { data: productData = {} } = useGetProductQuery(id)
    const [updateProduct] = useUpdateProductMutation()
    const [formData, setFormData] = useState({
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
    console.log(formData.brand);
    const [content, setContent] = useState('');
    const [isImagesChange, setIsImagesChange] = useState(false);
    const [imagesUrl, setImagesUrl] = useState([]);

    const { data: brandData = [] } = useGetBrandQuery()

    useEffect(() => {
        if (productData) {
            setFormData({
                name: productData.name,
                details: productData.details,
                rating: productData.rating,
                brand: productData.brand,
                images: productData.images,
                regular_price: productData.regular_price,
                discount_price: productData.discount_price,
                availability: productData.availability,
                category: productData.category,
                gender: productData.gender,
                productDetails: productData.productDetails,
            });
            setContent(productData.description);
            setImagesUrl(productData.images);
        }
    }, [productData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files
        }));
    };



    const onSubmit = async (e) => {
        e.preventDefault();
        const { images, regular_price, discount_price } = formData;


        try {
            setIsLoading(true);
            let updatedFormData = { ...formData };
            if (isImagesChange) {
                const galleryFiles = Array.from(images || []);
                const galleryResponses = await cloudinaryUploadMultiple(galleryFiles);
                updatedFormData.images = galleryResponses
                updatedFormData.oldImages = imagesUrl;
            } else {
                updatedFormData.images = imagesUrl;
            }

            updatedFormData.price = parseInt(regular_price);
            updatedFormData.discount_price = parseInt(discount_price);
            updatedFormData.description = content;
            const res = await updateProduct({ id, data: updatedFormData })
            if (res) {
                setIsLoading(false);
                setIsImagesChange(false);
                // refetch();
            }
            // const res = await axiosNotSecure.patch(`/product/${id}`, updatedFormData);

        } catch (error) {
            setIsLoading(false);
            console.error('Error updating product:', error);
        }
    };

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={onSubmit} className="max-w-lg md:max-w-5xl mx-auto p-6 text-black bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Edit Vape Product</h2>

            {/* Product Name */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Product Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Short Description</label>
                <input
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Product Description */}
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Product Description</label>
                {/* <JoditEditor
                    value={content}
                    tabIndex={6}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                /> */}
            </div>

            {/* Gallery Images */}
            <div className="mb-4">
                <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">Gallery Images</label>
                {!isImagesChange ? (
                    <div className="flex gap-2 relative">
                        {imagesUrl?.map((item, index) => (
                            <div key={index} className="">
                                <img src={item} className="w-20 h-20 object-cover rounded" alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                        <span
                            onClick={() => setIsImagesChange(true)}
                            className="text-black bg-white rounded-full cursor-pointer p-1"
                        >
                            <HiMiniXCircle size={20} />
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            id="images"
                            multiple
                            type="file"
                            name="images"
                            onChange={handleFileChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => {
                                setImagesUrl(productData?.images);
                                setIsImagesChange(false);
                            }}
                            type="button"
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            Don't Change
                        </button>
                    </div>
                )}
            </div>

            {/* Price */}
            <div className="mb-4">
                <label htmlFor="regular_price" className="block text-gray-700 font-semibold mb-2">Price</label>
                <input
                    type="number"
                    id="regular_price"
                    name="regular_price"
                    value={formData.regular_price}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Discount Price */}
            <div className="mb-4">
                <label htmlFor="discount_price" className="block text-gray-700 font-semibold mb-2">Discount Price in %</label>
                <input
                    type="number"
                    id="discount_price"
                    name="discount_price"
                    value={formData.discount_price}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            {/* Gender */}
            <div>
                <label
                    htmlFor="gender"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Gender
                </label>
                <select
                    name="gender"
                    id="gender"
                    value={productData.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Select a Gender</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
            </div>
            {/* Category */}
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select a category</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Sports">Sports</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Smartwatch">Smartwatch</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            {/* Brand */}
            <div className="mb-4">
                <label htmlFor="brand" className="block text-gray-700 font-semibold mb-2">Brand</label>
                <select
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    defaultValue={productData.brand}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select a Brand</option>
                    {brandData.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Status */}
            <div className="mb-4">
                <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select A Availability</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? <FaSpinner className="animate-spin text-center w-full" /> : 'Update Product'}
                </button>
            </div>
        </form>
    );
};

export default EditProduct;