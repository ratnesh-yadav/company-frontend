import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Assignemployees() {

  const [employees, setEmployees] = useState('');
  const [departments, setDepartments] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect( ()=>{
    let data = '';
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/employee/getEmployee',
        headers: { 
          'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data.data,'19');
        setEmployees(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

       config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/department/getDepartments',
        headers: { 
          'Cookie': 'connect.sid=s%3ApbkZg5XCRFG6f1z6abVbJEXUOJx9vfYl.QZOBL89qnAeKkmjrZq9V%2FY%2BRZ5ULIb816Dvvcw68Sq0'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDepartments(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
},[])

  // Function to handle employee selection
  const handleEmployeeSelect = (e) => {
    const employeeId = e.target.value;
    if (!selectedEmployees.includes(employeeId)) {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    }
    if (selectedEmployees.includes(employeeId)){
        let ind = selectedEmployees.indexOf(employeeId)
         selectedEmployees.splice(ind, ind+1);
         console.log(selectedEmployees,'59')
         setSelectedEmployees(selectedEmployees, employeeId)
    }
  };

  // Function to handle department selection
  const handleDepartmentSelect = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Function to assign employees to the selected department
  const assignEmployees = () => {
    // Implement your logic to save the assignment to the server or state
    console.log('Selected Employees:', selectedEmployees);
    console.log('Selected Department:', selectedDepartment);
  };

  return (
    <>
    {employees && departments && 
    (
    <div className="container mt-5">
      <h1>Assign Employees to Department</h1>
      <div className="form-group">
        <label>Select Employees:</label>
        <select
          className="form-control"
          multiple
          onChange={handleEmployeeSelect}
        >
          {employees.map((employee) => (
            <option key={employee._id} value={employee._id}>
              {employee.firstName+' '+employee.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Select Department:</label>
        <select
          className="form-control"
          onChange={handleDepartmentSelect}
        >
          <option value="">Select a Department</option>
          {departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.department_name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary"
        onClick={assignEmployees}
        disabled={!selectedEmployees.length || !selectedDepartment}
      >
        Assign Employees
      </button>
    </div>
    )
    }
    </>
  );
}

export default Assignemployees;
