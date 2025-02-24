import React, { useContext } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useGetAllUsersQuery } from '../../Redux/features/Admin/admin.api';
import Loading from '../../Components/Loading/Loading';

const Dashboard = () => {
  // Get the authenticated user from AuthProvider
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Fetch all users from your database using Redux
  const { data: userData, isLoading, error } = useGetAllUsersQuery();
  const users = userData || [];

  // Find the matching user from the database based on a unique field (e.g., email)
  const matchedUser = users.find((u) => u.email === user?.email);

  // Handle loading and error states
  if (isLoading) return <div> <Loading></Loading> </div>;
  if (error) return <div>Error loading user data</div>;

  // Retrieve the user's role from the matched database record
  const userRole = matchedUser?.role;

  // Define role-based routes
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
    { path: '/dashboard/profile', label: 'Profile' },
    { path: '/', label: 'Home' },
  ];

  // Choose the routes to render based on the user's role
  const routesToRender = userRole === 'admin' ? adminRoutes : customerRoutes;

  // Helper function for styling active links
  const isActive = (path) =>
    location.pathname === path ? 'text-blue-400 font-semibold' : '';

  return (
    <div className="flex justify-between h-screen">
      {/* Left Sidebar */}
      <div className="w-[300px] bg-gray-800 text-white p-4 fixed left-0 top-0 bottom-0 ">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Dashboard</h2>
        <ul className="space-y-4">
          {routesToRender.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`hover:text-blue-400  ml-3 text-lg ${isActive(route.path)}`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-full md:ml-[300px] bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
