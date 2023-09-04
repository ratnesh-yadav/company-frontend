import './App.css';
import Signup from './signup/signup';
import Login from './signup/login';
import Employee from './dashboard/employeedashboard';
import Manager from './dashboard/managerdashboard';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Crudemployees from './employes/employes';
import Employeesdetails from './employes/employee_details';
import Departments from './deparments/department'
import Departmentdetails from './deparments/department_details';
import Assignemployees from './deparments/assign'

function App() {

  return (
    
      <><BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/managerdashboard" element={<Manager/>} />
        <Route path="/employeedashboard" element={<Employee/>} />
        <Route path="/crudemployee" element={<Crudemployees/>} />
        <Route path="/employeedetails" element={<Employeesdetails/>} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="/departmentdetails" element={<Departmentdetails/>} />
        <Route path="/assign" element={<Assignemployees/>} />
      </Routes>
    </BrowserRouter></>
   
  );
}

export default App;
