import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViTable from "../../components/ViTable";
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
    }
  ]
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
    {
      id: 4,
      username: "Sushant Kushwar",
      email: "sushantk@gmail.com",
      age: "22",
      city: "Kathmandu",
    },
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setUsers(data);
    }, 500)
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/user-management/add" className="btn pull-right">Add Uer</Link>
      <ViTable 
        data={users}
        header={header}
        actions={[
          {
            name: "Detail",
            link: "/user-management/detail",
            className: "btn btn-default"
          },
          {
            name: "Edit",
            link: "/user-management/edit",
            className: "btn"
          },
          {
            name: "Delete",
            link: "/user-management/delete",
            className: "btn btn-danger"
          }
        ]}
      />
    </div>
  );
}

export default UserManagement;