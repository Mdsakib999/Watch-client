import React from 'react';

const ManageOrders = () => {
    return (
        <div className='px-5 '>
            <p className='text-3xl font-semibold mt-5 text-center mb-8'>Manage Orders</p>

            <div>
            <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-400">Order ID</th>
              <th className="p-2 border border-gray-400">Email</th>
              <th className="p-2 border border-gray-400">Contact No</th>
              <th className="p-2 border border-gray-400">Total Amount</th>
              <th className="p-2 border border-gray-400">Status</th>
              <th className="p-2 border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>

              <tr key="" className="text-center border-b">
                <td className="p-2 border border-gray-400">1234</td>
                <td className="p-2 border border-gray-400">
                  abc@gmail.com
                </td>
                <td className="p-2 border border-gray-400">
                  0123456789
                </td>
                {/* <td className="p-2 border">Tk {order?.discount ? (Number(order?.totalAmount) + Number(order?.shippingFee)) - Number(order?.discount) : (Number(order?.totalAmount) + Number(order?.shippingFee))}</td> */}
                <td className="p-2 border border-gray-400">Tk 100</td>
                <td className='border border-gray-400'>
                  <span
                    className=''
                  >
                    Delivered
                  </span>
                  {/* <span
                    className={`px-1 rounded-lg font-semibold ${order?.orderStatus === "Pending"
                      ? "text-red-500"
                      : order?.orderStatus === "Shipped"
                        ? "text-blue-500"
                        : order?.orderStatus === "Cancel"
                          ? "text-gray-600"
                          : "text-green-500"
                      }`}
                  >
                    {order?.orderStatus}
                  </span> */}
                </td>

                <td className="p-2 border border-gray-400">
                  <div className="flex justify-center gap-3">
                    {/* View Details Button */}
                    <button
                      onClick={() => {
                        setSelectedOrder(order);
                        setUpdatedStatus(order?.orderStatus);
                      }}
                      className="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition focus:outline-none "
                    >
                      Details
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>

          </tbody>
        </table>
            </div>
            
        </div>
    );
};

export default ManageOrders;