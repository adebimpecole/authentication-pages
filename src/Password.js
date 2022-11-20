import React from 'react'
import "./Password.css"
import Navbar from './Navbar'
import Text from './components/Text/Text'
import Text2 from './components/Text/Text2'
import Inputbox from './components/Elements/Inputbox'
import Button from './components/Elements/Button'
import "./Welcome1.css"
import { Link } from "react-router-dom";



const Password = () => {
  return (
    <div className='Password'>
        <Navbar/>
        <div className='pbdy'>
            <Text>Forgot Password ?</Text>
            <Text2>Please enter your email address </Text2>
            <div className='form'>
                <Inputbox type="email" name="e-ml" id="e-ml" place="Email Address"/>
                <span className='liltxt'>A code will be sent to this email address</span>
            </div>
            <Link to='/veri' className='lg'><Button>Continue</Button></Link>
        </div>
    </div>
  )
}

export default Password