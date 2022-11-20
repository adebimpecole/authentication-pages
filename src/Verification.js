import React from 'react'
import "./Verification.css"
import Navbar from './Navbar'
import Text from './components/Text/Text'
import Text2 from './components/Text/Text2'
import Button from './components/Elements/Button'
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div className='Verification'>
        <Navbar/>
        <div className='vbdy'>
            <Text>Verification Code</Text>
            <Text2>Enter the verification code sent to your email address</Text2>
            <div className='verify'>
                <input type="text" className="vrfy"/>
                <input type="text" className="vrfy"/>
                <input type="text" className="vrfy"/>
                <input type="text" className="vrfy"/>
            </div>
            <div className='resend'>Resend verification code</div>
            <Link to='/nwpass' className='lg'><Button>Continue</Button></Link>
        </div>
    </div>
  )
}

export default Verification