import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaUserPlus } from "react-icons/fa";
import Employee from './Employee';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Home from './Home';




function Addemployee() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 const[id,setId]=useState('')
  const[empname,setEmpname]=useState('')
  const[department,setDepartment]=useState('')
  const[salary,setSalary]=useState(0)
  const[rating,setRating]=useState('')
 
  let history=useNavigate()
  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids);//unique id
    let uniqueId=ids.slice(0,8)//8 digit unique id
    console.log(uniqueId);
    Employee.push({//add data to employee array
        id:uniqueId,
        empname:empname,
        department:department,
        salary:salary,
        rating:rating
    })
   
    history('/Home')
  }
  return (
    <div>
      <Button variant="success" className='ms-5' onClick={handleShow}>
       <FaUserPlus/>Add
      </Button>

      <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
        
        <Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        // value={empname} 
        onChange={(e)=>setEmpname(e.target.value)} required 
        />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Department</Form.Label>
      <Form.Control type="text" placeholder="Enter Department" 
      
      // value={age} 
      onChange={(e)=>setDepartment(e.target.value)} required
      />
      </Form.Group>
      
      <Form.Group className="mb-3">
      <Form.Label>Salary</Form.Label>
      <Form.Control type="text" placeholder="Enter Salary" 
      // value={designation} 
      onChange={(e)=>setSalary(e.target.value)} required
       />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter Rating" 
        // value={salary} 
        onChange={(e)=>setRating(e.target.value)}  required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleData(e)}>
       Submit
      </Button>
    </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addemployee
