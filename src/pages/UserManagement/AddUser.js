import React, { useState } from 'react'

const AddUser = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();


    const handleUserName = (e) => {
        setUsername(e.target.value);
    };

    
    const saveForm = () => {
        console.log("hellos");

    }


    return(
        <>
            <h1>Add user</h1>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={handleUserName} value={username}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email"/>
            </div>

            <div>
                <button onClick={saveForm}>Save</button>
            </div>
        </>
    )
}

export default AddUser;