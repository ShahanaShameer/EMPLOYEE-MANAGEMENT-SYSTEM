import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react'
import Employee from './Employee';
import { useBeforeUnload, useNavigate } from 'react-router-dom';


function Edit() {
    const[id,setId]=useState('')
    const[empname,setEmpname]=useState('')
    const[department,setDepartment]=useState('')
    const[salary,setSalary]=useState(0)
    const[rating,setRating]=useState('')

useEffect(()=>{
  setId(localStorage.getItem("ID"));
  setEmpname(localStorage.getItem("EMPNAME"));
  setDepartment(localStorage.getItem("DEPARTMENT"));
  setSalary(JSON.parse(localStorage.getItem("SALARY")));
  setRating(localStorage.getItem("RATING"));
},[])
console.log(id);
console.log(empname);
//index value of array of employees
var index=Employee.map(item=>item.id).indexOf(id);
console.log(index);

let history=useNavigate()

const handleUpdate=(e)=>{
  e.preventDefault()
  console.log(e);//event
  let emp=Employee[index]
  console.log(emp);//data


  emp.empname=empname
  emp.department=department
  emp.salary=salary
  emp.rating=rating

  console.log(emp);
  history('/Home')
}

  return (
    <>
    <h1 className='text-center mt-5'>Update Employee Details</h1>
    <p className='p-4'>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.EMS helps to eliminate the manual process and saves a lot of time and money. This system maintains the professional and personal details of the employees and the company in a safe manner. The employee management system lowers the burden and the pressure on HRs and the business managers. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>
    <Row>
   <Col md={5}>
      <img className='p-3' src='https://cdn4.iconfinder.com/data/icons/office-business-1-1/180/Working_Man-512.png'/>
      </Col>
      <Col md={6}>
      <Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        <h3 className='text-center'>Update Your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Department</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Department" value={department} onChange={(e)=>setDepartment(e.target.value)} required/>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" value={salary} onChange={(e)=>setSalary(e.target.value)}  required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Rating" value={rating} onChange={(e)=>setRating(e.target.value)}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
       Update
      </Button>
    </Form>
      </Col>
      </Row>
    </>
  )
}

export default Edit
