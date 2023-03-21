import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="no logo"
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                            width="150"
                            height="100"
                            className="d-inline-block  "
                        />{' '}
                        &nbsp;
                        <h1 className='text-center d-inline-block  align-items-center ms-5'>Employee Management System</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
