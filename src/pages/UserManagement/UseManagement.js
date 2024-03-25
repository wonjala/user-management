import { Link } from "react-router-dom";
import  React, { useEffect, useState } from  'react';

const UserManagement = () => {

  const student = {
    name : 'John Doe',
    roll: 213,
    phone: [12,125,149],
  }

  //object destructuring
  const {name, roll, phone} = student
  console.log(name);

  //object destructuring
  const [a, b, c] = phone;
  console.log(a,b,c);

  //Spread Operator
  const uzers = [
    {
      id: 1,
      name: "Alice",
    }
  ]

  const uzer = {
      id: 2,
      name: "Bob",
    }

    const newUser = [...uzers, uzer];
    console.log(newUser);
  

  const [users, setUsers] = useState([]);
  useEffect(()=> {
    setTimeout(()=> {
      setUsers(data);
    }, 1000)
    }, [])


  const data = [
    {
      id: 1,
      username: "Suron Maharjan",
      email: "suron.maharjan@gmail.com",
      age: "22",
      city: "Lalitpur",
    },
    {
      id: 2,
      username: "Wonjala Joshi",
      email: "Wonjala.Joshi@gmail.com",
      age: "21",
      city: "Lalitpur",
    },
    {
      id: 3,
      username: "Numa Limbu",
      email: "Numa.Limbu@gmail.com",
      age: "22",
      city: "Lalitpur",
    },
  ];


  return (
    <>
      <h1> User Management </h1>
      <div className="button-container">
      <Link to="/UserManagement/AddUser">
        <button>Add User</button>
      </Link>
      </div>
     
      <table>
        <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
          <th colSpan={3}>Action</th>
        </tr>
        </thead>
      <tbody>
        { users.length > 0 && 
        <>
          {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>
              <Link to= {`/UserManagement/UserDetails/${user.id}`}> <button>Details</button></Link>
              </td>
              <td>
              <Link to= {`/UserManagement/edit/${user.id}`}> <button>Edit</button></Link>
              </td>
              <td>
              <Link to= {`/UserManagement/delete/${user.id}`}> <button className="Delete">Delete</button></Link>
              </td>
            </tr>
          );
        })}
        </>
        }
        { users.length === 0 && 
        <>
        <tr><td colSpan={5}>No records found</td></tr>
        </>}
      </tbody>
        
      </table>
    </>
  );
};
export default UserManagement;
