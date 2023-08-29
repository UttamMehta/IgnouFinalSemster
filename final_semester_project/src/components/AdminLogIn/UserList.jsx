import React from 'react';
import axios from 'axios';

const UserList = ({ users }) => {
  const deleteUser = async (id) => {
    try {
      // await axios.delete(`/api/users/${id}`);
      // Update the user list in state or fetch the updated list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course Stream</th>
            <th>Attendance %</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.courseStream}</td>
              <td>{user.attendance}%</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
