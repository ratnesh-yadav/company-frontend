import React ,{useState, useEffect} from 'react';
import axios from 'axios'

function Departmentdetails(){
    const [deptdata, setDeptdata] = useState([])
    useEffect( ()=>{
        let data = '';
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/department_details/getDepartmentdetails',
            headers: { 
              'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setDeptdata(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])


    return (
        <>
         {deptdata &&
       (
        <div className="cs-loader">
<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
        <a href="/managerdashboard" className="btn btn-primary" style={{width: "7vw", marginLeft:''}}>Back</a>
        </div>
      </div>
    </div>
  </div>

  <section className="content">
    <div className="container-fluid">
      <div className="row" >
        <div className="col-12"> 

          <div className="aps-top-box">
            <div className="aps-left-header" style={{textAlign:"end"}}>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header" style={{textAlign:"center"}}>
              <h3 className="card-title">Departments List</h3>
            </div>
         
            <div className="card-body">
              <table id="example1" className="datatable table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Department Id</th>
                   <th>Employee Id</th>
                  </tr>
                </thead>
                 <tbody>
                {
                deptdata.map((i)=>{
                   return(
                   
                    <tr>
                    <td>{i.departmentId}</td>
                  <td>{i.employeeId}</td>
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
       )}
</>)
}

export default Departmentdetails;