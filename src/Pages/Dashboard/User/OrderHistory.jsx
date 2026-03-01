import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useGetCustomerOrderQuery } from "../../../Redux/features/User/user.api";

const OrderHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useGetCustomerOrderQuery(undefined, {
    skip: !user,
  });
  console.log(orders);
  // const orders = [
  //   {
  //     id: "ORD123456",
  //     date: "2025-02-19",
  //     status: "Delivered",
  //     products: [
  //       {
  //         id: "PROD1",
  //         name: "Wireless Headphones",
  //         image: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=",
  //         quantity: 1,
  //         price: 59.99,
  //       },
  //       {
  //         id: "PROD2",
  //         name: "Bluetooth Speaker",
  //         image: "https://www.shutterstock.com/image-photo/wristwatch-isolated-on-white-background-260nw-493192093.jpg",
  //         quantity: 2,
  //         price: 29.99,
  //       },
  //     ],
  //     subtotal: 119.97,
  //     deliveryFee: 5.00,
  //     discount: 10.00,
  //     total: 114.97,
  //     user: {
  //       name: "John Doe",
  //       phone: "123-456-7890",
  //       address: "123 Main St, New York, NY",
  //     },
  //   },
  // ];

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b text-center pb-2">
        Order History
      </h2>
      {orders?.map((order) => (
        <div
          key={order.id}
          className="border border-gray-300 p-4 rounded-lg shadow-sm mb-6 bg-gray-50"
        >
          <div className="flex justify-between items-center border-b border-gray-300 pb-3">
            <div>
              <p className=" text-gray-700">
                Order ID:{" "}
                <span className="font-medium text-gray-800">
                  {order.orderId}
                </span>
              </p>
              <p className="text-gray-700">
                Date:{" "}
                <span className="font-medium text-gray-800">
                  {new Date(order.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </span>
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
              {order.orderStatus}
            </span>
          </div>
          <div className="mt-4 space-y-4">
            {order?.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b border-gray-300 pb-3 last:border-none "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.productId.images[0]}
                    alt={product.productId.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.productId.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${product.productId.price}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  ${Number(product.productId.price) * Number(product.quantity)}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="mt-4 flex justify-between border-t border-gray-400 pt-4">
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              <h4 className="font-semibold text-gray-800">User Information</h4>
              <p className="text-gray-700">Name: {order.user.name}</p>
              <p className="text-gray-700">Phone: {order.user.phone}</p>
              <p className="text-gray-700">Address: {order.user.address}</p>
            </div>
            <div>
              <p className=" text-gray-700">Subtotal: <span className="font-medium text-gray-900">${order.subtotal.toFixed(2)}</span></p>
              <p className=" text-gray-700">Delivery Fee: <span className="font-medium text-gray-900">${order.deliveryFee.toFixed(2)}</span></p>
              {order.discount > 0 && (
                <p className=" text-red-600">Discount: -${order.discount.toFixed(2)}</p>
              )}
              <p className="text-lg font-semibold text-gray-900 mt-2 border-t text-center">Total: ${order.total.toFixed(2)}</p>
            </div>

          </div> */}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
