import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UserDelete = () => {
    const { id }= useParams();
    const navigate = useNavigate();
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
        <h1>Are you sure you want to delete this? {id} </h1>
        <div>Username: {user.username}</div>
        <div>Emial: {user.email}</div>
        <div>Age: {user.age}</div>
        <div>City: {user.city}</div>
        <div>
            <button
                type="button"
                className="Delete"
                onClick ={()=> {
                    navigate("/UserManagement");
                }}
               >Yes</button>
               <button
                type="button"
                className="button"
                onClick ={()=> {
                    navigate("/UserManagement");
                }}
               >No</button>
            
        </div>
        </>
    )
}

export default UserDelete;