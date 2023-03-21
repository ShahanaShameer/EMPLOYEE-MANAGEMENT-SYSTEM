import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaUserFriends } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Department from './Department';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Adddepartment() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[department,setDepartment]=useState('')
  const[description,setDescription]=useState('')
  let history=useNavigate()
  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids);//unique id
    let uniqueId=ids.slice(0,8)//8 digit unique id
    console.log(uniqueId);
    Department.push({//add data to employee array
       department:department,
        description:description,
        
    })
   
    history('/Departmentlisting')
  }
  return (
    <div>
      <Button variant="success" className='ms-5' onClick={handleShow}>
       <FaUserFriends/>Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Department</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
        
     <Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter Department Name" 
        // value={empname} 
        onChange={(e)=>setDepartment(e.target.value)} required 
        />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter Description" 
      
      // value={age} 
      onChange={(e)=>setDescription(e.target.value)} required
      />
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

export default Adddepartment
