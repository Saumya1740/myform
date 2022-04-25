import React from 'react'
import { Label } from 'reactstrap'
import './style.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

const Registrationform = () => {
  return (
    <>
    <div className='column1'>
      <h3>Personal Details</h3>
    <form action="" className='form'>
      <div >
        <Label htmlFor='username' className='labels'>Name</Label>
        <input  className='input-container' t type="text" name='username' id='username' />
      </div>

      <div >
        <Label htmlFor='email' className='labels'>E-mail</Label>
        <input className='input-container' type="email" name='email' id='email' />
      </div>

      <div>
        <Label htmlFor='phone' className='labels'>Phone</Label>
        <input className='input-container' type="text" name='phone' id='phone' />
      </div>

      <div>
        <Label htmlFor='rml' className='labels'>RMLId</Label>
        <input className='input-container' type="text" name='rml' id='rml' />
      </div>
    </form>
    </div>

    <div className='column2'>
    <h3>Family Details</h3>
    <form action="" className='form'>
      <div >
        <Label htmlFor='username' className='labels'>Name</Label>
        <input  className='input-container' t type="text" name='username' id='username' />
      </div>

      <div >
        <Label htmlFor='email' className='labels'>E-mail</Label>
        <input className='input-container' type="email" name='email' id='email' />
      </div>

      <div>
        <Label htmlFor='phone' className='labels'>Phone</Label>
        <input className='input-container' type="text" name='phone' id='phone' />
      </div>

      <div>
        <Label htmlFor='rml' className='labels'>RMLId</Label>
        <input className='input-container' type="text" name='rml' id='rml' />
      </div>

      
    </form>
    <button type="text" className="cancel">Cancel</button>
        <button type="text" className="submit">Submit</button>
    </div>
    </>
  )
}

export default Registrationform