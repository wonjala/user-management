import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("API Server Error");
        console.log(err);
      });
  }, []);

  const deleteUser = () => {
    const confirm = window.confirm("Are you sure to Delete this user?");
    if (confirm) {
      axios
        .delete(`http://localhost:4000/users/${id}`)
        .then((res) => {
          toast.error('User Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          navigate("/UserManagement");
          console.log("Delete user Success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <h1>Are you sure you want to delete this? {id} </h1>
      <div>Username: {user.username}</div>
      <div>Emial: {user.email}</div>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div>
        <button type="button" className="Delete" onClick={deleteUser}>
          Yes
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            navigate("/UserManagement");
          }}
        >
          No
        </button>
      </div>
    </>
  );
};

export default UserDelete;
