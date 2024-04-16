import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showDangerMessage } from "../../utils/notification";
import { deleteUser } from "../../service/user-management.service";

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

  const handleDeleteUser = () => {
    const confirm = window.confirm("Are you sure to Delete this user?");
    if (confirm) {
      deleteUser(id).then(() => {
        showDangerMessage('Delete user success')
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
        <button type="button" className="Delete"   onClick={handleDeleteUser}>
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
