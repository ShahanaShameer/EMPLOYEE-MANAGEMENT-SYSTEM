import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import{Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addemployee from './Addemployee'
import { Button } from 'react-bootstrap';
import {FaRegTrashAlt,FaPencilAlt} from "react-icons/fa";
import{useNavigate} from 'react-router-dom';
import { Router } from 'react-router-dom';
function Home() {
const history=useNavigate();
  const handleDelete=(id)=>{
    alert(`Are you sure you want to delete?`)
    console.log(Employee.map((item)=>item.id).indexOf(id));//index of array value
    let index=Employee.map((item)=>item.id).indexOf(id)
    console.log(index);
    Employee.splice(index,1)//remove last item from the array
    console.log(Employee);
    history('/Home')
  }
  const handleEdit=(id,empname,department,salary,rating)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("DEPARTMENT",department);
    localStorage.setItem("SALARY",JSON.stringify(salary));
    localStorage.setItem("RATING",rating);


  }


  return (
    
      <div>
        <h1 className='text-center mt-5'>Employee Details</h1>
        <p className='p-4'>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.EMS helps to eliminate the manual process and saves a lot of time and money. This system maintains the professional and personal details of the employees and the company in a safe manner. The employee management system lowers the burden and the pressure on HRs and the business managers. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>
        
        <><Addemployee/></>
        <Row>
        <Col md={5}>
        <img className='p-3' src='https://cdn4.iconfinder.com/data/icons/office-business-1-1/180/Working_Man-512.png'/>
      </Col>
        
       <Col md={7}>
       <Table striped bordered hover style={{width:"800px",heborder:"2px solid "}} >
      <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Rating</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        Employee && Employee.length>0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>{item.rating}</td>
                <td>
                  <Link to={'/edit'}><Button onClick={()=>handleEdit(item.id,item.empname,item.department,item.salary,item.rating)}><FaPencilAlt/></Button></Link>&nbsp;&nbsp;&nbsp;
                  <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button>
                  </td>
                
            </tr>
        ))
        :"No data available"
       }
      </tbody>
    </Table> 
    </Col>
      
    </Row>
    </div>
  
    
  )
}

export default Home
