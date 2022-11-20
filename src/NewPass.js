import React from 'react'
import "./NewPass.css"
import Navbar from './Navbar'
import Text from './components/Text/Text'
import Text2 from './components/Text/Text2'
import Inputbox from './components/Elements/Inputbox'
import Button from './components/Elements/Button'
import "./Welcome1.css"
import { Link } from "react-router-dom";


const NewPass = () => {
  return (
    <div className='NewPass'>
        <Navbar/>
        <div className='nbdy'>
            <Text>Create New Password</Text>
            <Text2>Enter your new password</Text2>
            <div className='form'>
                <Inputbox type="password" name="pwrd" id="pwrd" place="Enter New Password"/>
                <Inputbox type="password" name="npwrd" id="npwrd" place="Confirm New Password"/>
            </div>
            <Button>Reset Password</Button>
        </div>
    </div>
  )
}

export default NewPass