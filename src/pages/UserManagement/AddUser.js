import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const AddUser = () => {
const  navigate = useNavigate();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [user, setUser] = useState({
        username:"",
        email:"",
        age:"",
        city:"",
    })


    const handleUserName = (e) => {
       // setUsername(e.target.value);
       setUser({...user, username: e.target.value})
    };

    const handleEmail = (e) => {
        // setEmail(e.target.value);
        setUser({...user, email: e.target.value})
    };

    const handleAge  = (e) => {
        // setAge(e.target.value);
        setUser({...user, age: e.target.value})
    };

    const handleCity  = (e) => {
        setUser({...user, city: e.target.value})
    };
    
    const saveForm = () => {
        console.log("username: ", username);
        console.log("email: ", email);
        console.log("age:", age);
        console.log("city:", city);
        navigate("/UserManagement")

    }


    return(
        <>
            <h1>Add user</h1>
            <div className="form-container">
            <div className= "input-group">
                <label>Username</label>
                <input type="text" name="username" onChange={handleUserName} value={user.username}/>
            </div>
            <div className= "input-group">
                <label>Email</label>
                <input type="text" name="email" onChange={handleEmail} value={user.email}/>
            </div>
             <div className= "input-group">
                <label>Age</label>
                <input type="text" name="age" onChange={handleAge} value={user.age}/>
            </div>
            <div className= "input-group">
                <label>City</label>
                <input type="text" name="city" onChange={handleCity} value={user.city}/>
            </div>

            <div>
                <button onClick={saveForm}>Save</button>
            </div>
            </div>
        </>
    )
}

export default AddUser;