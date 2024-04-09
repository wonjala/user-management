import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
import axios from "axios";

const UserManagement = () => {
  const header = [
    {
      key: "username",
      label: "Username",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "age",
      label: "Age",
    },
    {
      key: "city",
      label: "City",
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     username: "Suron Maharjan",
  //     email: "suron.maharjan@gmail.com",
  //     age: "22",
  //     city: "Lalitpur",
  //   },
  //   {
  //     id: 2,
  //     username: "Wonjala Joshi",
  //     email: "wonjala.joshi@gmail.com",
  //     age: "21",
  //     city: "Lalitpur",
  //   },
  //   {
  //     id: 3,
  //     username: "Numa Limbu",
  //     email: "numa.limbu@gmail.com",
  //     age: "22",
  //     city: "Lalitpur",
  //   },
  //   {
  //     id: 4,
  //     username: "Sushant Kushwar",
  //     email: "sushantk@gmail.com",
  //     age: "22",
  //     city: "Kathmandu",
  //   },
  // ];
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:4000/users").then ((res) => {
      setUsers(res.data);
    }).catch((err)=>{
      alert("API Server Error");
     console.log(err)
    });
  }, []);

  return (
    <>
      <h1>User Management</h1>
      <div className="button-container">
        <Link to="/UserManagement/AddUser">
          <button>Add User</button>
        </Link>
      </div>
      <ViTable
        data={users}
        header={header}
        actions={[
          {
            name: "Detail",
            link: "/UserManagement/UserDetails",
            className: "Edit",
          },
          {
            name: "Edit",
            link: "/UserManagement/edit",
            className: "button",
          },
          {
            name: "Delete",
            link: "/UserManagement/delete",
            className: "Delete",
          },
        ]}
      />
    </>
  );
};

export default UserManagement;
