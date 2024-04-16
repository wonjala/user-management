import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../service/user-management.service";

const UserDetails = () => {
    const { id }= useParams();
   
      const [user, setUser] = useState({
        username:"",
        email:"",
        age:"" ,
        city:"",
      });

      useEffect(() => {
        getUserById(id).then((data) => {
          setUser(data);
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