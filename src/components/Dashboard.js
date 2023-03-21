import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Dashboard() {
  return (
    <div className='d-flex justify-content-center'>
    <Card style={{ width: '20rem', height: '30rem',padding:'20px' ,margin:'30px'}}>
      <Card.Body className='bg-warning '>
        <Card.Title>Employee</Card.Title>
        
        <Card.Text>
        <ListGroup>
      <ListGroup.Item>1.John</ListGroup.Item>
      <ListGroup.Item>2.Navya</ListGroup.Item>
      <ListGroup.Item>3.Vivek</ListGroup.Item>
      <ListGroup.Item>4.Anu</ListGroup.Item>
      <ListGroup.Item>5.Anjali</ListGroup.Item>
      <ListGroup.Item>6.Manu</ListGroup.Item>
    </ListGroup>
    <br/><br/>
    <Card.Link href="/Home">
        <img className='ms-5' src='https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png 'width="80"
                            height="80"/>
    </Card.Link>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem', height: '30rem',padding:'30px', margin:'30px'}}>
      <Card.Body className='bg-success'>
        <Card.Title>Department</Card.Title>
        
        <Card.Text>
        <ListGroup>
      <ListGroup.Item>1.Human Resource</ListGroup.Item>
      <ListGroup.Item>2.System Analyst</ListGroup.Item>
      <ListGroup.Item>3.Software Development</ListGroup.Item>
      <ListGroup.Item>4.Finance</ListGroup.Item>
      <ListGroup.Item>5.Marketing</ListGroup.Item>
      <ListGroup.Item>6.Quality Management</ListGroup.Item>
    </ListGroup>
    <br/><br/>
    <Card.Link href="/Departmentlisting">
        <img className='ms-5' src='https://cdn3.iconfinder.com/data/icons/business-and-office-32/96/Business-122-512.png'width="80"
                            height="80"/>
    </Card.Link>

        </Card.Text>
        
      </Card.Body>
    </Card>
      
      
    </div>
  )
}

export default Dashboard
