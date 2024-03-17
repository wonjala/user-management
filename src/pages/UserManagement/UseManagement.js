import { Link } from "react-router-dom";
const UserManagement = () => {
  const users = [
    {
      username: "Suron Maharjan",
      email: "suron.maharjan@gmail.com",
      age: "22",
      city: "Lalitpur",
    },
    {
      username: "Wonjala Joshi",
      email: "Wonjala.Joshi@gmail.com",
      age: "22",
      city: "Lalitpur",
    },
    {
      username: "Numa Limbu",
      email: "Numa.Limbu@gmail.com",
      age: "2",
      city: "Lalitpur",
    },
  ];

  return (
    <>
      <h1> User Management </h1>
      <Link to="/AddUser">Add User</Link>
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default UserManagement;
