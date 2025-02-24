/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeleteProductMutation, useGetAllProductQuery } from "../../../Redux/features/Admin/admin.api";
import Swal from "sweetalert2";

const ManageProduct = () => {
    const [deleteProduct] = useDeleteProductMutation()

    // State variables
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [category, setCategory] = useState('');

    const params = [
        { name: "page", value: page },
        { name: 'limit', value: limit },
        { name: 'sortBy', value: sortBy },
        { name: 'sortOrder', value: sortOrder },
        { name: 'search', value: search },
        { name: 'minPrice', value: minPrice },
        { name: 'maxPrice', value: maxPrice },
        { name: 'category', value: category },
        { name: 'brand', value: category },
    ]
    const { data: productData, isLoading, refetch } = useGetAllProductQuery(params)
    const products = productData?.data || []
    // const { totalResults, totalPages, currentPage, pageSize } = productData?.pagination

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Are You want to Delete Product',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteProduct(id)
                if (res.data) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Oops...',
                        text: 'Product Delete Successfully',
                    });
                }
            }
        })

    };

    // const handleEdit = (id) => {
    //     navigate(`/dashboard/admin/edit_product/${id}`);
    //     console.log(`Edit product with id: ${id}`);
    // };

    // const togglePublished = async (id) => {
    //     const res = await axiosNotSecure.patch(`/productIsAcitve/${id}`);
    //     if (res) {

    //         refetch();
    //     }
    // };

    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleMinPriceChange = (e) => setMinPrice(e.target.value);
    const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    useEffect(() => {
        // refetch();
    }, [page, limit, sortBy, sortOrder, search, minPrice, maxPrice, category]);

    // if (isLoading) {
    //     return <div>Loading.....</div>;
    // }

    return (
        <div className="container mx-auto p-6 bg-white text-black shadow-lg min-h-screen rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>
            <div className="mb-4 md:flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    className="border px-4 py-2 rounded mb-3 md:mb-0"
                />
                <div>
                    <label className="mr-2">Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-4 py-2 rounded mr-2">
                        <option value="date">Date</option>
                        <option value="price">Price</option>
                    </select>
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border px-4 py-2 rounded">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className="mb-4  lg:flex justify-between items-center">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border px-4 py-2 rounded mr-2"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border px-4 py-2 rounded mr-2 my-2 md:my-0"
                />
                <select value={category} onChange={handleCategoryChange} className="border px-4 py-2 rounded">
                    <option value="">All Categories</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Sports">Sports</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Smartwatch">Smartwatch</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <div className="overflow-x-auto mt-10 ">
                <table className="min-w-full  bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Image</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Price</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Category</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Brand</th>
                            {/* <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Published</th> */}
                            {/* <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Status</th> */}
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* <div> */}
                        {
                            isLoading ? <div>Loading</div>
                                :
                                products?.map(product => (
                                    <tr key={product._id}>
                                        <td className="py-2 px-4 border-b border-gray-200">
                                            <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded" />
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray-200">{product.name}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">${product.regular_price}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{product.category}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{product.brand || "none"}</td>
                                        {/* <td className="py-2 px-4 border-b border-gray-200">

                                            <input
                                                id="switch-link"
                                                type="checkbox"
                                                defaultChecked={product.availability == 'In Stock'}
                                                className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-stone-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-stone-200 after:bg-white after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white checked:before:bg-stone-800 checked:after:border-stone-800"
                                            />
                                        </td> */}
                                        {/* <td className="py-2 px-4 border-b border-gray-200">
                                            <p className={`text-sm ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                                                {product.availability === 'In Stock' ? 'Published' : 'Unpublished'}
                                            </p>
                                        </td> */}
                                        <td className="py-[16px] px-4 flex border-b border-gray-200">
                                            <Link
                                                to={`/dashboard/edit-product/${product._id}`}
                                                // onClick={() => handleEdit(product._id)}
                                                className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 transition duration-200">Edit</Link>
                                            <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-200">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        {/* </div> */}
                    </tbody>
                </table>
                <div className="flex justify-between items-end  mt-4 gap-4 ">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            className="bg-gray-300 text-gray-700 py-1 px-2 rounded"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">Page {page}</span>
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="bg-gray-300 text-gray-700 py-1 px-2 rounded"
                        >
                            Next
                        </button>
                    </div>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(parseInt(e.target.value))}
                        className="border px-4 py-2 rounded"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>

            </div>
        </div >
    );
};

export default ManageProduct;