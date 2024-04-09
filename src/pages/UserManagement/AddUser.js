import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViPasswordInput from "../../components/ViPasswordInput";
import { validateEmail } from "../../utils/Common";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const navigate = useNavigate();
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [age, setAge] = useState();
  // const [city, setCity] = useState();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const validateForm = () => {
    let isValid = true;
    const error = { ...errorMessage };
    if (user.username === "") {
      error.username = "Username is required";
      isValid = false;
    } else {
      error.username = "";
    }
    if (user.password === "") {
      error.password = "Password is required";
      isValid = false;
    } else {
      error.password = "";
    }
    if (user.email === "") {
      error.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(user.email)) {
      error.email = "Email is not valid";
      isValid = false;
    } else {
      error.email = "";
    }

    if (user.age === "") {
      error.age = "Age is required";
      isValid = false;
    } else {
      error.age = "";
    }
    if (user.city === "") {
      error.city = "City is required";
      isValid = false;
    } else {
      error.city = "";
    }
    setErrorMessage(error);
    return isValid;
  };

  const handleInputChange = (event) => {
    // setUsername(e.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //   const handleEmail = (e) => {
  //     // setEmail(e.target.value);
  //     setUser({...user, email: e.target.value})
  //   };

  //   const handleAge = (e) => {
  //     // return setAge(e.target.value);
  //     setUser({...user, username: e.target.value})
  //   };

  //   const handleCity = (e) => {
  //     // return setCity(e.target.value);
  //     setUser({...user, city: e.target.value})
  //   };

  const saveForm = () => {
    const uuid = uuidv4();
    if (validateForm()) {
      const item = { ...user, id: uuid };
      console.log("User: ", user);
      axios
        .post("http://localhost:4000/users", item)
        .then(() => {
          toast.success('User Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

          console.log("user saved");
          navigate("/UserManagement");
        })
        .catch((err) => {
          console.log(err);
          alert("Server error");
        });
    }
  };

  return (
    <>
      <h1>Add user</h1>
      <div className="form-container">
        <ViTextInput
          label="Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          errorMessage={errorMessage.username}
        />
        <ViPasswordInput
          label="Password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          errorMessage={errorMessage.password}
        />

        <ViTextInput
          label="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          errorMessage={errorMessage.email}
        />

        <ViTextInput
          label="Age"
          name="age"
          value={user.age}
          onChange={handleInputChange}
          errorMessage={errorMessage.age}
        />
        <ViTextInput
          label="City"
          name="city"
          value={user.city}
          onChange={handleInputChange}
          errorMessage={errorMessage.city}
        />
        <div>
          <button onClick={saveForm}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
