import React, { useState } from 'react';
import "./Style.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send the form data to your backend for registration
    // For example, you can use axios to make an HTTP POST request to your API endpoint.
    // Replace 'YOUR_API_ENDPOINT' with your actual endpoint.
    const data = JSON.stringify(formData)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/employee/signinEmployee',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        localStorage.setItem("empId",response.data.data._id)
        console.log(JSON.stringify(response.data));
        if(response.data.data.role == 'Manager')
        {
            navigate("/managerdashboard", { replace: true });
        } 
        else if(response.data.data.role == 'Employee'){
            navigate("/employeedashboard", { replace: true });
        }
        
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
        <h3 style={{color:"gray"}}>Login Account</h3>
      <form onSubmit={handleSubmit} className="signup-form">
    
        <div className="form-group mx-sm-3" style={{paddingBottom:"10px"}}>
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
        <div className="form-group mx-sm-3" style={{paddingBottom:"10px"}}>
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
        <button type="submit" className="btn btn-primary ">Log In</button>
        <div className="container signin">
      <p>Create new account <a href="/">SignUp</a>.</p>
    </div>
      </form>
    </div>
    </div>
  );
}

export default Login;