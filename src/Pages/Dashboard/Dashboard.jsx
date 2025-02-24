import React, { useContext, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useGetAllUsersQuery } from '../../Redux/features/Admin/admin.api';
import Loading from '../../Components/Loading/Loading';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const { data: userData, isLoading, error } = useGetAllUsersQuery();
  const users = userData || [];
  const matchedUser = users.find((u) => u.email === user?.email);
  
  if (isLoading) return <Loading />;
  if (error) return <div>Error loading user data</div>;

  const userRole = matchedUser?.role;

  const adminRoutes = [
    { path: '/dashboard/manageOrders', label: 'Manage Orders' },
    { path: '/dashboard/addBrand', label: 'Add New Brand' },
    { path: '/dashboard/manageBrand', label: 'Manage Brands' },
    { path: '/dashboard/addProduct', label: 'Add Product' },
    { path: '/dashboard/manageProduct', label: 'Manage Product' },
    { path: '/dashboard/manageUsers', label: 'Manage Users' },
    { path: '/dashboard/coupon', label: 'Coupon' },
    { path: '/dashboard/manageCoupon', label: 'Manage Coupon' },
    { path: '/', label: 'Home' },
  ];

  const customerRoutes = [
    { path: '/dashboard/myOrders', label: 'My Orders' },
    { path: '/', label: 'Home' },
  ];

  const routesToRender = userRole === 'admin' ? adminRoutes : customerRoutes;

  const isActive = (path) =>
    location.pathname === path ? 'text-blue-400 font-semibold' : '';

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsDashboardOpen(true)}
        className={`lg:hidden fixed top-5 left-4 border cursor-pointer hover:text-white px-2 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors ${
          isDashboardOpen ? 'hidden' : ''
        }`}
      >
        <FaArrowRight />
      </button>

      {/* Sidebar */}
      <div
        className={`w-[250px] lg:w-[400px] p-4 bg-gray-800 text-white transition-transform duration-300 fixed inset-y-0 left-0 z-20 lg:relative lg:translate-x-0 ${
          isDashboardOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {isDashboardOpen && (
          <button
            onClick={() => setIsDashboardOpen(false)}
            className="absolute top-5 left-48 lg:hidden text-red-600 hover:text-red-500 cursor-pointer"
          >
            <FaTimes size={24} />
          </button>
        )}
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Dashboard</h2>
        <ul className="space-y-4">
          {routesToRender.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`hover:text-blue-400 ml-3 text-lg ${isActive(route.path)}`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full bg-gray-100 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
