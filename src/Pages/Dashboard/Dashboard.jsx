
import { Outlet, Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation(); // Hook to get the current path

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400 font-semibold" : "";
  };

  return (
    <div className="flex justify-between h-screen">
      {/* Left Sidebar (25% width) */}
      <div className="w-[300px] bg-gray-800 text-white p-4  fixed left-0 top-0 bottom-0">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/manageOrders"
              className={`hover:text-blue-400 ${isActive('/dashboard/manageOrders')}`}
            >
              Manage Orders
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/addBrand"
              className={`hover:text-blue-400 ${isActive('/dashboard/addBrand')}`}
            >
              Add New Brand
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/manageBrand"
              className={`hover:text-blue-400 ${isActive('/dashboard/manageBrand')}`}
            >
              Manage Brands
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/addProduct"
              className={`hover:text-blue-400 ${isActive('/dashboard/addProduct')}`}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/manageProduct"
              className={`hover:text-blue-400 ${isActive('/dashboard/manageProduct')}`}
            >
              Manage Product
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/manageUsers"
              className={`hover:text-blue-400 ${isActive('/dashboard/manageUsers')}`}
            >
              Manage users
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`hover:text-blue-400 ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          {/* Add more links here */}
        </ul>
      </div>

      {/* Right Content (75% width) */}
      <div className="w-full p-4 md:ml-[300px] bg-gray-100">
        {/* Content of the Outlet will be rendered here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
