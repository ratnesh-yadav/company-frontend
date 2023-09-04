import React ,{useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Employeesdetails(){
    const [empdata, setEmpdata] = useState([])
    const [action, setAction] = useState('view')
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    categoryName: '',
    departmentName: '',
    salary: 0,
    employeeId: '',
    location:''
  });

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
      url: 'http://localhost:5000/employee_details/createEmployeedetails',
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      alert('Success')
      navigate("/managerdashboard", { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    useEffect( ()=>{
        let data = '';
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/employee_details/employeedetails/all',
            headers: { 
              'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
            }
          };
          
          axios.request(config)
          .then((response) => {
            setEmpdata(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])


   function handleCLick(){
      setAction('Add')
    }

    return (
        <>
        {console.log(action,'35')}
{ 
       action=='view'&&empdata?( 
        <div class="cs-loader">
<div class="content-wrapper">
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
        <a href="/managerdashboard" class="btn btn-primary" style={{width: "7vw", marginLeft:''}}>Back</a>
        </div>
        <div class="col-sm-6">
        <button class="btn btn-primary" onClick={handleCLick} style={{width: "7vw", marginLeft:''}}>Add</button>
        </div>
      </div>
    </div>
  </div>


 
  <section class="content">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-12"> 

          <div class="aps-top-box">
            <div class="aps-left-header" style={{textAlign:"end"}}>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" style={{textAlign:"center"}}>
              <h3 class="card-title">Employees Details</h3>
            </div>
         
            <div class="card-body">
              <table id="example1" class="datatable table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Emp Id</th>
                   <th>Department</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                 <tbody>
                {
                empdata.map((i)=>{
                   return(
                  <tr>
                    <td>{i.employeeId}</td>
                  <td>{i.departmentName}</td>
                  <td>{i.categoryName}</td>
                  <td>{i.location}</td>
                  <td>{i.salary}</td>
                </tr>
                 
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      </div>
  </section>
</div>
</div>
       ):(action=='Add'?
       (
    
        <div className = "container" style={{textAlign:"center"}}>
        <div className="signup-form w-50" id="signup">
            <h3 style={{color:"gray"}}>Add Employee Details</h3>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
              <label htmlFor="categoryName">Category Name</label>
              <input
                className='form-control'
                type="text"
                id="categoryName"
                name="categoryName"
                value={formData.categorySName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
              <label htmlFor="departmentName">Department Name</label>
              <input
                className='form-control'
                type="text"
                id="departmentName"
                name="departmentName"
                value={formData.departmentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
              <label htmlFor="salay">Salary</label>
              <input
                className='form-control'
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
              <label htmlFor="employeeId">Employee Id</label>
              <input
                className='form-control'
                type="text"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mx-sm-3" style={{paddingBottom:"7px"}}>
              <label htmlFor="location">Location</label>
              <input
                className='form-control'
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          
            <button type="submit" className="btn btn-primary" >Create</button>
            <div className="container signin">
            {/* <Link to="/login">Already have an account? Login here.</Link> */}
          <button className="btn btn-primary" style={{marginTop:"10px"}} onClick={()=>{setAction('view')}}>Close</button>
        </div>
          </form>
        </div>
        </div>
     ):(""))}
              
</>)
}

export default Employeesdetails;