import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Manager() {
  const [empdata, setEmpdata] = useState({});
  const emp_id = localStorage.getItem("empId");
  console.log(emp_id, "6");
  useEffect(() => {
    let data = "";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/employee_details/emp/${emp_id}`,
      headers: {
        Cookie:
          "connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0",
      },
      data: data,
    };

    console.log(config.url, "20");

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "24");
        setEmpdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {empdata.data && (
        <div className="container">
          <div
            className="card text-center bg-primary"
            style={{ width: "18rem;" }}
          >
            <a
              href="login"
              className="btn btn-primary"
              style={{ width: "180px", marginLeft: "934px" }}
            >
              Log out
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {"Hello" +
                  " " +
                  empdata.data.firstName +
                  " " +
                  empdata.data.lastName}
              </h5>
              <p className="card-text">Welcome to your portal.</p>
            </div>
          </div>
          <nav className="nav flex-column" style={{width:"20vw", height:"80vh", backgroundColor:"bisque"}}>
            <a className="nav-link active" aria-current="page" href="/crudemployee" style={{}}>
              Employees
            </a>
            <a className="nav-link" href="/employeedetails" style={{}}>
              Emp. Details
            </a>
            <a className="nav-link" href="/departments" style={{}}>
            Departments  
            </a>
            <a className="nav-link" href="/departmentdetails" style={{}}>
              Dept. Details
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Manager;
