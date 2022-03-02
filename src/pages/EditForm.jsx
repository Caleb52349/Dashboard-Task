import React, { useState,useEffect } from "react";
import "./styles.css";
import{useDispatch,useSelector} from 'react-redux'
import { useNavigate ,useParams} from "react-router-dom";
import {  editUser, updateUser } from "../action/action";


//edit user similar to form
const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    city: ""
  });

  const[error,setError]=useState("");
  let {id} =useParams();
  const{user}=useSelector((state) => state.data);
  let dispatch = useDispatch();
  let navigate= useNavigate();
  const { name, username, email, city } = state;


  useEffect(()=>{
      dispatch(editUser(id))
  },[]);

  useEffect(() =>{
      if(user){
          setState({...user});
      }
  },[user]);
  const handleInputChange =(e) =>{
      let {name,value}=e.target;
      setState({...state,[name]: value});
  }
  const handleSubmit =(e)=>{
      e.preventDefault();
      if(!name || !username ||!email ||!city)
      {
          setError("Please input all Input fields");
      }else{
            dispatch(updateUser(state,id));
            navigate("/");
            setError("");
      }

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name|| ""}
        onChange={handleInputChange}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        value={username || ""}
        onChange={handleInputChange}
        placeholder="Username"
        type="text"
        name="username"
      />
      <input
        value={email || ""}
        onChange={handleInputChange}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={city || ""}
        onChange={handleInputChange}
        placeholder="city"
        name="city"
       
      />

      {/*navigate back home when user clicks cancel from form */}
    <button onClick={()=> navigate("/")}>Cancel</button>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
