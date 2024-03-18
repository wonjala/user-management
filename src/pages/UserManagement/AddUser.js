import React, { useState } from 'react'

const AddUser = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();


    const handleUserName = (e) => {
        setUsername(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAge  = (e) => {
        setAge(e.target.value);
    };

    const handleCity  = (e) => {
        setCity(e.target.value);
    };
    
    const saveForm = () => {
        console.log("username: ", username);
        console.log("email: ", email);
        console.log("age:", age);
        console.log("city:", city);

    }


    return(
        <>
            <h1>Add user</h1>
            <div className= "input-group">
                <label>Username</label>
                <input type="text" name="username" onChange={handleUserName} value={username}/>
            </div>
            <div className= "input-group">
                <label>Email</label>
                <input type="text" name="email" onChange={handleEmail} value={email}/>
            </div>
             <div className= "input-group">
                <label>Age</label>
                <input type="text" name="age" onChange={handleAge} value={age}/>
            </div>
            <div className= "input-group">
                <label>City</label>
                <input type="text" name="city" onChange={handleCity} value={city}/>
            </div>

            <div>
                <button onClick={saveForm}>Save</button>
            </div>
        </>
    )
}

export default AddUser;