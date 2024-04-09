import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
    const { id }= useParams();
   
      const [user, setUser] = useState({
        username:"",
        email:"",
        age:"" ,
        city:"",
      });

      useEffect(() => {
        axios.get(`http://localhost:4000/users/${id}`)
        .then ((res) => {
          setUser(res.data);
        }).catch((err)=>{
          alert("API Server Error");
         console.log(err)
        });
      },[]);
      
    return(
        <>
        <h1>User Details {id} </h1>
        <div>Username: {user.username}</div>
        <div>Emial: {user.email}</div>
        <div>Age: {user.age}</div>
        <div>City: {user.city}</div>
        </>
    )
}

export default UserDetails;