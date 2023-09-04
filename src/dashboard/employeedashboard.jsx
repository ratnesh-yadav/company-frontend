import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Employee(){
    const [empdata, setEmpdata] = useState({})
    const emp_id = localStorage.getItem("empId")
    console.log(emp_id,'6')
    useEffect( ()=>{
        let data = '';
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:5000/employee_details/emp/${emp_id}`,
            headers: { 
              'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
            },
            data : data
          };
    
          console.log(config.url,'20')
          
          axios.request(config)
          .then((response) => {
            console.log(response.data,'24');
            setEmpdata(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    
    


    return(
        <>
        {empdata.data && (
        <div className = "container">
         <div className="card text-center bg-primary" style={{width: "18rem;"}}>
         <a href="login" className="btn btn-primary" style={{width: "180px", marginLeft:'934px'}}>Log out</a>
         <div className="card-body">
         <h5 className="card-title">{'Hello'+' '+empdata.data.firstName+' '+empdata.data.lastName}</h5>
         <p className="card-text">Welcome to your portal.</p>        
         </div>
         </div>
         <div clasName="card text-center" style={{ display: "flex",
          flexDirection: "row", backgroundColor:"#F2EBE9", height:"20vh" }}>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">EmployeeId</h5>
         <p className="card-text">{' '+empdata.officedata.employeeId+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Department</h5>
         <p className="card-text">{' '+empdata.officedata.departmentName+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Category name</h5>
         <p className="card-text">{' '+empdata.officedata.categoryName+' '}</p>
         </div>
         </div>
         <div clasName="card text-center" style={{ display: "flex",
          flexDirection: "row", backgroundColor:"#F2EBE9", height:"20vh"}}>
             <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Location</h5>
         <p className="card-text">{' '+empdata.officedata.location+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Email</h5>
         <p className="card-text">{' '+empdata.data.email+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Gender</h5>
         <p className="card-text">{' '+empdata.data.gender+' '}</p>
         </div>
            </div>
            <div clasName="card text-center" style={{ display: "flex",
          flexDirection: "row", backgroundColor:"#F2EBE9", height:"20vh"}}>
             <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Role</h5>
         <p className="card-text">{' '+empdata.data.role+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Salary</h5>
         <p className="card-text">{' '+empdata.officedata.salary+' '}</p>
         </div>
         <div className="card-body text-center" style={{width: "30%", marginLeft:"5px"}}>
         <h5 className="card-title">Hobbies</h5>
         <p className="card-text">{' '+empdata.data.hobbies[0]+' '}</p>
         </div>
            </div>
            <div className="card text-center" style={{ backgroundColor:"#E8E3E1", height:"20vh"}}>
         <div className="card-body">
         <h5 className="card-title">{'Thanks for visiting'}</h5>
         <p className="card-text"></p>        
         </div>
         </div>
        </div>
    )
}
</>
    )
}

export default Employee;