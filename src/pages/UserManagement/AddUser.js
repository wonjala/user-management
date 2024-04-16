import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViPasswordInput from "../../components/ViPasswordInput";
import { validateEmail } from "../../utils/Common";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { showSuccessMessage } from "../../utils/notification";
import { addUser, getUserById, updateUser } from "../../service/user-management.service";

const AddUser = () => {
  const { id }= useParams();
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

  useEffect(() => {
    if (id) {
      getUserById(id).then((data) => {
        setUser({
          username: data.username,
          password: data.password,
          email: data.email,
          age: data.age,
          city: data.city,
        });
      }).catch((err) => {
        alert("API server error");
        console.log(err);
    });
    }
  }, []);

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
   

    if (validateForm()) {
      if (id) {
        // UPDATE Case
        updateUser(id, user)
          .then(() => {
            showSuccessMessage('User Updated');
            console.log("user updated");
            navigate('/UserManagement');
          }).catch((err) => {
            console.log(err);
            alert("SERVER ERROR");
          });
        } else {
          // ADD Case
          const uuid = uuidv4();
          const item = {...user, id: uuid}
          console.log('User:', item);
          addUser(user).then(() => {
            showSuccessMessage('User saved');
            console.log("user saved");
            navigate('/UserManagement');
          }).catch((err) => {
            console.log(err);
            alert("SERVER ERROR");
          });
        }
      }
    }
    


  return (
    <>
     <h2>{ id ? 'Edit User': 'Add User'}</h2>
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
        <button onClick={saveForm} className="btn">
          { id ? 'Update': 'Save'}
        </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
