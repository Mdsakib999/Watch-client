
import Swal from 'sweetalert2';
import { useGetAllUsersQuery, useRoleChangeMutation } from '../../../Redux/features/Admin/admin.api';

const ManageUsers = () => {
  const [userRoleChange,] = useRoleChangeMutation()
  const { data: userData } = useGetAllUsersQuery()
  const users = userData || []
  // Handle user deletion with confirmation
  const handleDelete = (email) => {
    // Show confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'This user will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, delete the user
        fetch(`http://localhost:5000/users/${email}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Remove the user from the state if deletion was successful
              // setUsers(users.filter((user) => user.email !== email));
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User deleted successfully!',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.error("Error deleting user:", err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'There was an issue deleting the user.',
            });
          });
      }
    });
  };
  const handleRoleChange = (data) => {
    console.log(data);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are You want to Role Change',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await userRoleChange(data)
        if (res.data) {
          Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'User Role Update Successfully',
          });
        }
      }
    })
  }

  return (
    <div>
      <p className='text-3xl font-semibold text-center mt-3 mb-5'>Here are all users:</p>

      <table className="table-auto w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2 flex gap-2">
                <select
                  id="role"
                  name="role"
                  defaultValue={user.role}
                  onChange={(e) => {
                    const data = {
                      id: user._id,
                      data: { role: e.target.value }
                    }
                    handleRoleChange(data)
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button
                  onClick={() => handleDelete(user.email)}
                  className="bg-red-500 text-white py-1 px-4 rounded"
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

export default ManageUsers;
