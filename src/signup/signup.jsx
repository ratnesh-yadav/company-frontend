import React, { useState } from 'react';
import "./Style.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./login";


function Signup() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role:'',
    gender:'',
    hobbies:[]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData,'24')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send the form data to your backend for registration
    // For example, you can use axios to make an HTTP POST request to your API endpoint.
    // Replace 'YOUR_API_ENDPOINT' with your actual endpoint.
    const data = JSON.stringify(formData)
    console.log(data,'33')
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/employee/createEmployee',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("./login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    
    // axios.post('http://localhost:5000/employee/createEmployee', data,{ headers: {
    //     'Content-Type': 'application/json',
    //     'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
    //   },},
    // )
    //   .then(response => {
    //     console.log('User registered successfully:', response.data);
       
    //   })
    //   .catch(error => {
    //     console.error('Error registering user:', error);
        
    //   });
  };

  return (
    <div className = "container" style={{textAlign:"center"}}>
    <div className="signup-form w-50" id="signup">
        <h3 style={{color:"gray"}}>Create Account</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="firstName">First Name</label>
          <input
            className='form-control'
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className='form-control'
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="email">Email</label>
          <input
            className='form-control'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="password">Password</label>
          <input
            className='form-control'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="role">Role</label>
          <select className="form-control" id="role" name = "role" onChange={handleChange}>
          <option value="" selected disabled></option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
          </select>
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
          <label htmlFor="gender">Gender</label>
          <select className='form-control' id="gender" name = "gender" onChange={handleChange}>
          <option value="" selected disabled></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group mx-sm-3" style={{paddingBottom:"15px"}}>
          <label htmlFor="hobbies">Hobbies</label>
          <input
          placeholder='Multiple values can be entered'
            className='form-control'
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary ">Sign Up</button>
        <div className="container signin">
        {/* <Link to="/login">Already have an account? Login here.</Link> */}
      <p>Already have an account? <a href="/login">Sign in</a>.</p>
    </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;
