import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserDetails = () => {
    const { id }= useParams();
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
      ];
      const [user, setUser] = useState({
        username:"",
        email:"",
        age:"" ,
        city:"",
      });

      useEffect(() => {
        const newUser = data.find((obj) =>  obj.id.toString() === id.toString());
        if(newUser){
        setUser(newUser);
        }
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