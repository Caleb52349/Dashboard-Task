import React, { useState } from "react";
import "./styles.css";
import{useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addUser } from "../action/action";

//form 
const Form = () => {

  // state of data
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    city: ""
  });

  const[error,setError]=useState("");
  let dispatch = useDispatch();
  let navigate= useNavigate();
  //set state to various const
  const { name, username, email, city } = state;

  const handleInputChange =(e) =>{
      let {name,value}=e.target;
      setState({...state,[name]: value});
  }
  const handleSubmit =(e)=>{
    //submit if no error and redirect to home page
      e.preventDefault();
      if(!name || !username ||!email ||!city)
      {
          setError("Please input all Input fields");
      }else{
            dispatch(addUser(state));
            navigate("/");
            setError("");
      }

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        value={username}
        onChange={handleInputChange}
        placeholder="Username"
        type="text"
        name="username"
      />
      <input
        value={email}
        onChange={handleInputChange}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={city}
        onChange={handleInputChange}
        placeholder="city"
        name="city"
       
      />
      {/*navigate back home when user clicks cancel from form */}
    <button onClick={()=> navigate("/")}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
