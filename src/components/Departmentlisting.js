import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {FaUserFriends } from "react-icons/fa";
import Department from './Department';
import{Link,useNavigate} from 'react-router-dom';
import Adddepartment from './Adddepartment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Departmentlisting() {
  return (
    <div>
       <h1 className='text-center mt-5'>Department Details</h1>
        <p className='p-4'>Businesses often have several departments that perform unique functions, allowing them to operate efficiently and successfully. You may be curious about specific tasks different business departments engage in and what their general purpose is. Understanding how each department within a business works and what they contribute to its success can be helpful in expanding both your business vocabulary and knowledge.</p>
        <><Adddepartment/></>
        <Row>
        <Col md={5} className='p-5'>
        <img src='https://1.bp.blogspot.com/-Z2Wqp4ageHI/X86bwrNt9iI/AAAAAAAAAYA/EA5M3sB87bY6TDzOISim_IyjvHWzj-GNgCLcBGAsYHQ/s626/hotel-interior-isometric-concept_1284-19833.jpg'/>
      </Col>
      <Col>
      <Table striped bordered hover style={{margin:"30px",border:"2px solid,padding:'10px"}} >
      <thead>
        <tr>
        <th>Department</th>
        <th className='text-center'>Description</th>
        
        </tr>
      </thead>
      <tbody>
       {
       Department && Department.length>0 ?
        Department.map((item)=>(
            <tr>
                
                <td>{item.department}</td>
                <td>{item.description}</td>
                
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

export default Departmentlisting
